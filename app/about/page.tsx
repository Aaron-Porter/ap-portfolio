"use client";

import Image from "next/image";
import { motion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { Footer, MediaNote } from "@/components/SiteChrome";
import { useState } from "react";

const photos = [
  { src: "/assets/about/family.jpeg", caption: "Mini-me", tall: true },
  { src: "/assets/about/hiking.jpeg", caption: "", tall: true },
  { src: "/assets/about/thinking.jpeg", caption: "Never not thinking deeply.", tall: false },
  {
    src: "/assets/about/acadia.jpg",
    caption: "Fitting in a bit of work in Acadia National Park. I'm really great at work life balance!",
    tall: false,
  },
];

const photoSizes = "(max-width: 700px) calc((100vw - 48px) / 2), (max-width: 1280px) calc((100vw - 176px) / 2), 552px";

export default function AboutPage() {
  return (
    <main {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.hero)}>
        Aaron Porter designs software &amp; systems.
        <br />
        Previously at <a {...stylex.props(styles.accent)} href="https://fable.app">Fable</a>,{" "}
        <a {...stylex.props(styles.accent)} href="https://getcarefull.com">Carefull</a>,{" "}
        <a {...stylex.props(styles.accent)} href="https://truetoform.design">TTF</a>, &amp;{" "}
        <a {...stylex.props(styles.accent)} href="https://google.com">Google</a>.
      </h1>

      <section {...stylex.props(styles.biography)}>
        <div {...stylex.props(styles.copyColumn)}>
          <p {...stylex.props(styles.copy)}>
            I started designing at 13. Living in a rural area with a limited internet connection, I lugged our family’s iMac to a
            friend’s house to download a (totally legal) copy of adobe illustrator.
          </p>
          <p {...stylex.props(styles.copy)}>
            I’ve approached my career since then with a similar amount of vigour. Always seeking to learn, understand, and evolve. I
            find joy in the process of piecing together small parts of the built world. Guided by the hope that my work can help to
            create products that are subservient to the individual, systems that empower human agency, and experiences that foster
            understanding.
          </p>
        </div>
        <div {...stylex.props(styles.copyColumn)}>
          <p {...stylex.props(styles.copy)}>
            When I’m not designing, you can find me obsessively reading, spreadsheeting, or annoying my wife about my obsession of the
            month. Past episodes have included: optimization of tax-advantage investment accounts, the perfect t-shirt, correcting my
            broken body due to 10+ years of sitting at a computer, &amp; much more. Feel free to ask and I’ll fill you into the featured
            selection.
          </p>
          <p {...stylex.props(styles.copy)}>
            I’m currently based in Grand Rapids, Michigan. The city I went to college, met my wife, and a place that seems to
            consistently pull me back.
          </p>
        </div>
      </section>

      <section {...stylex.props(styles.photoGrid)} aria-label="Personal photographs">
        <div {...stylex.props(styles.photoColumn)}>
          {photos.slice(0, 2).map((photo) => (
            <Photo key={photo.src} photo={photo} />
          ))}
        </div>
        <div {...stylex.props(styles.photoColumn)}>
          {photos.slice(2).map((photo) => (
            <Photo key={photo.src} photo={photo} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Photo({ photo }: { photo: (typeof photos)[number] }) {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <motion.figure
      {...stylex.props(styles.figure, photo.tall ? styles.tall : styles.short)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Image {...stylex.props(styles.photo)} src={photo.src} alt="" fill sizes={photoSizes} quality={90} />
      {photo.caption && (
        <MediaNote
          caption={photo.caption}
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
    "@media (max-width: 700px)": { padding: "120px 16px 0" },
  },
  hero: {
    margin: 0,
    color: "#fff",
    fontSize: 40,
    fontWeight: 400,
    lineHeight: "44px",
    letterSpacing: "-0.01em",
    "@media (max-width: 700px)": {
      maxWidth: 278,
      fontSize: 20,
      lineHeight: "22px",
      letterSpacing: 0,
    },
  },
  accent: { color: "#e35e17" },
  biography: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 40,
    marginTop: 40,
    color: "#c4c4c4",
    fontSize: 16,
    lineHeight: "22.4px",
    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      gap: 40,
      marginTop: 24,
      fontSize: 14,
      lineHeight: "19.6px",
    },
  },
  copyColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 22.4,
    "@media (max-width: 700px)": { gap: 19.6 },
  },
  copy: { margin: 0, letterSpacing: "0.01em" },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 24,
    marginTop: 40,
    "@media (max-width: 700px)": { gap: 16, marginTop: 40 },
  },
  photoColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    "@media (max-width: 700px)": { gap: 16 },
  },
  figure: {
    position: "relative",
    width: "100%",
    margin: 0,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,.07)",
  },
  tall: { aspectRatio: "552 / 811.75" },
  short: { aspectRatio: "552 / 721.5" },
  photo: { width: "100%", height: "100%", display: "block", objectFit: "cover" },
});
