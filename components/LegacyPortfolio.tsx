"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

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
  creationSteps: LegacyStep[];
  implementationSteps: LegacyStep[];
  finalImages: LegacyImage[];
  videos?: { title: string; id: string }[];
};

type LegacyImage = { src: string; alt: string; contain?: boolean };
type LegacyStep = { id: string; title: string; copy: string; images: LegacyImage[] };
type ProjectTransition = {
  project: LegacyProject;
  direction: "toProject" | "toWork";
  clipPath: string;
  titleOffsetY: number;
  titleScale: number;
};

const beachPng = new Set([167, 169, 188, 500, 505, 506, 507, 508, 509, 510, 511, 512]);
const strictlyPng = new Set([42, 84, 95, 97, 463, 464, 481, 482, 486, 487, 488, 489, 490, 495, 496, 498]);

function legacyImages(project: "beach" | "strictly" | "thrive", ids: number[], contain = false): LegacyImage[] {
  return ids.map((id) => {
    const extension = project === "thrive" ? (id === 477 ? "jpeg" : "png") : project === "beach" ? (beachPng.has(id) ? "png" : "jpg") : (strictlyPng.has(id) ? "png" : "jpg");
    return { src: `/assets/archive/full/${project}-${id}.${extension}`, alt: `${project} project asset ${id}`, contain };
  });
}

const beachFinal = legacyImages("beach", [138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 177, 178, 179, 183, 184, 182, 181, 180, 505, 517, 516, 515, 514, 513, 512, 511, 510, 509, 508, 507, 506]);
const strictlyFinal = legacyImages("strictly", [494, 492, 491, 490, 488, 486, 481, 464, 463, 218, 217, 222, 83, 82, 81, 97, 95, 471]);

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
    creationSteps: [
      {
        id: "photography",
        title: "Photography.",
        copy: "Our first visual for Beach was a small body of photographs. These photos acted and served as a launching point for the locations, color palette, and an overall visual aesthetic for the project. Throughout the entire process, we looked to the photography as a visual guide for us to adhere to.",
        images: legacyImages("beach", [135, 131, 121, 130, 120, 113]),
      },
      {
        id: "video",
        title: "Video Production.",
        copy: "Inspired by the photography, we jumped right into production for the biggest element in the campaign, the music video. Utilizing the photography as a storyboard, we scheduled two days of production. We scheduled some fairly challenging shoots on a tight schedule, but mostly we were excited about the possibility of spending a warm day at the beach.",
        images: legacyImages("beach", [148, 149, 150, 125, 134, 151]),
      },
      {
        id: "post-production",
        title: "Post Production.",
        copy: "The post production process proved to be the longest and most challenging portion of this project. We had a two month period from our shoot days to final release. Working with this accelerated timeline and functioning on a budget of approximately $0, we were forced to be pretty clever.",
        images: legacyImages("beach", [167, 169, 174, 175, 176, 500, 188]),
      },
      {
        id: "design",
        title: "Design.",
        copy: "When designing Beach we aimed for the assets and imagery we used to be tightly tied to the music video. They had a symbiotic relationship, both influencing and growing with each other. In the end, we created a hefty amount of deliverables to be released in the lead up to the album.",
        images: legacyImages("beach", [177, 175, 170, 183, 179, 180, 181, 182]),
      },
    ],
    implementationSteps: [
      {
        id: "social-media",
        title: "Social Media.",
        copy: "Throughout our entire production process, we made it a key goal to release elements of the project sequentially. Over a two month period, we slowly built the narrative across platforms and mediums. This build up helped to promote the release of his album and give his brand a unique and curated look.",
        images: legacyImages("beach", [524, 525]),
      },
      {
        id: "reflection",
        title: "Reflection.",
        copy: "Working 40+ hours a week on Beach, attending school full time, working enough client hours to pay rent, and attempting to fit in a few hours of sleep every night made for an insanely challenging couple months. But the amazing part was that it never felt like work. In the end, this project became the most exhausting, life-dominating, fulfilling, and rewarding project I had ever worked on.",
        images: [],
      },
    ],
    finalImages: beachFinal,
    videos: [
      { title: "Beach Prologue", id: "145355120" },
      { title: "Beach — Music Video", id: "143682135" },
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
    creationSteps: [
      {
        id: "logo",
        title: "Logo.",
        copy: "The design process began with the logo. We sought inspiration and influence from the things that relate closest to their company: vehicles. We dissected the varying structural forms of domestic and import vehicles, identifying the distinct lines of classic decals and stripes. In the end, we tied these forms into the more literal form of their S to create the base for the rest of their brand.",
        images: legacyImages("strictly", [454, 455, 484, 482, 481, 486, 487]),
      },
      {
        id: "design",
        title: "Brand Guidelines.",
        copy: "To ensure brand consistency and make the utilization of this new identity easier for Strictly, we assembled a brand guideline. This guideline took form as a 50 page booklet that detailed every aspect for the use of their brand.",
        images: legacyImages("strictly", [464, 463, 492, 491, 217, 218, 494]),
      },
      {
        id: "wireframes",
        title: "Web Content Wireframes.",
        copy: "Strictly’s current website was a solution they developed themselves using a hosted ecommerce service. As their offerings expanded, the site became unusable. I graphed the important pages and product categories, restructured how the content connected, and built a consistent system of organization that could expand with their catalog.",
        images: legacyImages("strictly", [490, 489], true),
      },
      {
        id: "mockups",
        title: "Mockups.",
        copy: "Based on their new informational structure, I built mockups that connected tightly to the new brand and ensured an improved user experience.",
        images: legacyImages("strictly", [83, 82, 81, 84, 471, 97, 95], true),
      },
      {
        id: "development",
        title: "Development.",
        copy: "Utilizing Magento and WordPress, I developed a robust system of product and content management that powers the site. This allowed Strictly to change content and manage every aspect of the sales process on any device while keeping the customer experience current and manageable.",
        images: legacyImages("strictly", [495, 498, 496], true),
      },
    ],
    implementationSteps: [
      {
        id: "logos-everywhere",
        title: "Logos everywhere!",
        copy: "Shortly after the project’s completion, Strictly began implementing its brand assets across a number of applications. Images of sponsored cars appeared online beside selfies of passionate customers sporting Strictly merchandise. The project received enormous support and strong public reception.",
        images: legacyImages("strictly", [233, 232, 225, 226, 229, 230, 42, 37]),
      },
      {
        id: "reflection",
        title: "Reflection.",
        copy: "In the end, I believe this project struck the perfect balance between versatility and character—not only in the brand’s visual assets, but also in the direction in which we launched it. We gave Strictly the tools and ability to build a company focused on its users and devoted to what they love.",
        images: [],
      },
    ],
    finalImages: strictlyFinal,
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
    creationSteps: [
      {
        id: "gathering-information",
        title: "Gathering Information.",
        copy: "We began gathering information on the essential services needed to create a thriving urban center. Using Maslow’s Hierarchy of Needs, we mapped the resources available downtown and identified the gaps that prevented residents from meeting basic needs without leaving the city.",
        images: [],
      },
      {
        id: "surveys",
        title: "Student Surveys.",
        copy: "Even though the information we had gathered was valuable, we wanted to hear directly from the people it would affect. We surveyed the student body of KCAD, located in the City Center, and used their experiences and opinions to inform the rest of our project.",
        images: [],
      },
      {
        id: "video",
        title: "Making our voice heard.",
        copy: "We distilled the research into a short film that could make the scale of the issue legible and help a broad audience understand why access to basic services mattered to the future of downtown.",
        images: [],
      },
    ],
    implementationSteps: [
      {
        id: "presenting",
        title: "Presenting our vision.",
        copy: "As the project came to a close, our focus shifted toward communication. We invited community stakeholders to a 45-minute presentation covering every aspect of the work and proposed a basic-needs assessment of the City Center.",
        images: [],
      },
      {
        id: "public",
        title: "Releasing it to the public.",
        copy: "Because of the publicity and the shareable nature of the headlines and video, viewership quickly shot up. The video received roughly 70,000 views over the course of two weeks—small in the scope of viral videos, but massive compared with the intended audience.",
        images: legacyImages("thrive", [474, 475, 476, 477]),
      },
      {
        id: "reactions",
        title: "Reactions.",
        copy: "At first we were ecstatic about the focus on our project. We were excited to see people sharing and engaging with something we had worked on for months. Then the feedback started to roll in.",
        images: [],
      },
      {
        id: "reflection",
        title: "Mistakes & Reflection.",
        copy: "The community response taught us a valuable lesson: design is about context. We designed a video for a specific purpose, and when it was re-contextualized its message was lost. The work contributed to a broader dialogue, but the lack of purposeful inclusion ultimately harmed our credibility.",
        images: [],
      },
    ],
    finalImages: legacyImages("thrive", [474, 475, 476, 477]),
    videos: [{ title: "Thrive — A walkable City Center", id: "92519242" }],
  },
];

const archiveItems = [
  { title: "Fjords & Highlands", tag: "Film", image: "/assets/archive/fjords.png", href: "https://vimeo.com/125062270" },
  { title: "Herman Miller", tag: "Film", image: "/assets/archive/herman-miller.png", href: "https://vimeo.com/123354938" },
  { title: "Warrior Poets", tag: "Web", image: "/assets/archive/warrior-poets.png" },
  { title: "We, People of the Reaching", tag: "Film", image: "/assets/archive/reaching.png", href: "https://vimeo.com/104971630" },
];

function recommendedWorkScroll(slug: LegacyProject["slug"]) {
  const index = caseStudies.findIndex((project) => project.slug === slug);
  const height = window.innerHeight;
  if (window.innerWidth < 800) return Math.max(0, height + index * height * 0.4 - height * 0.3);
  const panelTop = index === 0 ? height * 0.7 : index === 1 ? height * 1.3 + 100 : height * 1.9 + 200;
  return Math.max(0, panelTop - height * 0.2);
}

function projectPanelMetrics(slug: LegacyProject["slug"], scrollY: number) {
  const index = caseStudies.findIndex((project) => project.slug === slug);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mobile = width < 800;
  const panelWidth = mobile ? width : width * 0.7;
  const panelHeight = mobile ? height * 0.4 : height * 0.6;
  const panelLeft = mobile ? 0 : width * 0.15;
  const documentTop = mobile
    ? height + index * height * 0.4
    : index === 0 ? height * 0.7 : index === 1 ? height * 1.3 + 100 : height * 1.9 + 200;
  const panelTop = documentTop - scrollY;
  const right = Math.max(0, width - panelLeft - panelWidth);
  const bottom = Math.max(0, height - panelTop - panelHeight);
  const workTitleSize = mobile ? 54 : width >= 1024 ? 126 : 90;
  const heroTitleSize = Math.min(360, Math.max(88, width * 0.2));
  return {
    clipPath: `inset(${Math.max(0, panelTop)}px ${right}px ${bottom}px ${panelLeft}px)`,
    titleOffsetY: panelTop + panelHeight / 2 - height / 2,
    titleScale: workTitleSize / heroTitleSize,
  };
}

function storedWorkScroll() {
  const stored = window.sessionStorage.getItem("legacyWorkScroll");
  if (stored === null) return null;
  const value = Number(stored);
  return Number.isFinite(value) && value >= 0 ? value : null;
}

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
        {...stylex.props(styles.header, view === "case" && styles.headerCase)}
        onMouseEnter={() => setHeaderOpen(true)}
        onMouseLeave={() => setHeaderOpen(false)}
      >
        <Link href={ROOT} aria-label="Home"><Wordmark collapsed dark={dark} /></Link>
        {view !== "case" && <nav {...stylex.props(styles.headerNav, headerOpen && styles.headerNavVisible, dark && styles.headerNavDark)} aria-label="2016 portfolio navigation">
          <Link href={ROOT}>Home</Link>
          <Link href={`${ROOT}/work`}>Work</Link>
          <Link href={`${ROOT}/about`}>About</Link>
        </nav>}
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

function WorkProject({ project, index, activeProject, onActivate }: { project: LegacyProject; index: number; activeProject: LegacyProject["slug"] | null; onActivate: (project: LegacyProject, clipPath: string, titleOffsetY: number, titleScale: number) => void }) {
  const inactive = activeProject !== null && activeProject !== project.slug;
  const href = `${ROOT}/project/${project.slug}`;

  return (
    <Link
      {...stylex.props(
        styles.workProject,
        index === 0 && styles.workProjectFirst,
        index === 1 && styles.workProjectSecond,
        index === 2 && styles.workProjectThird,
        inactive && styles.workProjectInactive,
      )}
      href={href}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const bounds = event.currentTarget.getBoundingClientRect();
        const clipPath = `inset(${Math.max(0, bounds.top)}px ${Math.max(0, window.innerWidth - bounds.right)}px ${Math.max(0, window.innerHeight - bounds.bottom)}px ${Math.max(0, bounds.left)}px)`;
        const title = event.currentTarget.querySelector("h2");
        const currentTitleSize = title ? Number.parseFloat(window.getComputedStyle(title).fontSize) : 126;
        const destinationTitleSize = Math.min(360, Math.max(88, window.innerWidth * 0.2));
        const titleOffsetY = bounds.top + bounds.height / 2 - window.innerHeight / 2;
        window.sessionStorage.setItem("legacyWorkScroll", String(window.scrollY));
        onActivate(project, clipPath, titleOffsetY, currentTitleSize / destinationTitleSize);
      }}
    >
      <div {...stylex.props(styles.workProjectPanel)}>
        <div {...stylex.props(styles.workProjectImage)}><Image {...stylex.props(styles.coverImage)} src={project.hero} alt="" fill sizes="100vw" quality={90} /></div>
        <div {...stylex.props(styles.workShade)} />
        <div {...stylex.props(styles.workProjectInfo)}>
          <h2 {...stylex.props(styles.workProjectTitle)}>{project.title}</h2>
        </div>
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

function WorkView({ transition, onActivate }: { transition: ProjectTransition | null; onActivate: (project: LegacyProject, clipPath: string, titleOffsetY: number, titleScale: number) => void }) {
  const activeProject = transition?.direction === "toProject" ? transition.project.slug : null;

  return (
    <div {...stylex.props(styles.workPage)}>
      <Link {...stylex.props(styles.directional, styles.directionalLeft)} href={`${ROOT}/about`}><Arrow left /> About Me</Link>
      <section {...stylex.props(styles.workLanding)}><h1 {...stylex.props(styles.workLandingTitle)}>Work</h1></section>
      <section {...stylex.props(styles.projectList)}>
        {caseStudies.map((project, index) => <WorkProject key={project.slug} project={project} index={index} activeProject={activeProject} onActivate={onActivate} />)}
      </section>
      <div {...stylex.props(styles.projectSizer)} aria-hidden="true" />
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

function ImageBlock({ image, eager = false, dense = false, onOpen }: { image: LegacyImage; eager?: boolean; dense?: boolean; onOpen: () => void }) {
  return (
    <button {...stylex.props(styles.caseImageButton, dense && styles.caseImageButtonDense)} style={{ position: "relative" }} type="button" onClick={onOpen}>
      <Image {...stylex.props(styles.caseImage, image.contain && styles.containImage)} src={image.src} alt={image.alt} fill sizes={dense ? "(max-width: 599px) 25vw, 20vw" : "(max-width: 700px) 100vw, 35vw"} quality={dense ? 75 : 90} priority={eager} />
    </button>
  );
}

function CaseStudyView({ project, transitionActive, onBackToWork }: { project: LegacyProject; transitionActive: boolean; onBackToWork: (project: LegacyProject, clipPath: string, titleOffsetY: number, titleScale: number) => void }) {
  const [lightbox, setLightbox] = useState<LegacyImage | null>(null);
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
      <Link
        {...stylex.props(styles.caseBack, transitionActive && styles.caseBackHidden)}
        href={`${ROOT}/work`}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          const destinationScroll = storedWorkScroll() ?? recommendedWorkScroll(project.slug);
          window.sessionStorage.setItem("legacyWorkScroll", String(destinationScroll));
          const metrics = projectPanelMetrics(project.slug, destinationScroll);
          onBackToWork(project, metrics.clipPath, metrics.titleOffsetY, metrics.titleScale);
        }}
      >
        <Arrow left /> Back to work
      </Link>
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
          <h3 {...stylex.props(styles.caseSectionTitle)}>Creation</h3>
          {project.creationSteps.map((step, stepIndex) => (
            <div {...stylex.props(styles.caseStepBlock)} id={step.id} key={step.id}>
              <div {...stylex.props(styles.caseContent)}>
                <div {...stylex.props(styles.step)}><span {...stylex.props(styles.stepNumber)} style={{ color: project.accent }}>{String(stepIndex + 1).padStart(2, "0")}</span><h4 {...stylex.props(styles.stepTitle)}>{step.title}</h4><p {...stylex.props(styles.stepCopy)}>{step.copy}</p></div>
              </div>
              {step.images.length > 0 && <div {...stylex.props(styles.caseGallery)}>{step.images.map((image, imageIndex) => <ImageBlock key={image.src} image={image} eager={stepIndex === 0 && imageIndex === 0} onOpen={() => setLightbox(image)} />)}</div>}
            </div>
          ))}
        </section>
        <section id="implementation" {...stylex.props(styles.caseSection, styles.implementation)}>
          <h3 {...stylex.props(styles.caseSectionTitle)}>Implementation</h3>
          {project.implementationSteps.map((step, stepIndex) => (
            <div {...stylex.props(styles.caseStepBlock)} id={step.id} key={step.id}>
              <div {...stylex.props(styles.caseContent)}>
                <div {...stylex.props(styles.step)}><span {...stylex.props(styles.stepNumber)} style={{ color: project.accent }}>{String(project.creationSteps.length + stepIndex + 1).padStart(2, "0")}</span><h4 {...stylex.props(styles.stepTitle)}>{step.title}</h4><p {...stylex.props(styles.stepCopy)}>{step.copy}</p></div>
              </div>
              {step.images.length > 0 && <div {...stylex.props(styles.caseGallery)}>{step.images.map((image) => <ImageBlock key={image.src} image={image} onOpen={() => setLightbox(image)} />)}</div>}
            </div>
          ))}
        </section>
        <section id="deliverables" {...stylex.props(styles.deliverables)}>
          <h3 {...stylex.props(styles.deliverablesTitle)} style={{ backgroundColor: project.accent }}>Final Deliverables</h3>
          {project.videos && <div {...stylex.props(styles.videoGrid)}>{project.videos.map((video) => <div {...stylex.props(styles.videoFrame)} key={video.id}><iframe {...stylex.props(styles.videoIframe)} src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`} title={video.title} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>)}</div>}
          <div {...stylex.props(styles.deliverablesGrid)}>{project.finalImages.map((image) => <ImageBlock key={image.src} image={image} dense onOpen={() => setLightbox(image)} />)}</div>
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

function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = 150;
    patternCanvas.height = 150;
    const patternContext = patternCanvas.getContext("2d");
    if (!patternContext) return;
    const patternData = patternContext.createImageData(150, 150);
    let timer = 0;

    const resize = () => {
      canvas.width = Math.max(1, Math.round(canvas.clientWidth));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight));
      update();
    };

    const update = () => {
      for (let index = 0; index < patternData.data.length; index += 4) {
        const value = Math.floor(Math.random() * 255);
        patternData.data[index] = value;
        patternData.data[index + 1] = value;
        patternData.data[index + 2] = value;
        patternData.data[index + 3] = 20;
      }
      patternContext.putImageData(patternData, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = context.createPattern(patternCanvas, "repeat") ?? "transparent";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);
    timer = window.setInterval(update, 1000 / 7.5);
    return () => {
      window.removeEventListener("resize", resize);
      window.clearInterval(timer);
    };
  }, []);

  return <canvas ref={canvasRef} {...stylex.props(styles.grainCanvas)} aria-hidden="true" />;
}

function BackgroundSequence({ view }: { view: string }) {
  const forwardRef = useRef<HTMLVideoElement>(null);
  const reverseRef = useRef<HTMLVideoElement>(null);
  const targetFrame = view === "home" ? 0 : view === "about" ? 170 : 80;
  const currentFrameRef = useRef(targetFrame);
  const [posterFrame, setPosterFrame] = useState(targetFrame);
  const [activeDirection, setActiveDirection] = useState<"forward" | "reverse" | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const startFrame = currentFrameRef.current;
    const distance = Math.abs(targetFrame - startFrame);
    if (reduced || distance === 0) {
      currentFrameRef.current = targetFrame;
      setPosterFrame(targetFrame);
      setActiveDirection(null);
      return;
    }

    const direction = targetFrame > startFrame ? "forward" : "reverse";
    const video = direction === "forward" ? forwardRef.current : reverseRef.current;
    const otherVideo = direction === "forward" ? reverseRef.current : forwardRef.current;
    if (!video) return;
    otherVideo?.pause();
    const startTime = direction === "forward" ? startFrame / 24 : (170 - startFrame) / 24;
    const endTime = direction === "forward" ? targetFrame / 24 : (170 - targetFrame) / 24;
    let animationFrame = 0;
    let cancelled = false;

    const finish = () => {
      video.pause();
      currentFrameRef.current = targetFrame;
      setPosterFrame(targetFrame);
      requestAnimationFrame(() => {
        if (!cancelled) setActiveDirection(null);
      });
    };

    const monitor = () => {
      const rawFrame = direction === "forward" ? video.currentTime * 24 : 170 - video.currentTime * 24;
      currentFrameRef.current = Math.max(0, Math.min(170, Math.round(rawFrame)));
      if (video.currentTime >= endTime - 1 / 48 || video.ended) {
        finish();
        return;
      }
      animationFrame = requestAnimationFrame(monitor);
    };

    const play = () => {
      if (cancelled) return;
      setActiveDirection(direction);
      video.play().then(() => {
        if (!cancelled) animationFrame = requestAnimationFrame(monitor);
      }).catch(finish);
    };

    const onSeeked = () => play();
    video.pause();
    video.currentTime = startTime;
    if (!video.seeking && Math.abs(video.currentTime - startTime) < 1 / 48 && video.readyState >= 2) play();
    else video.addEventListener("seeked", onSeeked, { once: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      video.removeEventListener("seeked", onSeeked);
      video.pause();
    };
  }, [reduced, targetFrame]);

  const posters = [
    { frame: 0, src: "/assets/archive/main-000.jpg" },
    { frame: 80, src: "/assets/archive/hero-poster.jpg" },
    { frame: 170, src: "/assets/archive/main-170.jpg" },
  ];

  return (
    <div {...stylex.props(styles.backgroundSequence, view === "about" && styles.backgroundAbout)}>
      {posters.map((poster) => <Image key={poster.frame} {...stylex.props(styles.backgroundPoster, posterFrame !== poster.frame && styles.backgroundPosterHidden)} src={poster.src} alt="" fill sizes="100vw" quality={90} priority />)}
      <video ref={forwardRef} {...stylex.props(styles.backgroundVideo, activeDirection === "forward" && styles.backgroundVideoActive)} muted playsInline preload="auto" aria-hidden="true">
        <source src="/assets/archive/hero-loop.mp4" type="video/mp4" />
      </video>
      <video ref={reverseRef} {...stylex.props(styles.backgroundVideo, activeDirection === "reverse" && styles.backgroundVideoActive)} muted playsInline preload="auto" aria-hidden="true">
        <source src="/assets/archive/hero-loop-reverse.mp4" type="video/mp4" />
      </video>
      <GrainOverlay />
    </div>
  );
}

export function LegacyPortfolio() {
  const pathname = usePathname();
  const router = useRouter();
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
  const previousViewRef = useRef(view);
  const workScrollRef = useRef(0);
  const reverseAnimationFinishedRef = useRef(false);
  const [projectTransition, setProjectTransition] = useState<ProjectTransition | null>(null);

  const openProject = (activeProject: LegacyProject, clipPath: string, titleOffsetY: number, titleScale: number) => {
    reverseAnimationFinishedRef.current = false;
    setProjectTransition({ project: activeProject, direction: "toProject", clipPath, titleOffsetY, titleScale });
  };

  const returnToWork = (activeProject: LegacyProject, clipPath: string, titleOffsetY: number, titleScale: number) => {
    reverseAnimationFinishedRef.current = false;
    setProjectTransition({ project: activeProject, direction: "toWork", clipPath, titleOffsetY, titleScale });
    window.requestAnimationFrame(() => router.push(`${ROOT}/work`, { scroll: false }));
  };

  useLayoutEffect(() => {
    const previousView = previousViewRef.current;
    if (previousView === "work" && view.startsWith("project:")) {
      workScrollRef.current = window.scrollY;
      window.sessionStorage.setItem("legacyWorkScroll", String(window.scrollY));
    }
    const savedWorkScroll = storedWorkScroll();
    const top = view === "work" && previousView.startsWith("project:")
      ? savedWorkScroll ?? workScrollRef.current
      : 0;
    window.scrollTo({ top, left: 0, behavior: "instant" });
    previousViewRef.current = view;
  }, [view]);

  useEffect(() => {
    if (projectTransition?.direction === "toProject" && view === `project:${projectTransition.project.slug}`) {
      const frame = window.requestAnimationFrame(() => setProjectTransition(null));
      return () => window.cancelAnimationFrame(frame);
    }
    if (projectTransition?.direction === "toWork" && view === "work" && reverseAnimationFinishedRef.current) {
      setProjectTransition(null);
    }
  }, [projectTransition, view]);

  return (
    <div {...stylex.props(styles.legacyRoot)}>
      <link rel="stylesheet" href="https://use.typekit.net/zia5tfo.css" />
      <BackgroundSequence view={backgroundView} />
      <LegacyMobileMenu dark={view === "about"} />
      {view !== "home" && <LegacyHeader view={view === "about" ? "about" : project ? "case" : "work"} />}
      <div key={view} {...stylex.props(styles.legacyScene)}>
        {view === "home" && <HomeView />}
        {view === "work" && <WorkView transition={projectTransition} onActivate={openProject} />}
        {view === "about" && <AboutView />}
        {project && <CaseStudyView project={project} transitionActive={projectTransition?.direction === "toWork"} onBackToWork={returnToWork} />}
      </div>
      <AnimatePresence>
        {projectTransition && (
          <motion.div
            key={`${projectTransition.direction}-${projectTransition.project.slug}`}
            {...stylex.props(styles.projectTransitionOverlay)}
            initial={{ clipPath: projectTransition.direction === "toProject" ? projectTransition.clipPath : "inset(0px 0px 0px 0px)" }}
            animate={{ clipPath: projectTransition.direction === "toProject" ? "inset(0px 0px 0px 0px)" : projectTransition.clipPath }}
            transition={{ duration: 0.42, ease }}
            onAnimationComplete={() => {
              if (projectTransition.direction === "toProject") {
                router.push(`${ROOT}/project/${projectTransition.project.slug}`, { scroll: false });
                return;
              }
              reverseAnimationFinishedRef.current = true;
              if (view === "work") setProjectTransition(null);
            }}
          >
            <Image {...stylex.props(styles.coverImage)} src={projectTransition.project.hero} alt="" fill sizes="100vw" quality={90} priority />
            <div {...stylex.props(styles.workShade)} />
            <motion.h2
              {...stylex.props(styles.caseHeroTitle)}
              style={{ color: projectTransition.project.slug === "thrive" ? projectTransition.project.accent : "#fff" }}
              initial={{
                y: projectTransition.direction === "toProject" ? projectTransition.titleOffsetY : 0,
                scale: projectTransition.direction === "toProject" ? projectTransition.titleScale : 1,
              }}
              animate={{
                y: projectTransition.direction === "toProject" ? 0 : projectTransition.titleOffsetY,
                scale: projectTransition.direction === "toProject" ? 1 : projectTransition.titleScale,
              }}
              transition={{ duration: 0.42, ease }}
            >
              {projectTransition.project.title}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = stylex.create({
  legacyRoot: { position: "relative", minHeight: "100vh", overflowX: "hidden", backgroundColor: "#10171b", color: "#000", fontFamily: '"sofia-pro", Helvetica, Arial, sans-serif', fontSize: 18, fontWeight: 300, lineHeight: 1.4, letterSpacing: ".02em" },
  legacyScene: { position: "relative", zIndex: 5, minHeight: "100vh" },
  backgroundSequence: { position: "fixed", zIndex: 0, inset: 0, width: "100%", height: "100vh", overflow: "hidden", transition: "transform 1.5s ease" },
  backgroundAbout: { transform: "translate3d(25%,0,0)", "@media (max-width: 700px)": { transform: "none" } },
  backgroundPoster: { position: "absolute", zIndex: 0, inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 1 },
  backgroundPosterHidden: { opacity: 0 },
  backgroundVideo: { position: "absolute", zIndex: 1, inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0, pointerEvents: "none", transform: "translate3d(0,0,0)" },
  backgroundVideoActive: { opacity: 1 },
  grainCanvas: { position: "absolute", zIndex: 10, inset: 0, width: "100%", height: "100%", pointerEvents: "none", transform: "translate3d(0,0,0) rotate(360deg)", backfaceVisibility: "hidden" },
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
  headerCase: { padding: "28px 0 0" },
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
  projectList: { position: "absolute", zIndex: 10, top: 0, left: 0, width: "100%", height: "calc(250vh + 200px)", padding: 0, overflow: "hidden", pointerEvents: "none", backgroundColor: "transparent", "@media (max-width: 799px)": { position: "relative", height: "auto", overflow: "visible" } },
  projectSizer: { display: "block", height: "180vh", "@media (max-width: 799px)": { display: "none" } },
  workProject: { position: "absolute", zIndex: 10, display: "block", left: "15vw", width: "70vw", height: "60vh", overflow: "visible", pointerEvents: "auto", backgroundColor: "#000", color: "#fff", transition: "opacity .25s ease, transform .5s cubic-bezier(0,1,.5,1)", willChange: "transform", ":hover": { transform: "scale(1.06)" }, "@media (max-width: 799px)": { position: "relative", top: "0", left: 0, width: "100vw", height: "40vh", overflow: "hidden" } },
  workProjectFirst: { top: "70vh", "@media (max-width: 799px)": { top: 0 } },
  workProjectSecond: { top: "calc(130vh + 100px)", "@media (max-width: 799px)": { top: 0 } },
  workProjectThird: { top: "calc(190vh + 200px)", "@media (max-width: 799px)": { top: 0 } },
  workProjectInactive: { opacity: 0, pointerEvents: "none" },
  workProjectPanel: { position: "relative", display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", isolation: "isolate" },
  workProjectImage: { position: "absolute", zIndex: -2, top: "-20vh", left: "-15vw", width: "100vw", height: "100vh", "@media (max-width: 799px)": { inset: 0, width: "100%", height: "100%" } },
  projectTransitionOverlay: { position: "fixed", zIndex: 75, inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", isolation: "isolate", pointerEvents: "none", backgroundColor: "#000", color: "#fff", willChange: "clip-path" },
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
  caseBack: { position: "fixed", zIndex: 85, top: 96, left: "3%", display: "flex", alignItems: "center", color: "#fff", fontSize: 16, opacity: 1, transition: "opacity .15s ease", "@media (max-width: 599px)": { display: "none" } },
  caseBackHidden: { opacity: 0, pointerEvents: "none" },
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
  caseStepBlock: { paddingBottom: 120, contentVisibility: "auto", containIntrinsicSize: "900px", "@media (max-width: 799px)": { paddingBottom: 70 } },
  step: { maxWidth: 720, paddingBottom: 60 },
  stepNumber: { fontWeight: 700 },
  stepTitle: { margin: "4px 0 18px", fontSize: 36 },
  stepCopy: { margin: 0, lineHeight: 1.8, opacity: .8 },
  caseGallery: { display: "grid", gridTemplateColumns: "1fr 1fr", width: "70%", margin: "0 10% 0 20%", "@media (max-width: 599px)": { gridTemplateColumns: "1fr", width: "100%", margin: 0 } },
  caseImageButton: { position: "relative", height: 440, overflow: "hidden", padding: 0, border: 0, backgroundColor: "#eee", cursor: "pointer", "@media (max-width: 599px)": { height: 320 } },
  caseImage: { width: "100%", height: "100%", objectFit: "cover", opacity: .55, transform: "scale(1.15)", transition: "transform .8s cubic-bezier(0,1,.5,1),opacity .3s cubic-bezier(0,1,.5,1)", ":hover": { opacity: 1, transform: "scale(1)" } },
  containImage: { objectFit: "contain", padding: 40 },
  caseImageButtonDense: { height: "15vh", minHeight: 120 },
  deliverables: { padding: 0, backgroundColor: "#000", color: "#fff", contentVisibility: "auto", containIntrinsicSize: "1200px" },
  deliverablesTitle: { margin: 0, padding: "24px 0", textAlign: "center", fontSize: 18, fontWeight: 400 },
  videoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", backgroundColor: "#000", "@media (max-width: 699px)": { gridTemplateColumns: "1fr" } },
  videoFrame: { position: "relative", aspectRatio: "16 / 9", overflow: "hidden", backgroundColor: "#000" },
  videoIframe: { position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 },
  deliverablesGrid: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", "@media (max-width: 599px)": { gridTemplateColumns: "repeat(4,1fr)" } },
  lightbox: { position: "fixed", zIndex: 300, inset: 0, width: "100%", height: "100%", padding: "5vh 10vw", border: 0, backgroundColor: "rgba(16,23,27,.94)", cursor: "zoom-out" },
  lightboxImage: { position: "relative", display: "block", width: "100%", height: "90vh" },
  lightboxActual: { objectFit: "contain" },
});
