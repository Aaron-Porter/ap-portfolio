"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

export function FloatingNav() {
  const pathname = usePathname();
  const work = pathname === "/" || pathname.startsWith("/projects/") || pathname.startsWith("/archive/");
  const about = pathname === "/about";

  return (
    <nav {...stylex.props(styles.nav)} aria-label="Primary navigation">
      <div {...stylex.props(styles.navShell)}>
        <div {...stylex.props(styles.navTrack)}>
          <Link {...stylex.props(styles.navItem, work && styles.active)} href="/">
            Work
          </Link>
          <Link {...stylex.props(styles.navItem, about && styles.active)} href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("aaron@aaronporter.io");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      void copyEmail();
    }
  };

  return (
    <footer {...stylex.props(styles.footer)}>
      <a
        {...stylex.props(styles.email)}
        onClick={() => void copyEmail()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Copy Aaron Porter's email address"
      >
        <svg {...stylex.props(styles.copyIcon)} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z" fill="currentColor" />
        </svg>
        <span>{copied ? "Copied" : "aaron@aaronporter.io"}</span>
      </a>
      <a {...stylex.props(styles.footerLink)} href="https://twitter.com/Aaron_porter" target="_blank" rel="noreferrer">
        Twitter
      </a>
      <a {...stylex.props(styles.footerLink)} href="https://www.linkedin.com/in/aaporter/" target="_blank" rel="noreferrer">
        Linkedin
      </a>
    </footer>
  );
}

export function MediaNote({ caption, expanded, onToggle }: { caption: string; expanded: boolean; onToggle: () => void }) {
  return (
    <motion.button
      {...stylex.props(styles.mediaNote, expanded ? styles.mediaNoteExpanded : styles.mediaNoteCollapsed)}
      onClick={onToggle}
      layout
      initial={false}
      animate={{ borderRadius: expanded ? 8 : 12 }}
      transition={{
        layout: { type: "spring", stiffness: 500, damping: 30 },
        borderRadius: { type: "spring", stiffness: 500, damping: 30 },
      }}
      aria-label={expanded ? "Hide image note" : "Show image note"}
      aria-expanded={expanded}
    >
      <motion.span
        {...stylex.props(styles.mediaNoteText)}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: expanded ? 0.18 : 0.1, delay: expanded ? 0.05 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        {caption}
      </motion.span>
      <motion.span {...stylex.props(styles.mediaInfo)} animate={{ opacity: expanded ? 0 : 1 }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M10.667 10.958H12v9.334h1.334" stroke="#fff" strokeWidth="2.667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6.958a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#fff" />
        </svg>
      </motion.span>
    </motion.button>
  );
}

const styles = stylex.create({
  nav: {
    position: "fixed",
    zIndex: 50,
    left: 0,
    right: 0,
    bottom: 36,
    width: "max-content",
    marginInline: "auto",
  },
  navShell: {
    borderRadius: 1000,
    backgroundColor: "#000",
    boxShadow: "rgba(0,0,0,.59) 0 .602187px .421531px -1.25px, rgba(0,0,0,.52) 0 2.28853px 1.60197px -2.5px, rgba(0,0,0,.21) 0 10px 7px -3.75px",
  },
  navTrack: {
    display: "flex",
    gap: 4,
    padding: 4,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,.15)",
  },
  navItem: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "12px 16px",
    borderRadius: 100,
    color: "rgba(255,255,255,.7)",
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: ".01em",
    transition: "color 180ms ease, background-color 180ms ease",
    "@media (max-width: 700px)": { fontSize: 14, lineHeight: "19.6px" },
  },
  active: {
    color: "#000",
    backgroundColor: "#fff",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginTop: 80,
    paddingBottom: 120,
    color: "rgba(255,255,255,.7)",
    "@media (max-width: 700px)": {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: 16,
      marginTop: 40,
      paddingBottom: 180,
    },
  },
  email: {
    height: 48,
    display: "flex",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    borderRadius: 100,
    padding: "12px 16px",
    backgroundColor: {
      default: "transparent",
      ":hover": "rgba(255,255,255,.07)",
    },
    color: "rgba(255,255,255,.7)",
    cursor: "pointer",
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: ".01em",
    transition: "background-color 180ms ease",
    "@media (max-width: 700px)": { fontSize: 14, lineHeight: "19.6px" },
  },
  copyIcon: { flexShrink: 0, color: "rgba(255,255,255,.4)" },
  footerLink: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: 100,
    fontSize: 16,
    lineHeight: "22.4px",
    letterSpacing: ".01em",
    "@media (max-width: 700px)": { fontSize: 14, lineHeight: "19.6px" },
    color: {
      default: "rgba(255,255,255,.7)",
      ":hover": "#fff",
    },
    transition: "color 180ms ease",
  },
  mediaNote: {
    position: "absolute",
    right: 40,
    bottom: 40,
    display: "block",
    overflow: "hidden",
    borderStyle: "none",
    borderWidth: 0,
    outlineStyle: "none",
    appearance: "none",
    backgroundColor: "#272727",
    cursor: "pointer",
  },
  mediaNoteCollapsed: {
    width: 24,
    height: 24,
    padding: 0,
    borderRadius: 12,
  },
  mediaNoteExpanded: {
    width: 332,
    height: "auto",
    padding: 16,
    borderRadius: 8,
  },
  mediaNoteText: {
    display: "block",
    width: 300,
    color: "#fff",
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 16,
    lineHeight: "19.2px",
    textAlign: "left",
  },
  mediaInfo: {
    position: "absolute",
    top: 6,
    left: 6,
    display: "grid",
    placeItems: "center",
    width: 12,
    height: 12,
    color: "rgba(255,255,255,.7)",
    lineHeight: 0,
  },
});
