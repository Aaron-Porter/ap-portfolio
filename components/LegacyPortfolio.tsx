"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ROOT = "/archive/2016";
const RED = "#ff1717";
const ease = [0, 1, 0.5, 1] as const;

type LegacyProject = {
  slug: "beach" | "strictly" | "thrive";
  title: string;
  tag: string;
  accent: string;
  hero: string;
  heroAlt: string;
  question: string;
  intro: string[];
  discoveryTitle: string;
  discovery: string[];
  team: { name: string; role: string }[];
  creationTitle: string;
  creation: string;
  implementationTitle: string;
  implementation: string;
  images: { src: string; alt: string; contain?: boolean }[];
};

const caseStudies: LegacyProject[] = [
  {
    slug: "beach",
    title: "Beach",
    tag: "Creative Direction, Film, Design",
    accent: "#3094f0",
    hero: "/assets/archive/beach-hero.jpg",
    heroAlt: "Beach album artwork",
    question: "How do you build a compelling and interwoven story that communicates across many mediums?",
    intro: [
      "Throughout 2015, John Nichols, an artist and musician based out of Miami, created and produced his debut EP, Beach. During this process, John connected with Jeen, a friend and talented photographer, and proposed the idea of creating a visual story to accompany the release of his EP.",
      "Jeen approached me and the three of us began to discuss the potential of the project. John is an incredibly talented musician, and the nicest guy to work with, so we quickly said yes. Our first step was to assemble a team that could handle the various needs of our project.",
    ],
    discoveryTitle: "The Vision.",
    discovery: [
      "When we approached this project, we started at the root of John’s ideas. We wanted the visual language of the release to be deeply connected to the conceptual ideas and motives of his EP as a whole.",
      "John wrote Beach as a story. It exists as a broader commentary on an individual’s internal battle derived from doubt, heartbreak, and an overwhelming desire for personal acceptance. We highlighted the most important thematic elements and crafted imagery to communicate those intertwined ideas.",
    ],
    team: [
      { name: "Me", role: "Project lead" },
      { name: "Jeen Na", role: "Concept Development & Photography" },
      { name: "Aaron Covrett", role: "Design & VFX" },
      { name: "Isaac Taracks", role: "3D Modeling & Animation" },
    ],
    creationTitle: "Photography.",
    creation: "Our first visual for Beach was a small body of photographs. These photos served as a launching point for the locations, color palette, and overall visual aesthetic. Throughout the entire process, we looked to the photography as a visual guide.",
    implementationTitle: "Social Media.",
    implementation: "Over a two month period, the narrative was released sequentially across platforms and mediums—photography, posters, a prologue, the music video, and finally the album.",
    images: [
      { src: "/assets/archive/beach-photo.jpg", alt: "Black-and-white portrait created for Beach" },
      { src: "/assets/archive/beach-location.jpg", alt: "Cloudy shoreline used in the Beach visual system" },
      { src: "/assets/archive/beach-album.jpg", alt: "Final Beach album cover" },
      { src: "/assets/archive/beach-social-one.jpg", alt: "Beach social media launch artwork" },
      { src: "/assets/archive/beach-social-two.jpg", alt: "Beach release campaign artwork" },
    ],
  },
  {
    slug: "strictly",
    title: "Strictly",
    tag: "Branding, Web Design, Development",
    accent: "#ee801f",
    hero: "/assets/archive/strictly-hero.jpg",
    heroAlt: "Strictly Performance Motorsports identity system",
    question: "How do you build an adaptable identity and robust user experience for an evolving company?",
    intro: [
      "Strictly Import Motorsports is a garage and performance shop based out of Kalamazoo, Michigan. As the company grew exponentially, many aspects of the business had to quickly mature to support that growth.",
      "In the fall of 2014, they proposed three main goals: a name change to Strictly Performance Motorsports, an ecommerce and point-of-purchase solution, and a new brand identity to support their direction.",
    ],
    discoveryTitle: "The Vision.",
    discovery: [
      "Strictly’s driving motive was to diversify its offerings, market, and customers. Serving a larger audience meant creating an identity that could appeal to a larger audience without losing the company’s distinctive voice.",
      "We defined three goals for the refresh: maturation, an adaptable but identifiable visual language, and an enhanced user experience for both customers and the internal sales process.",
    ],
    team: [
      { name: "Me", role: "Project lead, Web design, & Development." },
      { name: "Aaron Covrett", role: "Design" },
    ],
    creationTitle: "Logo.",
    creation: "We sought influence from the structural forms of domestic and import vehicles, identifying the distinct lines of classic decals and stripes. Those forms were tied into the literal form of an S to create the base for the new brand.",
    implementationTitle: "Development.",
    implementation: "The final system extended through a 50-page brand guideline, print collateral, ecommerce, internal tools, and a custom responsive website.",
    images: [
      { src: "/assets/archive/strictly-inspiration.jpg", alt: "Circuit lines that inspired the Strictly mark" },
      { src: "/assets/archive/strictly-concepts.png", alt: "Early Strictly logo concepts", contain: true },
      { src: "/assets/archive/strictly-business-card.jpg", alt: "Strictly business card system" },
      { src: "/assets/archive/strictly-site.jpg", alt: "Strictly ecommerce website", contain: true },
    ],
  },
  {
    slug: "thrive",
    title: "Thrive",
    tag: "Research, Film, Civic Design",
    accent: "#6bbc66",
    hero: "/assets/archive/thrive-hero.jpg",
    heroAlt: "Historic downtown Grand Rapids",
    question: "How do you build a thriving, walkable City Center?",
    intro: [
      "During the Spring of 2014 I was part of a group of students who researched, unearthed, and identified issues that we believed were holding back Grand Rapids, Michigan. We worked for four months and reported our findings to faculty, local stakeholders, and city officials.",
      "Our presentation was well received, as we anticipated. What we didn’t expect was that the project would become a viral topic of discussion, debate, and backlash for the entire city.",
    ],
    discoveryTitle: "Discovery.",
    discovery: [
      "We connected with a local urban development company to understand what it would take to bring fresh food to the City Center. At the time, the average resident was forced to drive twenty minutes outside downtown merely to obtain groceries.",
      "We quickly realized that designing a service would be premature. We first needed to understand the problem and raise awareness across urban planning, public health, transportation, and economic development.",
    ],
    team: [
      { name: "Me", role: "Film and Project Development" },
      { name: "Heather Seto", role: "Project Development" },
      { name: "Adam Salois", role: "Design" },
      { name: "Emily Nagy", role: "Project Development" },
      { name: "Luc Fewer II", role: "Project Development" },
      { name: "Matthew Vansweden", role: "Project Development" },
      { name: "Rachael Fischer", role: "Project Development" },
    ],
    creationTitle: "Gathering Information.",
    creation: "We mapped essential services against Maslow’s Hierarchy of Needs, surveyed the resources available downtown, and spoke directly with the people who lived and worked in the city every day.",
    implementationTitle: "Going Public.",
    implementation: "The resulting film and presentation moved beyond the classroom, generating local press, public debate, and a broader conversation about a walkable downtown.",
    images: [
      { src: "/assets/archive/thrive-article-one.png", alt: "Local coverage of the Thrive proposal" },
      { src: "/assets/archive/thrive-article-two.png", alt: "News coverage of the downtown grocery conversation" },
      { src: "/assets/archive/thrive-newspaper.jpeg", alt: "Printed newspaper coverage of Thrive" },
    ],
  },
];

const archiveItems = [
  { title: "Fjords & Highlands", tag: "Film", image: "/assets/archive/fjords.png", href: "https://vimeo.com/125062270" },
  { title: "Herman Miller", tag: "Film", image: "/assets/archive/herman-miller.png", href: "https://vimeo.com/123354938" },
  { title: "Warrior Poets", tag: "Web", image: "/assets/archive/warrior-poets.png" },
  { title: "We, People of the Reaching", tag: "Film", image: "/assets/archive/reaching.png", href: "https://vimeo.com/104971630" },
];

function Wordmark({ large = false, collapsed = false, dark = false }: { large?: boolean; collapsed?: boolean; dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const open = large || hovered || !collapsed;

  return (
    <span
      {...stylex.props(styles.wordmark, large && styles.wordmarkLarge, dark && styles.wordmarkDark)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      A
      <motion.span
        {...stylex.props(styles.wordmarkRest)}
        initial={false}
        animate={{ maxWidth: open ? (large ? "2.25em" : "2.45em") : 0 }}
        transition={reduced ? { duration: 0 } : { duration: large ? 0.6 : 0.3, ease }}
        aria-hidden="true"
      >
        aron
      </motion.span>
      .
    </span>
  );
}

function Arrow({ left = false }: { left?: boolean }) {
  return <span {...stylex.props(styles.arrow, left && styles.arrowLeft)} aria-hidden="true" />;
}

function LegacyHeader({ view }: { view: string }) {
  const [headerOpen, setHeaderOpen] = useState(false);
  const dark = view === "about";

  return (
    <>
      <header
        {...stylex.props(styles.header)}
        onMouseEnter={() => setHeaderOpen(true)}
        onMouseLeave={() => setHeaderOpen(false)}
      >
        <Link href={ROOT} aria-label="Home"><Wordmark collapsed dark={dark} /></Link>
        <nav {...stylex.props(styles.headerNav, headerOpen && styles.headerNavVisible, dark && styles.headerNavDark)} aria-label="2016 portfolio navigation">
          <Link href={ROOT}>Home</Link>
          <Link href={`${ROOT}/work`}>Work</Link>
          <Link href={`${ROOT}/about`}>About</Link>
        </nav>
      </header>
    </>
  );
}

function LegacyMobileMenu({ dark }: { dark: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button {...stylex.props(styles.mobileMenuButton, dark && styles.mobileMenuDark)} onClick={() => setMenuOpen(true)} type="button">Menu.</button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div {...stylex.props(styles.mobileMenu)} initial={{ scale: 1.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.4, opacity: 0 }} transition={{ duration: 0.4 }}>
            <button {...stylex.props(styles.mobileMenuClose)} onClick={() => setMenuOpen(false)} type="button">Close.</button>
            <nav {...stylex.props(styles.mobileMenuNav)}>
              <Link href={ROOT} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href={`${ROOT}/work`} onClick={() => setMenuOpen(false)}>Work</Link>
              <Link href={`${ROOT}/about`} onClick={() => setMenuOpen(false)}>About</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HomeView() {
  return (
    <section {...stylex.props(styles.home)}>
      <Link {...stylex.props(styles.directional, styles.directionalLeft)} href={`${ROOT}/about`}>
        <Arrow left /> About me
      </Link>
      <Link {...stylex.props(styles.directional, styles.directionalRight)} href={`${ROOT}/work`}>
        My Work <Arrow />
      </Link>
      <div {...stylex.props(styles.homeLogo)}><Wordmark large /></div>
    </section>
  );
}

function WorkProject({ project }: { project: LegacyProject }) {
  return (
    <Link {...stylex.props(styles.workProject)} href={`${ROOT}/project/${project.slug}`}>
      <Image {...stylex.props(styles.coverImage)} src={project.hero} alt="" fill sizes="100vw" quality={90} />
      <div {...stylex.props(styles.workShade)} />
      <div {...stylex.props(styles.workProjectInfo)}>
        <h2 {...stylex.props(styles.workProjectTitle)}>{project.title}</h2>
      </div>
    </Link>
  );
}

function ArchiveItem({ item }: { item: (typeof archiveItems)[number] }) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <article {...stylex.props(styles.archiveItem)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Image {...stylex.props(styles.coverImage)} src={item.image} alt="" fill sizes="(max-width: 700px) 50vw, 35vw" quality={90} />
      <div {...stylex.props(styles.archiveShade, hovered && styles.archiveShadeClear)} />
      <div {...stylex.props(styles.archiveItemCopy)}><h3 {...stylex.props(styles.archiveItemTitle)}>{item.title}</h3><p {...stylex.props(styles.archiveItemTag)}>{item.tag}</p></div>
    </article>
  );
  return item.href ? <a href={item.href} target="_blank" rel="noreferrer">{content}</a> : content;
}

function WorkView() {
  return (
    <div {...stylex.props(styles.workPage)}>
      <LegacyHeader view="work" />
      <Link {...stylex.props(styles.directional, styles.directionalLeft)} href={`${ROOT}/about`}><Arrow left /> About Me</Link>
      <section {...stylex.props(styles.workLanding)}><h1 {...stylex.props(styles.workLandingTitle)}>Work</h1></section>
      <section {...stylex.props(styles.projectList)}>{caseStudies.map((project) => <WorkProject key={project.slug} project={project} />)}</section>
      <section {...stylex.props(styles.archive)}>
        <h2 {...stylex.props(styles.archiveHeading)}>Archive</h2>
        <div {...stylex.props(styles.archiveGrid)}>{archiveItems.map((item) => <ArchiveItem key={item.title} item={item} />)}</div>
      </section>
      <footer {...stylex.props(styles.legacyFooter)}><Link href={ROOT}><Wordmark collapsed /></Link></footer>
    </div>
  );
}

function AboutView() {
  return (
    <div {...stylex.props(styles.aboutPage)}>
      <LegacyHeader view="about" />
      <Link {...stylex.props(styles.directional, styles.directionalRight)} href={`${ROOT}/work`}>View my work <Arrow /></Link>
      <section {...stylex.props(styles.bio)}>
        <div {...stylex.props(styles.bioContent)}>
          <h1 {...stylex.props(styles.bioName)}>Aaron Porter</h1>
          <h2 {...stylex.props(styles.bioTitle)}>Designer, Filmmaker,<br /> and Creative.</h2>
          <p {...stylex.props(styles.bioEmail)}>hello@aaronporter.co</p>
          <a {...stylex.props(styles.bioSocial)} href="https://twitter.com/Aaron_porter" target="_blank" rel="noreferrer">@Aaron_porter</a>
        </div>
        <span {...stylex.props(styles.learnMore)}>Learn More <span>↓</span></span>
      </section>
      <section {...stylex.props(styles.aboutMe)}>
        <div><h2 {...stylex.props(styles.aboutMeTitle)}>Hello,</h2><p {...stylex.props(styles.aboutMeCopy)}>My name is Aaron Porter and I am a designer, filmmaker, and creative based out of Grand Rapids, Michigan. I am currently a student at Kendall College of Art and Design at Ferris State University, majoring in the Collaborative Design program with a minor in Digital Media. I am the core producer and creative director at Mainstay, where we are striving to tell stories through film &amp; design.</p></div>
        <div {...stylex.props(styles.resume)}><a href="/assets/archive/aaron-porter-2016-resume.pdf" target="_blank" rel="noreferrer">Download my resume.</a></div>
      </section>
      <footer {...stylex.props(styles.aboutFooter)}><Link href={ROOT}><Wordmark collapsed dark /></Link></footer>
    </div>
  );
}

function ImageBlock({ image, eager = false, dense = false, onOpen }: { image: LegacyProject["images"][number]; eager?: boolean; dense?: boolean; onOpen: () => void }) {
  return (
    <button {...stylex.props(styles.caseImageButton, dense && styles.caseImageButtonDense)} type="button" onClick={onOpen}>
      <Image {...stylex.props(styles.caseImage, image.contain && styles.containImage)} src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" quality={90} priority={eager} />
    </button>
  );
}

function CaseStudyView({ project }: { project: LegacyProject }) {
  const [lightbox, setLightbox] = useState<LegacyProject["images"][number] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div {...stylex.props(styles.casePage)}>
      <LegacyHeader view="case" />
      <Link {...stylex.props(styles.caseBack)} href={`${ROOT}/work`}><Arrow left /> Back to work</Link>
      <nav {...stylex.props(styles.caseNav, scrolled && styles.caseNavScrolled)} aria-label={`${project.title} sections`}>
        <a {...stylex.props(styles.caseNavLink)} href="#discovery">Discovery</a>
        <a {...stylex.props(styles.caseNavLink)} href="#creation">Creation</a>
        <a {...stylex.props(styles.caseNavLink)} href="#implementation">Implementation</a>
        <a {...stylex.props(styles.caseNavLink)} href="#deliverables">Final Deliverables</a>
      </nav>
      <section {...stylex.props(styles.caseHero)}>
        <Image {...stylex.props(styles.coverImage)} src={project.hero} alt={project.heroAlt} fill sizes="100vw" quality={90} priority />
        <div {...stylex.props(styles.caseHeroShade)} />
        <h1 {...stylex.props(styles.caseHeroTitle)} style={{ color: project.slug === "thrive" ? project.accent : "#fff" }}>{project.title}</h1>
      </section>
      <main {...stylex.props(styles.caseMain)}>
        <section {...stylex.props(styles.caseIntro)}>
          <div {...stylex.props(styles.caseContent)}>
            <p {...stylex.props(styles.caseKicker)} style={{ color: project.accent }}>The Question.</p>
            <h2 {...stylex.props(styles.caseQuestion)}>{project.question}</h2>
            <div {...stylex.props(styles.textColumns)}>{project.intro.map((paragraph) => <p {...stylex.props(styles.textColumnCopy)} key={paragraph}>{paragraph}</p>)}</div>
            <div {...stylex.props(styles.team)}>
              <p {...stylex.props(styles.teamHeading)} style={{ color: project.accent }}>The Team.</p>
              <div {...stylex.props(styles.teamGrid)}>
                {project.team.map((member) => <div {...stylex.props(styles.teamMember)} key={member.name}><strong>{member.name}</strong><span {...stylex.props(styles.teamContribution)}>{member.role}</span></div>)}
              </div>
            </div>
          </div>
        </section>
        <section id="discovery" {...stylex.props(styles.caseSection, styles.discovery)} style={{ backgroundColor: project.slug === "beach" ? "#000" : project.accent }}>
          <div {...stylex.props(styles.caseContent)}><h3 {...stylex.props(styles.caseSectionTitle)}>Discovery</h3><h4 {...stylex.props(styles.caseSectionSubtitle, styles.discoverySubtitle)}>{project.discoveryTitle}</h4><div {...stylex.props(styles.textColumns)}>{project.discovery.map((paragraph) => <p {...stylex.props(styles.textColumnCopy)} key={paragraph}>{paragraph}</p>)}</div></div>
        </section>
        <section id="creation" {...stylex.props(styles.caseSection, project.slug === "strictly" && styles.creationDark)}>
          <div {...stylex.props(styles.caseContent)}>
            <h3 {...stylex.props(styles.caseSectionTitle)}>Creation</h3>
            <div {...stylex.props(styles.step)}><span {...stylex.props(styles.stepNumber)} style={{ color: project.accent }}>01</span><h4 {...stylex.props(styles.stepTitle)}>{project.creationTitle}</h4><p {...stylex.props(styles.stepCopy)}>{project.creation}</p></div>
          </div>
          <div {...stylex.props(styles.caseGallery)}>{project.images.slice(0, project.slug === "strictly" ? 4 : 3).map((image, index) => <ImageBlock key={image.src} image={image} eager={index === 0} onOpen={() => setLightbox(image)} />)}</div>
        </section>
        <section id="implementation" {...stylex.props(styles.caseSection, styles.implementation)}>
          <div {...stylex.props(styles.caseContent)}><h3 {...stylex.props(styles.caseSectionTitle)}>Implementation</h3><div {...stylex.props(styles.step)}><span {...stylex.props(styles.stepNumber)} style={{ color: project.accent }}>02</span><h4 {...stylex.props(styles.stepTitle)}>{project.implementationTitle}</h4><p {...stylex.props(styles.stepCopy)}>{project.implementation}</p></div></div>
        </section>
        <section id="deliverables" {...stylex.props(styles.deliverables)}>
          <h3 {...stylex.props(styles.deliverablesTitle)} style={{ backgroundColor: project.accent }}>Final Deliverables</h3>
          <div {...stylex.props(styles.deliverablesGrid)}>{project.images.map((image) => <ImageBlock key={image.src} image={image} dense onOpen={() => setLightbox(image)} />)}</div>
        </section>
      </main>
      <AnimatePresence>
        {lightbox && (
          <motion.button {...stylex.props(styles.lightbox)} type="button" onClick={() => setLightbox(null)} initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.4, ease }} aria-label="Close image">
            <span {...stylex.props(styles.lightboxImage)}><Image {...stylex.props(styles.lightboxActual)} src={lightbox.src} alt={lightbox.alt} fill sizes="90vw" quality={90} /></span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function BackgroundSequence({ view }: { view: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const target = view === "home" ? 0 : view === "about" ? 1 : 80 / 170;
  const poster = view === "home" ? "/assets/archive/main-000.jpg" : view === "about" ? "/assets/archive/main-170.jpg" : "/assets/archive/hero-poster.jpg";

  const moveToTarget = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const destination = video.duration * target;
    if (reduced) { video.currentTime = destination; return; }
    const startTime = performance.now();
    const start = video.currentTime;
    let frame = 0;
    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / 1050);
      const eased = 1 - Math.pow(1 - progress, 4);
      video.currentTime = start + (destination - start) * eased;
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [reduced, target]);

  useEffect(() => moveToTarget(), [moveToTarget]);

  return (
    <div {...stylex.props(styles.backgroundSequence, view === "about" && styles.backgroundAbout)}>
      <Image {...stylex.props(styles.backgroundPoster)} src={poster} alt="" fill sizes="100vw" quality={90} priority />
      <video ref={videoRef} {...stylex.props(styles.backgroundVideo)} muted playsInline preload="auto" onLoadedMetadata={moveToTarget} aria-hidden="true">
        <source src="/assets/archive/hero-loop.mp4" type="video/mp4" />
      </video>
      <div {...stylex.props(styles.grain)} />
    </div>
  );
}

export function LegacyPortfolio() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const view = useMemo(() => {
    const rest = pathname.slice(ROOT.length).split("/").filter(Boolean);
    if (!rest.length) return "home";
    if (rest[0] === "work") return "work";
    if (rest[0] === "about") return "about";
    if (rest[0] === "project" && rest[1]) return `project:${rest[1]}`;
    return "home";
  }, [pathname]);
  const project = view.startsWith("project:") ? caseStudies.find((item) => item.slug === view.split(":")[1]) : undefined;
  const backgroundView = view === "about" ? "about" : view === "home" ? "home" : "work";
  const initialX = view === "work" ? "100%" : view === "about" ? "-100%" : "0%";

  return (
    <div {...stylex.props(styles.legacyRoot)}>
      <link rel="stylesheet" href="https://use.typekit.net/zia5tfo.css" />
      <BackgroundSequence view={backgroundView} />
      <LegacyMobileMenu dark={view === "about"} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={view} {...stylex.props(styles.legacyScene)} initial={reduced ? false : { x: initialX }} animate={{ x: 0 }} exit={reduced ? undefined : { x: view === "about" ? "-100%" : "100%" }} transition={reduced ? { duration: 0 } : { duration: 0.75, ease }}>
          {view === "home" && <HomeView />}
          {view === "work" && <WorkView />}
          {view === "about" && <AboutView />}
          {project && <CaseStudyView project={project} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const styles = stylex.create({
  legacyRoot: { position: "relative", minHeight: "100vh", overflowX: "hidden", backgroundColor: "#10171b", color: "#000", fontFamily: '"sofia-pro", Helvetica, Arial, sans-serif', fontSize: 18, fontWeight: 300, lineHeight: 1.4, letterSpacing: ".02em" },
  legacyScene: { position: "relative", zIndex: 5, minHeight: "100vh" },
  backgroundSequence: { position: "fixed", zIndex: 0, inset: 0, width: "100%", height: "100vh", overflow: "hidden", transition: "transform 1.5s ease" },
  backgroundAbout: { transform: "translate3d(25%,0,0)", "@media (max-width: 700px)": { transform: "none" } },
  backgroundPoster: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  backgroundVideo: { position: "absolute", top: "50%", left: "50%", minWidth: "100%", minHeight: "100%", width: "auto", height: "100%", objectFit: "cover", transform: "translate3d(-50%,-50%,0)" },
  grain: { position: "absolute", inset: 0, opacity: .16, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) 1px,transparent 1px,transparent 3px)", mixBlendMode: "soft-light" },
  wordmark: { display: "inline-flex", alignItems: "baseline", overflow: "visible", color: "#fff", fontSize: 36, fontWeight: 700, lineHeight: .8, letterSpacing: 0, whiteSpace: "nowrap" },
  wordmarkLarge: { color: RED, fontSize: 270, marginTop: "-.15em", "@media (max-width: 1119px)": { fontSize: 144 }, "@media (max-width: 799px)": { fontSize: 90 } },
  wordmarkDark: { color: "#000" },
  wordmarkRest: { display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" },
  arrow: { position: "relative", display: "inline-block", width: "2.3em", height: 1, marginLeft: 10, verticalAlign: "middle", backgroundColor: "currentColor", transition: "width .3s ease", "::after": { content: '""', position: "absolute", right: 0, top: -4, width: 8, height: 8, borderTop: "1px solid currentColor", borderRight: "1px solid currentColor", transform: "rotate(45deg)" } },
  arrowLeft: { marginLeft: 0, marginRight: 10, transform: "rotate(180deg)" },
  directional: { position: "fixed", zIndex: 40, top: "50vh", display: "inline-flex", alignItems: "center", color: RED, fontSize: 18, fontWeight: 400, whiteSpace: "nowrap", transform: "translateY(-50%)", transition: "transform .3s cubic-bezier(0,1,.5,1)", "@media (max-width: 599px)": { display: "none" } },
  directionalLeft: { left: "3%", ":hover": { transform: "translate(10%,-50%)" } },
  directionalRight: { right: "3%", ":hover": { transform: "translate(-10%,-50%)" } },
  header: { position: "fixed", zIndex: 80, top: 0, left: "3%", display: "block", padding: "28px 5vw 5vh 0", "@media (max-width: 599px)": { display: "none" } },
  headerNav: { display: "flex", flexDirection: "column", gap: 2, marginTop: 20, color: "#fff", fontSize: 16, fontWeight: 500, opacity: 0, transform: "translateX(-12px)", transition: "opacity .3s ease,transform .3s ease" },
  headerNavVisible: { opacity: 1, transform: "none" },
  headerNavDark: { color: "#000" },
  mobileMenuButton: { position: "fixed", zIndex: 90, top: "2em", left: "5%", display: "none", padding: 0, border: 0, background: "transparent", color: "#fff", fontSize: "1.2em", fontWeight: 700, "@media (max-width: 599px)": { display: "block" } },
  mobileMenuDark: { color: "#000" },
  mobileMenu: { position: "fixed", zIndex: 200, inset: 0, display: "grid", placeItems: "center", backgroundColor: RED, color: "#fff" },
  mobileMenuClose: { position: "absolute", top: 24, left: 20, padding: 0, border: 0, background: "transparent", color: "#fff", fontWeight: 700 },
  mobileMenuNav: { display: "flex", flexDirection: "column", alignItems: "center", gap: 36, fontSize: 72, fontWeight: 700, lineHeight: 1 },
  home: { position: "relative", height: "100vh", display: "grid", placeItems: "center", overflow: "hidden" },
  homeLogo: { position: "relative", zIndex: 20 },
  workPage: { position: "relative", minHeight: "100vh" },
  workLanding: { height: "100vh", display: "grid", placeItems: "center", backgroundColor: "transparent", color: RED, pointerEvents: "none" },
  workLandingTitle: { margin: 0, fontSize: 90, fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1, "@media (min-width: 800px)": { fontSize: 180 }, "@media (min-width: 1024px)": { fontSize: 270 } },
  projectList: { position: "relative", padding: 0, overflow: "hidden", backgroundColor: "transparent" },
  workProject: { position: "relative", display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", overflow: "hidden", clipPath: "inset(20vh 15vw)", backgroundColor: "#000", color: "#fff", transition: "transform .75s cubic-bezier(0,1,.5,1)", ":hover": { transform: "scale(1.1)" }, "@media (max-width: 799px)": { height: "40vh", clipPath: "none" } },
  coverImage: { position: "absolute", zIndex: -2, inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  workShade: { position: "absolute", zIndex: -1, inset: 0, backgroundColor: "rgba(0,0,0,.16)" },
  workProjectInfo: { textAlign: "center", transition: "transform 1s cubic-bezier(0,1,.5,1)", ":hover": { transform: "scale(1.2)" } },
  workProjectTitle: { margin: 0, marginLeft: "-.06em", fontSize: 54, lineHeight: 1, fontWeight: 700, letterSpacing: "-.02em", "@media (min-width: 800px)": { fontSize: 90 }, "@media (min-width: 1024px)": { fontSize: 126 } },
  archive: { width: "70%", margin: "0 auto", padding: "90px 0", color: "#fff", "@media (max-width: 799px)": { width: "100%", paddingTop: 70, backgroundColor: "#fff", color: "#000" } },
  archiveHeading: { margin: "0 0 36px", textAlign: "center", fontSize: 42 },
  archiveGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "#000" },
  archiveItem: { position: "relative", height: "30vh", minHeight: 230, overflow: "hidden", color: "#fff", isolation: "isolate" },
  archiveShade: { position: "absolute", zIndex: -1, inset: 0, backgroundColor: "rgba(0,0,0,.7)", transition: "background-color .3s ease" },
  archiveShadeClear: { backgroundColor: "rgba(0,0,0,0)" },
  archiveItemCopy: { position: "absolute", zIndex: 2, inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" },
  archiveItemTitle: { maxWidth: "80%", margin: 0, fontSize: 28 },
  archiveItemTag: { margin: 4, fontSize: 12, opacity: .8 },
  legacyFooter: { padding: "70px 0", textAlign: "center" },
  aboutPage: { minHeight: "100vh" },
  bio: { position: "relative", width: "50%", height: "100vh", display: "flex", alignItems: "center", backgroundColor: "#f4f4f4", color: "#000", "@media (max-width: 799px)": { width: "100%", height: "auto", minHeight: "50vh", marginTop: "50vh", padding: "90px 0" } },
  bioContent: { width: "70%", margin: "0 auto" },
  bioName: { margin: "0 0 8px", color: RED, fontSize: 27 },
  bioTitle: { margin: 0, padding: 0, fontSize: 36, lineHeight: 1, fontWeight: 700, letterSpacing: ".02em", "@media (min-width: 800px)": { fontSize: 72 } },
  bioEmail: { margin: "24px 0 0", opacity: .5 },
  bioSocial: { display: "block", color: "#000", opacity: .5 },
  learnMore: { position: "absolute", left: "5.5vw", bottom: "20%", width: 0, whiteSpace: "nowrap", opacity: .3, transform: "rotate(90deg)", transformOrigin: "left bottom", "@media (max-width: 700px)": { display: "none" } },
  aboutMe: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10%", padding: "180px 15%", backgroundColor: "#fff", "@media (max-width: 599px)": { gridTemplateColumns: "1fr", padding: "90px 10%" } },
  aboutMeTitle: { margin: "0 0 20px", color: RED, fontSize: 72, lineHeight: 1 },
  aboutMeCopy: { margin: 0, lineHeight: 1.8, opacity: .8 },
  resume: { display: "flex", alignItems: "center", justifyContent: "center", color: RED },
  aboutFooter: { padding: "70px 0", backgroundColor: "#fff", textAlign: "center" },
  casePage: { position: "relative", backgroundColor: "#fff" },
  caseBack: { position: "fixed", zIndex: 75, top: 96, left: "3%", display: "flex", alignItems: "center", color: "#fff", fontSize: 16, "@media (max-width: 599px)": { display: "none" } },
  caseNav: { position: "fixed", zIndex: 70, left: "3%", bottom: "3em", display: "flex", flexDirection: "column", gap: 5, color: "#fff", fontSize: 18, transform: "none", mixBlendMode: "difference", transition: "bottom 1s cubic-bezier(0,1,.5,1),transform 1s cubic-bezier(0,1,.5,1)", "@media (max-width: 599px)": { display: "none" } },
  caseNavScrolled: { bottom: "50%", transform: "translateY(50%)" },
  caseNavLink: { transition: "transform .3s cubic-bezier(0,1,.5,1)", ":hover": { transform: "translateX(20px)" } },
  caseHero: { position: "relative", height: "100vh", display: "grid", placeItems: "center", overflow: "hidden", isolation: "isolate" },
  caseHeroTitle: { position: "relative", zIndex: 2, margin: 0, fontSize: "clamp(88px,20vw,360px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-.03em" },
  caseHeroShade: { position: "absolute", zIndex: -1, inset: 0, backgroundColor: "rgba(0,0,0,.15)" },
  caseMain: { position: "relative", margin: 0, backgroundColor: "#fff" },
  caseIntro: { padding: "160px 0", backgroundColor: "#fff" },
  caseContent: { width: "70%", margin: "0 10% 0 20%", "@media (max-width: 599px)": { width: "80%", margin: "0 auto" } },
  caseKicker: { margin: "0 0 12px", fontSize: 18, opacity: 1 },
  caseQuestion: { maxWidth: 980, margin: 0, padding: 0, fontSize: 36, lineHeight: 1.18, fontWeight: 700, letterSpacing: ".02em", "@media (min-width: 800px)": { fontSize: 54 } },
  textColumns: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6%", padding: "38px 0", "@media (max-width: 599px)": { gridTemplateColumns: "1fr", gap: 24 } },
  textColumnCopy: { margin: 0, lineHeight: 1.8, opacity: .8 },
  team: { marginTop: 54 },
  teamHeading: { marginBottom: 20 },
  teamGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "6%", rowGap: 36, "@media (max-width: 599px)": { gridTemplateColumns: "1fr" } },
  teamMember: { display: "flex", flexDirection: "column" },
  teamContribution: { opacity: .6 },
  caseSection: { padding: "180px 0", backgroundColor: "#fff", "@media (max-width: 799px)": { padding: "90px 0" } },
  caseSectionTitle: { margin: "0 0 70px", fontSize: "clamp(54px,6vw,90px)", textAlign: "center" },
  caseSectionSubtitle: { margin: "0 0 10px", fontSize: 22 },
  discovery: { color: "#fff" },
  discoverySubtitle: { fontSize: 18, fontWeight: 400 },
  creationDark: { backgroundColor: "#2a2c29", color: "#fff" },
  implementation: { backgroundColor: "#000", color: "#fff" },
  step: { maxWidth: 720, paddingBottom: 60 },
  stepNumber: { fontWeight: 700 },
  stepTitle: { margin: "4px 0 18px", fontSize: 36 },
  stepCopy: { margin: 0, lineHeight: 1.8, opacity: .8 },
  caseGallery: { display: "grid", gridTemplateColumns: "1fr 1fr", width: "70%", margin: "0 10% 0 20%", "@media (max-width: 599px)": { gridTemplateColumns: "1fr", width: "100%", margin: 0 } },
  caseImageButton: { position: "relative", height: 440, overflow: "hidden", padding: 0, border: 0, backgroundColor: "#eee", cursor: "pointer", "@media (max-width: 599px)": { height: 320 } },
  caseImage: { width: "100%", height: "100%", objectFit: "cover", opacity: .55, transform: "scale(1.15)", transition: "transform .8s cubic-bezier(0,1,.5,1),opacity .3s cubic-bezier(0,1,.5,1)", ":hover": { opacity: 1, transform: "scale(1)" } },
  containImage: { objectFit: "contain", padding: 40 },
  caseImageButtonDense: { height: "15vh", minHeight: 120 },
  deliverables: { padding: 0, backgroundColor: "#000", color: "#fff" },
  deliverablesTitle: { margin: 0, padding: "24px 0", textAlign: "center", fontSize: 18, fontWeight: 400 },
  deliverablesGrid: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", "@media (max-width: 599px)": { gridTemplateColumns: "repeat(4,1fr)" } },
  lightbox: { position: "fixed", zIndex: 300, inset: 0, width: "100%", height: "100%", padding: "5vh 10vw", border: 0, backgroundColor: "rgba(16,23,27,.94)", cursor: "zoom-out" },
  lightboxImage: { position: "relative", display: "block", width: "100%", height: "90vh" },
  lightboxActual: { objectFit: "contain" },
});
