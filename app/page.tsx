"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { Footer } from "@/components/SiteChrome";
import { useState } from "react";

const hoverSpring = { type: "spring", stiffness: 500, damping: 30 } as const;
const cardImageSizes = "(max-width: 700px) calc(100vw - 32px), (max-width: 1280px) calc((100vw - 168px) / 2), 556px";

type Project = {
  name: string;
  start: string;
  end: string;
  description?: string;
  href?: string;
  image?: string;
  icon?: string;
  large?: boolean;
  contentTop?: boolean;
};

const projects: Project[] = [
  {
    name: "Heywork",
    start: "2024",
    end: "NOW",
    description: "Building the future of human-agent collaboration in the new era of work.",
    image: "/assets/home/heywork.png",
    large: true,
  },
  {
    name: "Fable",
    start: "2022",
    end: "2024",
    description: "Defining the future of creative workflows.",
    href: "/projects/fable",
    image: "/assets/home/fable.png",
    large: true,
    contentTop: true,
  },
  { name: "Matter", start: "2023", end: "NOW", icon: "/assets/home/matter.png" },
  { name: "Carefull", start: "2020", end: "2021", href: "/projects/carefull", icon: "/assets/home/carefull.png" },
  { name: "Wayfair", start: "2018", end: "2022", href: "/projects/wayfair", icon: "/assets/home/wayfair.png" },
  { name: "YouTube", start: "2017", end: "2018", href: "/projects/youtube", icon: "/assets/home/youtube.png" },
  { name: "Archive", start: "2015", end: "2016", href: "/archive/2016", image: "/assets/archive/hero-poster.jpg" },
];

function ProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <motion.article
      {...stylex.props(styles.card, project.large ? styles.largeCard : styles.smallCard)}
      initial={false}
      animate={{ scale: hovered ? 1.03 : 1 }}
      transition={hoverSpring}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {project.image && (
        <Image
          {...stylex.props(styles.cardImage)}
          src={project.image}
          alt=""
          fill
          sizes={cardImageSizes}
          quality={90}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
        />
      )}
      <div {...stylex.props(styles.cardShade)} />
      {project.href && (
        <motion.div
          {...stylex.props(styles.viewProject)}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={hoverSpring}
        >
          View Project <span {...stylex.props(styles.projectArrow)} aria-hidden="true">-&gt;</span>
        </motion.div>
      )}
      {!project.href && (
        <motion.div
          {...stylex.props(styles.comingSoon, project.large ? styles.comingSoonLarge : styles.comingSoonSmall)}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={hoverSpring}
        >
          Coming Soon
        </motion.div>
      )}
      <div
        {...stylex.props(
          styles.cardCopy,
          project.large ? (project.contentTop ? styles.cardCopyTop : styles.cardCopyBottom) : styles.smallCardCopy,
        )}
      >
        <h2 {...stylex.props(styles.cardTitle, project.large ? styles.largeTitle : styles.smallTitle)}>{project.name}</h2>
        {project.description && <p {...stylex.props(styles.cardDescription)}>{project.description}</p>}
        <p {...stylex.props(styles.meta, project.large ? styles.largeMeta : styles.smallMeta)}>
          <span>{project.start}</span>
          <span {...stylex.props(styles.arrow)}>-&gt;</span>
          <span>{project.end}</span>
        </p>
      </div>
      {project.icon && (
        <Image {...stylex.props(styles.icon)} src={project.icon} alt="" width={40} height={32} unoptimized />
      )}
    </motion.article>
  );

  return project.href ? (
    <Link href={project.href} aria-label={`View ${project.name} project`}>
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
}

export default function HomePage() {
  return (
    <main {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.hero)}>
        Aaron Porter designs products &amp;
        <br />
        systems to empower human agency.
      </h1>
      <section {...stylex.props(styles.grid)} aria-label="Selected work">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} eager={index === 0} />
        ))}
      </section>
      <Footer />
    </main>
  );
}

const styles = stylex.create({
  page: {
    width: "100%",
    maxWidth: 1280,
    minHeight: "100vh",
    marginInline: "auto",
    padding: "120px 76px 0",
    "@media (max-width: 700px)": {
      padding: "80px 16px 0",
    },
  },
  hero: {
    margin: 0,
    marginBottom: 64,
    color: "#fff",
    fontSize: 40,
    fontWeight: 400,
    lineHeight: "44px",
    letterSpacing: "-0.01em",
    "@media (max-width: 700px)": {
      marginBottom: 24,
      fontSize: 20,
      lineHeight: "22px",
      letterSpacing: 0,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    position: "relative",
    display: "flex",
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    isolation: "isolate",
    backgroundColor: "rgba(255,255,255,.07)",
  },
  largeCard: {
    height: 700,
    "@media (max-width: 700px)": { height: 450 },
  },
  smallCard: {
    height: 300,
    "@media (max-width: 700px)": { height: 200 },
  },
  cardImage: {
    position: "absolute",
    zIndex: -2,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardShade: {
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,.03), transparent 25%, transparent 68%, rgba(0,0,0,.04))",
  },
  cardCopy: {
    position: "absolute",
    zIndex: 2,
    left: 40,
    right: 40,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    "@media (max-width: 700px)": {
      left: 24,
      right: 24,
    },
  },
  cardCopyTop: {
    top: 40,
    "@media (max-width: 700px)": { top: 24 },
  },
  cardCopyBottom: {
    bottom: 40,
    "@media (max-width: 700px)": { bottom: 24 },
  },
  smallCardCopy: {
    top: 40,
    gap: 8,
    "@media (max-width: 700px)": { top: 24, gap: 10.5 },
  },
  cardTitle: {
    margin: 0,
    color: "#000",
    fontSize: 32,
    fontWeight: 400,
    lineHeight: "38.4px",
  },
  largeTitle: { fontFamily: "Suisse Intl Medium, Helvetica, Arial, sans-serif" },
  smallTitle: {
    color: "#fff",
    fontFamily: "Suisse Intl Regular, Helvetica, Arial, sans-serif",
    "@media (max-width: 700px)": {
      fontSize: 20,
      lineHeight: "24px",
    },
  },
  cardDescription: {
    margin: 0,
    color: "rgba(0,0,0,.65)",
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: ".01em",
    "@media (max-width: 700px)": {
      fontSize: 14,
      lineHeight: "19.6px",
    },
  },
  meta: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    margin: 0,
    color: "rgba(0,0,0,.4)",
    fontFamily: "Suisse Intl Mono Regular, ui-monospace, SFMono-Regular, monospace",
    fontSize: 14,
    lineHeight: "15.4px",
    textTransform: "uppercase",
    "@media (max-width: 700px)": { fontSize: 10, lineHeight: "11px" },
  },
  arrow: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  largeMeta: { paddingTop: 12 },
  smallMeta: { color: "rgba(255,255,255,.4)" },
  icon: {
    position: "absolute",
    left: 40,
    bottom: 44,
    width: 40,
    height: 32,
    objectFit: "contain",
    "@media (max-width: 700px)": {
      left: 24,
      bottom: 28,
    },
  },
  comingSoon: {
    position: "absolute",
    zIndex: 3,
    right: 40,
    bottom: 40,
    height: 48,
    display: "flex",
    alignItems: "center",
    paddingInline: 16,
    borderRadius: 100,
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 16,
    lineHeight: "19.2px",
    "@media (max-width: 700px)": { display: "none" },
  },
  comingSoonLarge: { color: "#000", backgroundColor: "rgba(0,0,0,.1)" },
  comingSoonSmall: { paddingLeft: 20, color: "#fff", backgroundColor: "rgba(255,255,255,.1)" },
  viewProject: {
    position: "absolute",
    zIndex: 4,
    right: 40,
    bottom: 40,
    height: 48,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 16px 0 20px",
    borderRadius: 100,
    color: "#fff",
    backgroundColor: "rgba(255,255,255,.1)",
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 16,
    lineHeight: "19.2px",
    "@media (max-width: 700px)": { display: "none" },
  },
  projectArrow: { fontFamily: "Inter, Arial, sans-serif" },
});
