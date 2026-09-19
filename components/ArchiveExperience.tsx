"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/SiteChrome";

const spring = { type: "spring", stiffness: 420, damping: 34 } as const;

type GalleryImage = {
  src: string;
  alt: string;
  aspect: "wide" | "square" | "tall";
  fit?: "cover" | "contain";
};

type ArchiveProject = {
  id: "beach" | "strictly" | "thrive";
  index: string;
  title: string;
  year: string;
  accent: string;
  disciplines: string;
  hero: string;
  heroAlt: string;
  question: string;
  summary: string;
  contribution: string;
  images: GalleryImage[];
};

const projects: ArchiveProject[] = [
  {
    id: "beach",
    index: "01",
    title: "Beach",
    year: "2015",
    accent: "#3094f0",
    disciplines: "Creative direction / Film / Identity",
    hero: "/assets/archive/beach-hero.jpg",
    heroAlt: "Black-and-white album artwork for Beach",
    question: "How do you build a compelling, interwoven story that communicates across many mediums?",
    summary:
      "Beach was a visual world created around musician John Nichols’ debut EP. Photography established its location, palette, and emotional language; film, album art, posters, web, and social releases then unfolded as one connected narrative.",
    contribution: "Project lead, creative direction, film production, and launch strategy.",
    images: [
      { src: "/assets/archive/beach-photo.jpg", alt: "Black-and-white portrait made for Beach", aspect: "square" },
      { src: "/assets/archive/beach-location.jpg", alt: "Cloudy shoreline used as a visual reference for Beach", aspect: "wide" },
      { src: "/assets/archive/beach-album.jpg", alt: "Final Beach album cover", aspect: "square" },
    ],
  },
  {
    id: "strictly",
    index: "02",
    title: "Strictly",
    year: "2014–15",
    accent: "#ee801f",
    disciplines: "Brand identity / Product design / Development",
    hero: "/assets/archive/strictly-hero.jpg",
    heroAlt: "Strictly Performance Motorsports brand system on an orange field",
    question: "How do you build an adaptable identity and robust user experience for an evolving company?",
    summary:
      "Strictly Performance Motorsports needed a new name, an identity that could flex across many applications, and a better commerce experience. The result joined a vehicle-inspired mark, a 50-page brand system, and a purpose-built website.",
    contribution: "Project lead, product design, web design, and development.",
    images: [
      { src: "/assets/archive/strictly-inspiration.jpg", alt: "Aerial view of a winding racetrack", aspect: "wide" },
      { src: "/assets/archive/strictly-concepts.png", alt: "Early orange Strictly logo concepts", aspect: "wide", fit: "contain" },
      { src: "/assets/archive/strictly-business-card.jpg", alt: "Strictly business card and packaging system", aspect: "square" },
      { src: "/assets/archive/strictly-site.jpg", alt: "Long-form Strictly ecommerce website design", aspect: "tall", fit: "contain" },
    ],
  },
  {
    id: "thrive",
    index: "03",
    title: "Thrive",
    year: "2014",
    accent: "#6bbc66",
    disciplines: "Research / Civic design / Film",
    hero: "/assets/archive/thrive-hero.jpg",
    heroAlt: "Historic downtown Grand Rapids street scene",
    question: "How do you build a thriving, walkable city center?",
    summary:
      "Thrive began as four months of collaborative research into the services missing from downtown Grand Rapids. A student presentation became a public conversation—covered across local media and debated throughout the city.",
    contribution: "Film production, research, and project development.",
    images: [
      { src: "/assets/archive/thrive-article-one.png", alt: "Local article covering the Thrive proposal", aspect: "wide" },
      { src: "/assets/archive/thrive-article-two.png", alt: "News coverage of the Grand Rapids grocery discussion", aspect: "wide" },
      { src: "/assets/archive/thrive-newspaper.jpeg", alt: "Printed newspaper coverage of Thrive", aspect: "square" },
    ],
  },
];

const smallerWork = [
  {
    title: "Fjords & Highlands",
    discipline: "Film",
    image: "/assets/archive/fjords.png",
    href: "https://vimeo.com/125062270",
  },
  {
    title: "Herman Miller",
    discipline: "Film",
    image: "/assets/archive/herman-miller.png",
    href: "https://vimeo.com/123354938",
  },
  {
    title: "We, People of the Reaching",
    discipline: "Film",
    image: "/assets/archive/reaching.png",
    href: "https://vimeo.com/104971630",
  },
  {
    title: "Warrior Poets",
    discipline: "Web",
    image: "/assets/archive/warrior-poets.png",
  },
];

function ExpandingLogo() {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      {...stylex.props(styles.logo)}
      href="#archive-work"
      aria-label="Aaron Porter — jump to the 2016 work archive"
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <span>A</span>
      <motion.span
        {...stylex.props(styles.logoLetters)}
        initial={false}
        animate={{ width: expanded ? "3.02em" : 0 }}
        transition={reduceMotion ? { duration: 0 } : spring}
        aria-hidden="true"
      >
        aron
      </motion.span>
      <span aria-hidden="true">.</span>
    </motion.a>
  );
}

function ProjectCard({ project, onOpen }: { project: ArchiveProject; onOpen: () => void }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...stylex.props(styles.projectCard)}
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`Open ${project.title} case study`}
    >
      <motion.div
        {...stylex.props(styles.projectImageWrap)}
        initial={false}
        animate={{ scale: hovered && !reduceMotion ? 1.035 : 1 }}
        transition={spring}
      >
        <Image
          {...stylex.props(styles.projectImage)}
          src={project.hero}
          alt=""
          fill
          sizes="(max-width: 700px) calc(100vw - 32px), 1128px"
          quality={90}
        />
      </motion.div>
      <div {...stylex.props(styles.projectVeil)} />
      <span {...stylex.props(styles.projectIndex)}>{project.index}</span>
      <div {...stylex.props(styles.projectCopy)}>
        <span {...stylex.props(styles.projectDisciplines)}>{project.disciplines}</span>
        <h2 {...stylex.props(styles.projectTitle)}>{project.title}</h2>
        <span {...stylex.props(styles.projectYear)}>{project.year}</span>
      </div>
      <motion.span
        {...stylex.props(styles.projectAction)}
        initial={false}
        animate={{ x: hovered && !reduceMotion ? 8 : 0 }}
        transition={spring}
      >
        View story <span aria-hidden="true">→</span>
      </motion.span>
      <motion.span
        {...stylex.props(styles.accentRule)}
        style={{ backgroundColor: project.accent }}
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0.18 }}
        transition={spring}
      />
    </button>
  );
}

function ProjectDialog({ project, onClose }: { project: ArchiveProject; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      {...stylex.props(styles.dialogBackdrop)}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        {...stylex.props(styles.dialog)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        initial={reduceMotion ? false : { x: "100%" }}
        animate={{ x: 0 }}
        exit={reduceMotion ? undefined : { x: "100%" }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 34 }}
      >
        <button ref={closeRef} {...stylex.props(styles.closeButton)} type="button" onClick={onClose}>
          Close <span aria-hidden="true">×</span>
        </button>
        <div {...stylex.props(styles.dialogHero)}>
          <Image
            {...stylex.props(styles.dialogHeroImage)}
            src={project.hero}
            alt={project.heroAlt}
            fill
            sizes="(max-width: 900px) 100vw, 92vw"
            quality={90}
            priority
          />
          <div {...stylex.props(styles.dialogHeroVeil)} />
          <div {...stylex.props(styles.dialogHeroCopy)}>
            <span {...stylex.props(styles.dialogEyebrow)}>{project.year} / {project.disciplines}</span>
            <h2 id={`${project.id}-title`} {...stylex.props(styles.dialogTitle)}>{project.title}</h2>
          </div>
        </div>
        <div {...stylex.props(styles.dialogBody)}>
          <p {...stylex.props(styles.dialogLabel)} style={{ color: project.accent }}>The question</p>
          <p {...stylex.props(styles.dialogQuestion)}>{project.question}</p>
          <div {...stylex.props(styles.dialogColumns)}>
            <p {...stylex.props(styles.dialogText)}>{project.summary}</p>
            <div {...stylex.props(styles.contribution)}>
              <span {...stylex.props(styles.contributionLabel)}>Contribution</span>
              <p>{project.contribution}</p>
            </div>
          </div>
          <div {...stylex.props(styles.gallery)}>
            {project.images.map((item) => (
              <figure
                key={item.src}
                {...stylex.props(
                  styles.galleryItem,
                  item.aspect === "wide" ? styles.galleryWide : item.aspect === "tall" ? styles.galleryTall : styles.gallerySquare,
                )}
              >
                <Image
                  {...stylex.props(styles.galleryImage, item.fit === "contain" && styles.galleryImageContain)}
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 48px), 42vw"
                  quality={90}
                />
              </figure>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

function SmallWorkCard({ item }: { item: (typeof smallerWork)[number] }) {
  const reduceMotion = useReducedMotion();
  const card = (
    <motion.article
      {...stylex.props(styles.smallCard)}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      <motion.div
        {...stylex.props(styles.smallImageWrap)}
        variants={{ rest: { scale: 1 }, hover: { scale: reduceMotion ? 1 : 1.045 } }}
        transition={spring}
      >
        <Image
          {...stylex.props(styles.smallImage)}
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 700px) calc(100vw - 32px), 50vw"
          quality={90}
        />
      </motion.div>
      <div {...stylex.props(styles.smallVeil)} />
      <div {...stylex.props(styles.smallCopy)}>
        <h3 {...stylex.props(styles.smallTitle)}>{item.title}</h3>
        <span {...stylex.props(styles.smallMeta)}>{item.discipline}{item.href ? "  ↗" : ""}</span>
      </div>
    </motion.article>
  );

  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.title} externally`}>
      {card}
    </a>
  ) : card;
}

export function ArchiveExperience() {
  const [activeProject, setActiveProject] = useState<ArchiveProject | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.hero)} aria-labelledby="archive-title">
        <Image
          {...stylex.props(styles.heroPoster)}
          src="/assets/archive/hero-poster.jpg"
          alt="Aaron Porter in the studio, photographed for the original 2016 portfolio"
          fill
          sizes="100vw"
          quality={90}
          priority
        />
        <video
          {...stylex.props(styles.heroVideo)}
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/archive/hero-loop.webm" type="video/webm" />
          <source src="/assets/archive/hero-loop.mp4" type="video/mp4" />
        </video>
        <div {...stylex.props(styles.heroTone)} />
        <div {...stylex.props(styles.heroGrain)} />
        <div {...stylex.props(styles.heroTopline)}>
          <span>Original portfolio</span>
          <span>2015—2016</span>
        </div>
        <h1 id="archive-title" {...stylex.props(styles.visuallyHidden)}>Aaron Porter 2016 portfolio archive</h1>
        <ExpandingLogo />
        <Link {...stylex.props(styles.sideLink, styles.sideLinkLeft)} href="/about">
          <span aria-hidden="true">←</span> About me
        </Link>
        <a {...stylex.props(styles.sideLink, styles.sideLinkRight)} href="#archive-work">
          My work <span aria-hidden="true">→</span>
        </a>
        <a {...stylex.props(styles.scrollCue)} href="#archive-work" aria-label="Scroll to archived work">
          Scroll <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="archive-work" {...stylex.props(styles.work)}>
        <div {...stylex.props(styles.intro)}>
          <p {...stylex.props(styles.eyebrow)}>Portfolio / 2016</p>
          <h2 {...stylex.props(styles.introTitle)}>Film, identity, and civic stories from the years before product.</h2>
          <p {...stylex.props(styles.introText)}>
            Rebuilt from the original WordPress portfolio and its surviving source files. The work, writing, and visual systems are preserved; the experience now runs on the same modern foundation as this site.
          </p>
        </div>

        <div {...stylex.props(styles.projectList)}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />
          ))}
        </div>

        <section {...stylex.props(styles.archiveSection)} aria-labelledby="smaller-work-title">
          <div {...stylex.props(styles.archiveHeading)}>
            <p {...stylex.props(styles.eyebrow)}>Smaller work</p>
            <h2 id="smaller-work-title" {...stylex.props(styles.archiveTitle)}>The archive</h2>
          </div>
          <div {...stylex.props(styles.smallGrid)}>
            {smallerWork.map((item) => <SmallWorkCard key={item.title} item={item} />)}
          </div>
        </section>

        <div {...stylex.props(styles.rebuildNote)}>
          <span {...stylex.props(styles.rebuildMark)}>A.</span>
          <p>Originally designed and built in Grand Rapids, Michigan. Recovered and rebuilt in 2026.</p>
        </div>
        <Footer />
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectDialog key={activeProject.id} project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

const styles = stylex.create({
  page: {
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundColor: "#050505",
  },
  hero: {
    position: "relative",
    width: "100%",
    height: "100svh",
    minHeight: 620,
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
    backgroundColor: "#10171b",
  },
  heroPoster: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  heroVideo: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroTone: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 50% 46%, rgba(0,0,0,.04), rgba(0,0,0,.16) 48%, rgba(0,0,0,.5) 100%), linear-gradient(180deg, rgba(7,10,12,.1), rgba(7,10,12,.35))",
  },
  heroGrain: {
    position: "absolute",
    inset: 0,
    opacity: 0.11,
    pointerEvents: "none",
    backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.06) 0, rgba(255,255,255,.06) 1px, transparent 1px, transparent 3px)",
    mixBlendMode: "soft-light",
  },
  heroTopline: {
    position: "absolute",
    top: 28,
    left: 32,
    right: 32,
    display: "flex",
    justifyContent: "space-between",
    color: "rgba(255,255,255,.62)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 11,
    lineHeight: "14px",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    "@media (max-width: 700px)": { top: 20, left: 20, right: 20, fontSize: 9 },
  },
  logo: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "baseline",
    color: "#f03a47",
    fontFamily: "Suisse Intl Medium, Helvetica, Arial, sans-serif",
    fontSize: "clamp(96px, 18vw, 280px)",
    fontWeight: 400,
    lineHeight: 0.8,
    letterSpacing: "-.075em",
    outline: "none",
  },
  logoLetters: {
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  sideLink: {
    position: "absolute",
    zIndex: 3,
    top: "50%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: {
      default: "rgba(255,255,255,.72)",
      ":hover": "#fff",
    },
    fontSize: 15,
    letterSpacing: ".02em",
    transition: "color 180ms ease, transform 180ms ease",
    "@media (max-width: 700px)": { top: "auto", bottom: 76, fontSize: 13 },
  },
  sideLinkLeft: {
    left: 32,
    ":hover": { transform: "translateX(-4px)" },
    "@media (max-width: 700px)": { left: 20 },
  },
  sideLinkRight: {
    right: 32,
    ":hover": { transform: "translateX(4px)" },
    "@media (max-width: 700px)": { right: 20 },
  },
  scrollCue: {
    position: "absolute",
    zIndex: 2,
    bottom: 100,
    left: "50%",
    display: "flex",
    gap: 10,
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,.42)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 10,
    lineHeight: "12px",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    "@media (max-width: 700px)": { bottom: 100 },
  },
  visuallyHidden: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
  work: {
    width: "100%",
    maxWidth: 1280,
    marginInline: "auto",
    padding: "128px 76px 0",
    "@media (max-width: 700px)": { padding: "80px 16px 0" },
  },
  intro: {
    maxWidth: 920,
    marginBottom: 88,
    "@media (max-width: 700px)": { marginBottom: 48 },
  },
  eyebrow: {
    margin: "0 0 20px",
    color: "#f03a47",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 11,
    lineHeight: "14px",
    letterSpacing: ".08em",
    textTransform: "uppercase",
  },
  introTitle: {
    maxWidth: 850,
    margin: 0,
    color: "#fff",
    fontSize: "clamp(40px, 6.25vw, 80px)",
    fontWeight: 400,
    lineHeight: 0.98,
    letterSpacing: "-.035em",
  },
  introText: {
    maxWidth: 620,
    margin: "40px 0 0 auto",
    color: "rgba(255,255,255,.58)",
    fontSize: 18,
    lineHeight: 1.45,
    letterSpacing: ".005em",
    "@media (max-width: 700px)": { marginTop: 24, fontSize: 15 },
  },
  projectList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  projectCard: {
    position: "relative",
    width: "100%",
    height: "min(72vh, 760px)",
    minHeight: 560,
    display: "block",
    overflow: "hidden",
    padding: 0,
    border: 0,
    borderRadius: 8,
    backgroundColor: "#111",
    color: "#fff",
    cursor: "pointer",
    textAlign: "left",
    isolation: "isolate",
    "@media (max-width: 700px)": { height: 480, minHeight: 0 },
  },
  projectImageWrap: { position: "absolute", zIndex: -2, inset: 0 },
  projectImage: { width: "100%", height: "100%", objectFit: "cover" },
  projectVeil: {
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.08) 40%, rgba(0,0,0,.62))",
  },
  projectIndex: {
    position: "absolute",
    top: 32,
    left: 32,
    color: "rgba(255,255,255,.6)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 11,
    letterSpacing: ".08em",
    "@media (max-width: 700px)": { top: 20, left: 20, fontSize: 9 },
  },
  projectCopy: {
    position: "absolute",
    left: 40,
    right: 40,
    bottom: 40,
    "@media (max-width: 700px)": { left: 24, right: 24, bottom: 24 },
  },
  projectDisciplines: {
    display: "block",
    marginBottom: 12,
    color: "rgba(255,255,255,.65)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 10,
    lineHeight: "13px",
    letterSpacing: ".06em",
    textTransform: "uppercase",
  },
  projectTitle: {
    margin: 0,
    color: "#fff",
    fontSize: "clamp(64px, 11vw, 144px)",
    fontWeight: 400,
    lineHeight: 0.78,
    letterSpacing: "-.065em",
  },
  projectYear: {
    display: "block",
    marginTop: 24,
    color: "rgba(255,255,255,.65)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 11,
    lineHeight: "14px",
    letterSpacing: ".08em",
  },
  projectAction: {
    position: "absolute",
    right: 40,
    bottom: 40,
    display: "flex",
    gap: 12,
    color: "#fff",
    fontSize: 15,
    lineHeight: "20px",
    "@media (max-width: 700px)": { display: "none" },
  },
  accentRule: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    transformOrigin: "left center",
  },
  archiveSection: { paddingTop: 144, "@media (max-width: 700px)": { paddingTop: 88 } },
  archiveHeading: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 },
  archiveTitle: {
    margin: 0,
    color: "#fff",
    fontSize: "clamp(48px, 7vw, 88px)",
    fontWeight: 400,
    lineHeight: 0.9,
    letterSpacing: "-.045em",
  },
  smallGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  smallCard: {
    position: "relative",
    height: 340,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#111",
    isolation: "isolate",
    "@media (max-width: 700px)": { height: 260 },
  },
  smallImageWrap: { position: "absolute", zIndex: -2, inset: 0 },
  smallImage: { width: "100%", height: "100%", objectFit: "cover" },
  smallVeil: {
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.46))",
  },
  smallCopy: { position: "absolute", left: 28, right: 28, bottom: 26 },
  smallTitle: { margin: 0, color: "#fff", fontSize: 28, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em" },
  smallMeta: {
    display: "block",
    marginTop: 10,
    color: "rgba(255,255,255,.58)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace",
    fontSize: 10,
    letterSpacing: ".08em",
    textTransform: "uppercase",
  },
  rebuildNote: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 144,
    paddingTop: 32,
    borderTop: "1px solid rgba(255,255,255,.14)",
    color: "rgba(255,255,255,.52)",
    fontSize: 15,
    lineHeight: 1.4,
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr", marginTop: 88 },
  },
  rebuildMark: { color: "#f03a47", fontFamily: "Suisse Intl Medium, Helvetica, Arial, sans-serif", fontSize: 40, lineHeight: 1 },
  dialogBackdrop: {
    position: "fixed",
    zIndex: 100,
    inset: 0,
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.72)",
  },
  dialog: {
    position: "relative",
    width: "min(92vw, 1240px)",
    height: "100%",
    overflowY: "auto",
    overscrollBehavior: "contain",
    backgroundColor: "#f3f3ef",
    color: "#111",
    boxShadow: "-24px 0 80px rgba(0,0,0,.3)",
    "@media (max-width: 700px)": { width: "100vw" },
  },
  closeButton: {
    position: "fixed",
    zIndex: 4,
    top: 20,
    right: 20,
    height: 44,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 16px",
    border: 0,
    borderRadius: 100,
    backgroundColor: { default: "rgba(0,0,0,.72)", ":hover": "#000" },
    color: "#fff",
    cursor: "pointer",
    fontSize: 14,
    backdropFilter: "blur(12px)",
  },
  dialogHero: { position: "relative", height: "min(66vh, 740px)", minHeight: 480, overflow: "hidden", backgroundColor: "#111" },
  dialogHeroImage: { width: "100%", height: "100%", objectFit: "cover" },
  dialogHeroVeil: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.58))" },
  dialogHeroCopy: { position: "absolute", left: 56, right: 56, bottom: 48, color: "#fff", "@media (max-width: 700px)": { left: 24, right: 24, bottom: 24 } },
  dialogEyebrow: { fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace", fontSize: 10, letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" },
  dialogTitle: { margin: "14px 0 0", fontSize: "clamp(72px, 13vw, 168px)", fontWeight: 400, lineHeight: 0.75, letterSpacing: "-.07em" },
  dialogBody: { padding: "80px 56px 88px", "@media (max-width: 700px)": { padding: "56px 24px 72px" } },
  dialogLabel: { margin: "0 0 24px", fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" },
  dialogQuestion: { maxWidth: 920, margin: 0, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.02, letterSpacing: "-.035em" },
  dialogColumns: { display: "grid", gridTemplateColumns: "1.35fr .65fr", gap: 72, marginTop: 64, "@media (max-width: 760px)": { gridTemplateColumns: "1fr", gap: 32, marginTop: 40 } },
  dialogText: { margin: 0, fontSize: 18, lineHeight: 1.55, "@media (max-width: 700px)": { fontSize: 16 } },
  contribution: { paddingTop: 3, color: "rgba(0,0,0,.58)", fontSize: 15, lineHeight: 1.45 },
  contributionLabel: { display: "block", marginBottom: 10, color: "#111", fontFamily: "Suisse Intl Mono Regular, ui-monospace, monospace", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase" },
  gallery: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12, marginTop: 80, "@media (max-width: 760px)": { gridTemplateColumns: "1fr", marginTop: 56 } },
  galleryItem: { position: "relative", margin: 0, overflow: "hidden", borderRadius: 4, backgroundColor: "#ddd" },
  galleryWide: { gridColumn: "span 2", aspectRatio: "16 / 9", "@media (max-width: 760px)": { gridColumn: "span 1" } },
  gallerySquare: { aspectRatio: "1 / 1" },
  galleryTall: { minHeight: 720, "@media (max-width: 760px)": { minHeight: 560 } },
  galleryImage: { width: "100%", height: "100%", objectFit: "cover" },
  galleryImageContain: { objectFit: "contain", padding: 24 },
});
