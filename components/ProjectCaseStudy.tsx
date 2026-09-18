"use client";

import Image from "next/image";
import { motion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import type { MediaItem, Project, ProjectSection } from "@/lib/projects";
import { Footer, MediaNote } from "@/components/SiteChrome";

const fullImageSizes = "(max-width: 700px) calc(100vw - 32px), (max-width: 1280px) calc(100vw - 152px), 1128px";
const halfImageSizes = "(max-width: 700px) calc(100vw - 32px), (max-width: 1280px) calc((100vw - 176px) / 2), 552px";
const thirdImageSizes = "(max-width: 700px) calc(100vw - 32px), (max-width: 1280px) calc((100vw - 200px) / 3), 360px";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main {...stylex.props(styles.page)}>
      <header>
        <p {...stylex.props(styles.eyebrow)}>
          <span>{project.name}</span>
          <span>{"\u00a0·\u00a0"}</span>
          <span>{project.role}</span>
          <span>{"\u00a0·\u00a0"}</span>
          <span>{project.start}</span>
          <span {...stylex.props(styles.eyebrowArrow)}>-&gt;</span>
          <span {...stylex.props(styles.eyebrowEnd)}>{project.end}</span>
        </p>
        <h1 {...stylex.props(styles.title)}>{project.title}</h1>
      </header>

      <aside {...stylex.props(styles.note)}>
        <span {...stylex.props(styles.noteMark)} aria-hidden="true">
          <svg {...stylex.props(styles.noteIcon)} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="m4.5 3.75 15 16.5m-4.978-5.475a3.75 3.75 0 0 1-5.045-5.55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.937 6.43C3.115 8.367 1.5 12 1.5 12s3 6.75 10.5 6.75a11.075 11.075 0 0 0 5.062-1.181m2.496-1.716C21.602 14.023 22.5 12 22.5 12s-3-6.75-10.5-6.75a11.64 11.64 0 0 0-1.938.157" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.706 8.316a3.753 3.753 0 0 1 3.028 3.331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p {...stylex.props(styles.noteText)}>
          Aspects of this project are confidential &amp; can’t be displayed publicly. If you’d like to know more about my process,
          schedule a portfolio presentation.
        </p>
      </aside>

      <Media media={project.hero} hero />

      {project.about && (
        <section {...stylex.props(styles.about)}>
          <p {...stylex.props(styles.sectionLabel)}>About the project</p>
          <div {...stylex.props(styles.aboutGrid)}>
            {project.about.map((item) => (
              <article key={item.title}>
                <h2 {...stylex.props(styles.aboutTitle)}>{item.title}</h2>
                <p {...stylex.props(styles.aboutBody)}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.sections.map((section, sectionIndex) => (
        <section {...stylex.props(styles.highlight)} key={section.title}>
          <div>
            <p {...stylex.props(styles.sectionLabel)}>Highlight</p>
            <h2 {...stylex.props(styles.highlightTitle)}>{section.title}</h2>
          </div>

          {section.captions ? (
            <div {...stylex.props(styles.contentGrid)}>
              {getSectionFlow(project.slug, sectionIndex, section).map((item, index) =>
                item.kind === "text" ? (
                  <CaptionCard
                    caption={item.caption}
                    icon={iconPlans[project.slug]?.[sectionIndex]?.[item.captionIndex] ?? "page"}
                    key={`${item.caption}-${index}`}
                  />
                ) : (
                  <Media
                    key={`${item.media.src}-${index}`}
                    media={item.media}
                    caption={item.caption}
                  />
                ),
              )}
            </div>
          ) : section.media ? (
            <div {...stylex.props(styles.mediaGrid)}>
              {section.media.map((media, index) => (
                <Media key={`${media.src}-${index}`} media={media} />
              ))}
            </div>
          ) : null}
        </section>
      ))}

      <Footer />
    </main>
  );
}

type FlowItem =
  | { kind: "text"; caption: string; captionIndex: number }
  | { kind: "media"; media: MediaItem; caption?: string };

const flowPlans: Record<string, Array<Array<["text", number] | ["media", number, number?]>>> = {
  carefull: [
    [["text", 0], ["text", 1], ["text", 2], ["text", 3], ["text", 4], ["text", 5]],
    [["media", 0, 0], ["media", 1, 1], ["media", 2, 2], ["media", 3, 3], ["media", 4, 4], ["media", 5, 5]],
    [["text", 0], ["text", 1], ["media", 0, 2], ["media", 1, 3], ["media", 2, 4], ["media", 3, 5], ["media", 4, 6]],
  ],
  wayfair: [
    [["text", 0], ["text", 1], ["media", 0, 2], ["text", 3], ["text", 4]],
    [["text", 0], ["text", 1], ["text", 2], ["text", 3]],
  ],
  youtube: [
    [["text", 0], ["text", 1], ["media", 0, 2], ["text", 3], ["text", 4], ["media", 1, 5], ["media", 2, 6], ["media", 3, 7]],
    [["text", 0], ["text", 1], ["text", 2]],
  ],
};

function getSectionFlow(slug: string, sectionIndex: number, section: ProjectSection): FlowItem[] {
  const captions = section.captions ?? [];
  const media = section.media ?? [];
  const plan = flowPlans[slug]?.[sectionIndex] ?? captions.map((_, index) => ["text", index] as ["text", number]);
  const flow: FlowItem[] = [];

  for (const item of plan) {
    if (item[0] === "text") {
      if (captions[item[1]]) flow.push({ kind: "text", caption: captions[item[1]], captionIndex: item[1] });
      continue;
    }

    if (media[item[1]]) {
      flow.push({ kind: "media", media: media[item[1]], caption: item[2] === undefined ? undefined : captions[item[2]] });
    }
  }

  return flow;
}

type IconName = "tree" | "message" | "refresh" | "page" | "code" | "pie" | "folder" | "report" | "smile";

const iconPlans: Record<string, IconName[][]> = {
  carefull: [
    ["message", "pie", "report", "refresh", "smile", "page"],
    [],
    ["tree", "refresh"],
  ],
  wayfair: [
    ["tree", "folder", "page", "report", "page"],
    ["tree", "tree", "code", "smile"],
  ],
  youtube: [
    ["tree", "message", "page", "refresh", "page", "page", "page", "page"],
    ["code", "pie", "message"],
  ],
};

function CaptionCard({ caption, icon }: { caption: string; icon: IconName }) {
  return (
    <article {...stylex.props(styles.captionCard)}>
      <span {...stylex.props(styles.captionIcon)} aria-hidden="true">
        <FeatureIcon name={icon} />
      </span>
      <p {...stylex.props(styles.caption)}>{caption}</p>
    </article>
  );
}

function FeatureIcon({ name }: { name: IconName }) {
  if (name === "tree") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M6.75 9.375H3a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75h3.75a.75.75 0 0 0 .75-.75v-3.75a.75.75 0 0 0-.75-.75Zm13.5-5.625h-4.5a.75.75 0 0 0-.75.75V9c0 .414.336.75.75.75h4.5A.75.75 0 0 0 21 9V4.5a.75.75 0 0 0-.75-.75Zm0 10.5h-4.5A.75.75 0 0 0 15 15v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75ZM7.5 12h3.75M15 17.25h-1.5A2.25 2.25 0 0 1 11.25 15V9a2.25 2.25 0 0 1 2.25-2.25H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "message") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M6.71 13.5 3 16.5v-12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v8.25a.75.75 0 0 1-.75.75H6.71Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 13.5v3.75a.75.75 0 0 0 .75.75h9.04L21 21V9a.75.75 0 0 0-.75-.75H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "refresh") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M16.516 9.348h4.5v-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.166 6.166a8.25 8.25 0 0 1 11.667 0l3.182 3.182M7.484 14.652h-4.5v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.834 17.834a8.25 8.25 0 0 1-11.668 0l-3.182-3.182" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "page") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M14.69 20.25H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v10.19a.75.75 0 0 1-.22.53l-4.81 4.81a.75.75 0 0 1-.53.22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.183 15H15v5.182" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "code") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 32 32" fill="none"><path d="m8 11-6 5 6 5m16-10 6 5-6 5M20 5l-8 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "pie") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M12 12V3m7.794 4.5-15.588 9M3.15 13.645A9.014 9.014 0 0 1 9 3.512v6.756l-5.85 3.377Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3a9 9 0 1 1-7.76 13.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "folder") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 32 32" fill="none"><path d="M4 26V8a1 1 0 0 1 1-1h6.667a1 1 0 0 1 .6.2l3.466 2.6a1 1 0 0 0 .6.2H25a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="m4 26 3.749-9.371A1 1 0 0 1 8.677 16h6.02a1 1 0 0 0 .555-.168l2.496-1.664a1 1 0 0 1 .555-.168h10.31a1 1 0 0 1 .948 1.316L26 26H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "report") {
    return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 24 24" fill="none"><path d="M10.5 10.5h6m-6 3h6m3-9.75h-15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75Zm-12 0v16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  return <svg {...stylex.props(styles.captionIconSvg)} viewBox="0 0 32 32" fill="none"><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.197 19a6.004 6.004 0 0 1-10.394 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" /></svg>;
}

function Media({ media, hero = false, caption }: { media: MediaItem; hero?: boolean; caption?: string }) {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const imageSizes = hero || !media.layout || media.layout === "full"
    ? fullImageSizes
    : media.layout === "half"
      ? halfImageSizes
      : thirdImageSizes;

  return (
    <motion.figure
      {...stylex.props(
        styles.media,
        hero && styles.heroMedia,
        !hero && media.layout === "half" && styles.half,
        !hero && media.layout === "third" && styles.third,
        !hero && (!media.layout || media.layout === "full") && styles.full,
      )}
      onHoverStart={caption ? () => setHovered(true) : undefined}
      onHoverEnd={caption ? () => setHovered(false) : undefined}
      style={media.ratio ? { aspectRatio: String(media.ratio) } : undefined}
    >
      {media.type === "video" ? (
        <video {...stylex.props(styles.mediaElement, Boolean(media.ratio) && styles.coverMedia)} src={media.src} autoPlay muted loop playsInline preload="metadata" />
      ) : (
        <Image
          {...stylex.props(styles.mediaElement, Boolean(media.ratio) && styles.coverMedia)}
          src={media.src}
          alt=""
          fill
          sizes={imageSizes}
          quality={90}
          loading={hero ? "eager" : "lazy"}
          fetchPriority={hero ? "high" : undefined}
        />
      )}
      {caption && (
        <MediaNote
          caption={caption}
          expanded={hovered || opened}
          onToggle={() => {
            if (!hovered) setOpened((value) => !value);
          }}
        />
      )}
    </motion.figure>
  );
}

const styles = stylex.create({
  page: {
    width: "100%",
    maxWidth: 1280,
    minHeight: "100vh",
    marginInline: "auto",
    padding: "120px 76px 0",
    "@media (max-width: 700px)": { padding: "80px 16px 0" },
  },
  eyebrow: {
    display: "flex",
    alignItems: "flex-start",
    margin: 0,
    color: "rgba(255,255,255,.4)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, SFMono-Regular, monospace",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "15.4px",
    textTransform: "uppercase",
    "@media (max-width: 700px)": {
      fontSize: 10,
      lineHeight: "11px",
    },
  },
  eyebrowArrow: { marginInline: 8, fontFamily: "Inter, Arial, sans-serif" },
  eyebrowEnd: { flex: 1 },
  title: {
    margin: "16px 0 0",
    color: "#fff",
    fontSize: 40,
    fontWeight: 400,
    lineHeight: "44px",
    letterSpacing: "-0.01em",
    whiteSpace: "pre-line",
    "@media (max-width: 700px)": { fontSize: 20, lineHeight: "22px", letterSpacing: 0, whiteSpace: "normal" },
  },
  note: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    margin: "40px 0 24px",
    padding: 24,
    borderRadius: 8,
    color: "#c4c4c4",
    backgroundColor: "rgba(255,255,255,.07)",
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: ".01em",
    overflow: "hidden",
    "@media (max-width: 700px)": {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: 16,
      margin: "24px 0",
      padding: 24,
      fontSize: 14,
      lineHeight: "19.6px",
    },
  },
  noteText: { margin: 0, textWrap: "balance" },
  noteMark: {
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    width: 48,
    height: 48,
    borderRadius: 100,
    color: "rgba(255,255,255,.7)",
    backgroundColor: "rgba(255,255,255,.07)",
    "@media (max-width: 700px)": { width: 32, height: 32 },
  },
  noteIcon: { width: 24, height: 24, "@media (max-width: 700px)": { width: 16, height: 16 } },
  media: {
    position: "relative",
    margin: 0,
    minWidth: 0,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,.07)",
  },
  heroMedia: { width: "100%" },
  mediaElement: { display: "block", width: "100%", height: "auto", objectFit: "cover" },
  coverMedia: { height: "100%" },
  about: { marginTop: 144, "@media (max-width: 700px)": { marginTop: 64 } },
  sectionLabel: {
    margin: "0 0 10px",
    color: "#e35e17",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, SFMono-Regular, monospace",
    fontSize: 14,
    lineHeight: "15.4px",
    textTransform: "uppercase",
    "@media (max-width: 700px)": { fontSize: 10, lineHeight: "11px" },
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 40,
    marginTop: 32,
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr", gap: 32, marginTop: 32 },
  },
  aboutTitle: {
    margin: "0 0 8px",
    color: "#fff",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "22px",
    "@media (max-width: 700px)": { fontSize: 16, lineHeight: "17.6px" },
  },
  aboutBody: { margin: 0, color: "rgba(255,255,255,.7)", fontSize: 16, lineHeight: "22.4px", letterSpacing: "0.01em", "@media (max-width: 700px)": { fontSize: 14, lineHeight: "19.6px" } },
  highlight: { marginTop: 144, "@media (max-width: 700px)": { marginTop: 64 } },
  highlightTitle: {
    maxWidth: 1128,
    margin: 0,
    color: "#fff",
    fontSize: 32,
    fontWeight: 400,
    lineHeight: "38.4px",
    letterSpacing: "-0.006em",
    "@media (max-width: 700px)": { fontSize: 20, lineHeight: "24px", letterSpacing: 0 },
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: 24,
    marginTop: 56,
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr", gap: 16, marginTop: 24 },
  },
  captionCard: {
    gridColumn: "span 3",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 32,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,.07)",
    "@media (max-width: 700px)": { gridColumn: "auto", gap: 16, padding: 20 },
  },
  captionIcon: {
    display: "grid",
    placeItems: "center",
    width: 48,
    height: 48,
    borderRadius: 100,
    color: "rgba(255,255,255,.7)",
    backgroundColor: "rgba(255,255,255,.07)",
    "@media (max-width: 700px)": { width: 32, height: 32 },
  },
  captionIconSvg: { width: 24, height: 24, "@media (max-width: 700px)": { width: 16, height: 16 } },
  caption: {
    margin: 0,
    color: "#c4c4c4",
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: "0.01em",
    "@media (max-width: 700px)": { fontSize: 14, lineHeight: "19.6px" },
  },
  mediaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: 24,
    marginTop: 56,
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr", gap: 16, marginTop: 24 },
  },
  full: { gridColumn: "span 6", "@media (max-width: 700px)": { gridColumn: "auto" } },
  half: { gridColumn: "span 3", "@media (max-width: 700px)": { gridColumn: "auto" } },
  third: { gridColumn: "span 2", "@media (max-width: 700px)": { gridColumn: "auto" } },
});
