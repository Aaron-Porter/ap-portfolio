export type MediaItem = {
  src: string;
  type?: "image" | "video";
  layout?: "full" | "half" | "third";
  ratio?: number;
};

export type ProjectSection = {
  title: string;
  captions?: string[];
  media?: MediaItem[];
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  start: string;
  end: string;
  title: string;
  hero: MediaItem;
  about?: { title: string; body: string }[];
  sections: ProjectSection[];
};

const fableFullHeights: Record<string, number> = {
  "ULnDEX8B51HAkbRVW6j9CBgD58.png": 871.4296875,
  "mOmv1Pj6aO1BVK2j4BzRDoE.png": 551.828125,
  "ldMd5itBqP8eRoqljhiH7zQ4ghs.png": 551.828125,
  "UZaZ8ttoysJ4vLo17DdIaTpEFPg.png": 551.828125,
  "3hCBZAoq2v2lviKvXdVDAJXn1Fg.png": 644.7265625,
  "3RJVD3tAw4KW5MinqXCMnF0EIdM.png": 644.7265625,
  "xy8vuVxYbqVCXhmnvXYn4149y4.png": 542.984375,
  "05Ko7B92P62VwYV635ajioGV3ms.png": 803.96875,
  "nLJpGyXeETfV2LlBa6yaitSB5k.png": 561.78125,
  "bFnZv2vYP7LHSu8jJAQF5QB2D4.png": 561.78125,
  "bu7lxmQNlf2kTyNRCvNdZLBnltA.png": 661.3125,
  "Gv1MGE16CNMyTbVIUVilswojbFY.png": 661.3125,
  "cq7lZjDRIR0Hm8TQoOsIb5E2ow.png": 473.3125,
  "F9qv3lfB1U2waotCiNxduNCwkQ.png": 583.8984375,
  "aJGKFkyK52v6EaTEHzh79cEt7M.png": 871.4296875,
  "CNSOa6DWl24MrerFilegRuhIXG8.png": 871.4296875,
};

const f = (name: string, layout: MediaItem["layout"] = "full"): MediaItem => ({
  src: `/assets/fable/${name}`,
  layout,
  ratio: layout === "full" ? 1128 / fableFullHeights[name] : 1,
});

const c = (name: string, layout: MediaItem["layout"] = "full"): MediaItem => ({
  src: `/assets/carefull/${name}`,
  layout,
});

export const projects: Record<string, Project> = {
  fable: {
    slug: "fable",
    name: "Fable",
    role: "Head of Design",
    start: "2022",
    end: "2024",
    title: "Defining the future of creative workflows",
    hero: f("ULnDEX8B51HAkbRVW6j9CBgD58.png"),
    sections: [
      {
        title: "Designed an intuitive canvas interface for creating, transforming, and animating objects",
        media: [
          f("VLjcz0ULkYr1PC3REngTpwhgllg.png", "third"),
          f("B7AS71dqlpc8cDTKj18I9FkZOI.png", "third"),
          f("y262AjclEN69Afzh3oU8JgijuFI.png", "third"),
          f("kXI23keliBeb8OuUKIztfX5bxw.png", "half"),
          f("zoa4hCZ5z7Z6jhJiLmqPmVXZAc.png", "half"),
          f("mOmv1Pj6aO1BVK2j4BzRDoE.png"),
          f("ldMd5itBqP8eRoqljhiH7zQ4ghs.png"),
          f("miFpAimjV4QGmm0DNopxbALrYWM.png", "half"),
          f("szw8CCN4oRWlcIm5gvuTUpsq86k.png", "half"),
          f("5w2sl2bEg0ta34F9uskcOFQDFKQ.png", "half"),
          f("jwOAJ6PBOHL8rDnNNPeMTTqPvtQ.png", "half"),
          f("UZaZ8ttoysJ4vLo17DdIaTpEFPg.png"),
        ],
      },
      {
        title: "Built a creative system where diverse features became modular, interoperable building blocks",
        media: [
          f("3hCBZAoq2v2lviKvXdVDAJXn1Fg.png"),
          f("3RJVD3tAw4KW5MinqXCMnF0EIdM.png"),
          f("fRwu3TVPmKGPK57XjHmvvNN5xo.png", "half"),
          f("W1NOkzLJqX42HogmiIiCBnKInBA.png", "half"),
          f("xy8vuVxYbqVCXhmnvXYn4149y4.png"),
          f("05Ko7B92P62VwYV635ajioGV3ms.png"),
          f("sAFvg9Rk7D6lAmWW7MqITqjuw.png", "half"),
          f("h2fcQ7ORYcRm3qOKEx7d8LbM.png", "half"),
          f("Zz5gBQQzznOSiyXD5fy0SSyIrxg.png", "half"),
          f("aFTK07CAK7UKSU7h4PPPPCF3G4.png", "half"),
          f("nLJpGyXeETfV2LlBa6yaitSB5k.png"),
          f("bFnZv2vYP7LHSu8jJAQF5QB2D4.png"),
          f("bu7lxmQNlf2kTyNRCvNdZLBnltA.png"),
          f("Gv1MGE16CNMyTbVIUVilswojbFY.png"),
          f("fqRsZqiWyfQ6ZnwuNIq6kmxR07E.png", "half"),
          f("3TvBezQJZTTcQtX5WQaxwKpWiQ.png", "half"),
          f("3QpSiuCFdFFIFUCgy4vRCRDy4sk.png", "half"),
          f("dRWNHQvPyc0MDILFHwtBCXpyQmw.png", "half"),
        ],
      },
      {
        title: "Empowered designers to transform creations into reusable tools — scaling high-quality, on-brand content across teams.",
        media: [
          f("cq7lZjDRIR0Hm8TQoOsIb5E2ow.png"),
          f("F9qv3lfB1U2waotCiNxduNCwkQ.png"),
          f("A1ZaiDjJSGBNmlze4ZDZyxF7qA.png", "half"),
          f("mLbJ19XZcDR8tnUsbvE8o7eC6aA.png", "half"),
          f("aJGKFkyK52v6EaTEHzh79cEt7M.png"),
          f("CNSOa6DWl24MrerFilegRuhIXG8.png"),
        ],
      },
      {
        title: "Engineered & launched a novel pipeline for steering diffusion models with motion graphics",
        media: [
          { src: "/assets/fable/WrD2usJwAXvZOQC51BJaeYHaY.mp4", type: "video", ratio: 1128 / 683.4296875 },
          { src: "/assets/fable/0buiGBSOqmUaSrbam02TUWwg8g.mp4", type: "video", layout: "half", ratio: 1 },
          { src: "/assets/fable/iVcGVqr34wOfc7zDCuCe5hXxDsE.mp4", type: "video", layout: "half", ratio: 1 },
        ],
      },
    ],
  },
  carefull: {
    slug: "carefull",
    name: "Carefull",
    role: "Design Lead",
    start: "2020",
    end: "2021",
    title: "Empowering financial caregivers with simplicity,\nsafety, and transparency.",
    hero: { ...c("0TQtGllWfcC5wImRRWsS4btVi8.png"), ratio: 1128 / 656.890625 },
    about: [
      {
        title: "Our Customers",
        body: "An estimated 45 million Americans are financial caregivers — adult children responsible for the financial well-being of their aging parents. They pay bills, haggle with utilities, plan for their future, and pay for things they need — all while managing their own financial and family life.",
      },
      {
        title: "Their Problems",
        body: "Confusing forms, unsustainable spending behavior, inscrutable legal processes, fraud, abuse — caregivers face a broad set of issues, only compounded by the emotional complexity of a shifting power dynamic in their parental relationship.",
      },
      {
        title: "Constraints",
        body: "I joined Carefull at the very beginning of its life (employee 2). Velocity was the life-blood of the business, we needed high-conviction design artifacts produced every single day. Our mantra was to understand quickly, ship needed functionality, and iterate relentlessly.",
      },
      {
        title: "My Role",
        body: "As the lead designer (and only designer), my responsibilities were broad and intertwined in every portion of our operations. I served as researcher, brand designer, UX designer, UI designer, & front-end developer.",
      },
    ],
    sections: [
      {
        title: "I used research to build a deep understanding of our customers & inform product decisions.",
        captions: [
          "Conducted 1:1 qualitative research sessions with financial caregivers to create a ground truth by which to guide product decisions.",
          "Aided our head of growth in the formulation of quantitative studies to better understand our market and larger customer trends.",
          "Built foundational artifacts to give our team insight into the experiences, responsibilities, and needs of our customers.",
          "Conducted synchronous & asynchronous usability tests on our interface touchpoints.",
          "Met with users to understand how our product fit into their life & guide iterations of our offering.",
          "Ran workshops with our founding team to shape our company & product thinking.",
        ],
      },
      {
        title: "I crafted a brand that communicates trust, understanding, and a focus on generational bonds.",
        captions: [
          "Our wordmark needed to feel mature & institutional, like a bank, while retaining a sense of approachability and warmth.",
          "Our symbol conveys the idea of independent parts of a family coming together to create a larger whole.",
          "Inspired by the feeling of sorting through the family photo album, we utilized a mixture of modern & archival photos to create a visual motif that evokes ideas of family, generations, and the things that connect them.",
          "Built supporting material to extend our brand off the screen.",
          "Helped guide the creation of educational content.",
          "Designed & built all aspects of our website. I assembled templates & styles in Webflow to enable our marketing team to independently test & evolve our communication efforts over time.",
        ],
        media: [
          { ...c("6UtO5HoSD5sJFd0WJhdLoyKkx08.png", "half"), ratio: 1 },
          { ...c("Pu9YPnP1wocS9TbQRZJUhZ8EQc.png", "half"), ratio: 1 },
          { ...c("bWokT4IytA09IUKm3CZHZNdnG4U.png"), ratio: 1128 / 653 },
          { ...c("7clZsC7jXbEgfEJYaBsnCIVk6M.png", "half"), ratio: 1 },
          { ...c("haLhhxfKavykfs3HKh1iAKnUU.png", "half"), ratio: 1 },
          { src: "/assets/carefull/LUq5MaUX1ESuM8TlIj0nYGk2sdY.mp4", type: "video", ratio: 1128 / 809 },
        ],
      },
      {
        title: "Designed every experience touchpoint across the service in lock-step with engineering, business, & growth.",
        captions: [
          "Uncovered user journeys, mapped flows, built wireframes, and constructed prototypes to shape our product.",
          "Used quantitative & qualitative data from our customers to iterate and ship constant UX improvements.",
          "Designed every screen & state of the Carefull App. An experience that gives children increased insight into the financial life of their parent.",
          "Users receive timely alerts so that they can worry less and insure things are going smoothly.",
          "The app provides a set of intelligent alerts that look for patterns in their financial behavior and calls out when there may be an issue.",
          "Designed email template to keep our messaging with users on brand and effective.",
          "Built and managed our design component system to insure consistency and easy iteration. Worked closely with engineers & contributed directly to our React Native codebase.",
        ],
        media: [
          { ...c("30PIc9cPLO4Fcp29wOlyNL2nxAU.png"), ratio: 1128 / 711 },
          { ...c("ikHhDqedWmsWEyVU4XxUv1w3A.png", "half"), ratio: 552 / 687 },
          { ...c("mEueHREkbLH38Y9ITbyBxAdz6EI.png", "half"), ratio: 552 / 687 },
          { ...c("VvWe3oPPt45VJzoEEbEemB9qU.png"), ratio: 1128 / 711 },
          { ...c("1zFygPLAsmpy17SJZpUPjVggdH4.png"), ratio: 1128 / 889 },
        ],
      },
    ],
  },
  wayfair: {
    slug: "wayfair",
    name: "Wayfair",
    role: "UX Design Lead",
    start: "2018",
    end: "2022",
    title: "Building the future of how Wayfair Partners\nprocess millions of orders per week.",
    hero: { src: "/assets/wayfair/xrg7jYtKyjL7jg3Jbamb0nHtTc.png", ratio: 1128 / 594 },
    about: [
      { title: "The Brief", body: "Wayfair partnered with TTF at the end of 2018. We were tasked with embedding our team inside Wayfair to help revitalize & redesign aspects of Partner Home, the system they provide to fulfillment partners. Over the years, this system had drifted further and further away from the real needs of users, and as the company scaled, the friction became measurable." },
      { title: "The Opportunity", body: "The disconnect between user needs and the provided tools materialized in direct impact on the efficiency, and bottom line, of the business. We were tasked with a ground-up redesign of their order management system. But to deliver on this goal, we needed to develop a deep understanding of their partner's day-to-day processes, environments, and bottlenecks. We would then use those learnings to help inform a system designed to help partners be successful." },
      { title: "Constraints", body: "Working on a complicated enterprise tool as an outside consultant isn’t for the faint of heart. No interface alone can solve experience problems that extend far outside the realm of digital interaction. A system with dependencies intertwined across the organization — this was an exercise of untangling business processes, socializing design decisions, and creating a shared language of understanding." },
      { title: "My Role", body: "As UX Design Lead, my responsibilities were critical to the success of the project. I conducted on-site & remote research sessions, created alignment across many product teams via research reports, documented & helped evolve the internal processes behind the interface, and designed and led development of interface prototypes." },
    ],
    sections: [
      {
        title: "Built a deep understanding of our users through research & democratized access to learnings across the organization.",
        captions: [
          "Visited dozens of partners across the US & the UK to conduct on-site contextual research sessions. This allowed us to create a comprehensive picture of their working environment, internal processes, and more personally understand the humans that interact with the system on a daily basis.",
          "Documented, cataloged, & organized our research into a robust library. This allowed any stakeholder to browse the complete archive of our research. With full transcipts & video recordings, any team member could easily uncover examples of user feedback relevant to their product area.",
          "Behind the scenes of one our warehouse visits. This is my team members, Phil & Matthew, discussing a partner's process for handling fulfillment.",
          "Synthesized research data into reports & presentations to make user insights actionable and digestible for all stakeholders.",
          "Helped to facilitate workshops with internal teams to encourage & identify opportunities for UX research practices.",
        ],
        media: [{ src: "/assets/wayfair/Aul9ho9YbVDbjDKPvUbIoxbknkw.png", ratio: 1128 / 653 }],
      },
      {
        title: "Designed, developed, & tested a vision for how to evolve the toolset for partners.",
        captions: [
          "Audited the current toolset & worked with stakeholders across the organization to create an accurate map of the many intertwined business processes and logistical dependencies.",
          "Utilized our research finding to redesign the toolset from first principles, addressing sources of friction & reorganizing the system to align with how they truly approach their tasks.",
          "Built prototypes up and down the fidelity chain, from card sorting, to click-throughs, to a fully functioning coded front-end to test the more complicated stateful flows.",
          "Took our prototypes on the road and had users test them in their workplace. Getting feedback on how this new toolset would fit into their job.",
        ],
      },
    ],
  },
  youtube: {
    slug: "youtube",
    name: "YouTube",
    role: "UX Design Lead",
    start: "2017",
    end: "2018",
    title: "Elevating the experience of\npremium content across YouTube.",
    hero: { src: "/assets/youtube/UBKMdlAAl7RFSNPnGEMpQnZgWg.png", ratio: 1128 / 594 },
    about: [
      { title: "The Problem", body: "YouTube is the center of the universe for video on the internet. But from the beginning, its been optimized for one-off medium length content. So when we began investing heavily in original episodic & long-form programming, we needed to intentionally design for the experience of consuming that type of content." },
      { title: "The Opportunity", body: "Our hypothesis was that premium content deserved to be encompanied by a premium experience. And by creating a distinct experience for our subscribers, we could make our offering more desirable & useful." },
      { title: "Constraints", body: "Working inside of a large institution with a rich legacy of UX patterns is challenging enough, but when you purposely seek to break those patterns to solve for a new use-case, you must move slowly & ensure you works in-sync with every stakeholder." },
      { title: "My Role", body: "As a User Experience Designer at Google, I led interaction design for all of the Premium Original Content surfaces across YouTube. I was responsible for identifying opportunities, designing solutions, and working with the broader team to bring them to fruition." },
    ],
    sections: [
      {
        title: "I guided interaction design for the evolution of our Premium offering",
        captions: [
          "Worked with our research team to define critical user journeys for our product area. Product decisions were then measured by their impact against these journeys — giving design & research metrics by which to enact change.",
          "Worked with our research team to conduct an ethnographic research trip in Japan to uncover patterns specific to the market and test prototypes with users.",
          "We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors.",
          "Built prototypes of conceptual features & quality of life improvements for our Premium Subscribers. Aiming to improve the experience as a die-hard YouTube fan.",
          "Lead a cross-functional sprint with stakeholders from across the product area. Utilizing the existing knowledge and organizational learnings of my peers to inform our projects.",
          "Contributed to the evolution of our Premium Content surfaces. Creating visual patterns that were distinct from traditional YouTube content.",
          "Lead interaction design on a new detail page for Premium show & movies. Creating patterns that allowed a user to resume from where they left off, track their progress on episodic content, and view related content like trailers & extras.",
          "Design by the YouTube Gaming Team. The patterns we helped to establish for our detail pages were adopted & evolved by other team across the organization.",
        ],
        media: [
          { src: "/assets/youtube/n2SkXzpAaBdClOoxFWgWcoJROA.jpg", ratio: 1128 / 653 },
          { src: "/assets/youtube/pDz9uv9rtJbKdVvkw6iQVSFf6s.png", layout: "half", ratio: 552 / 765.546875 },
          { src: "/assets/youtube/tFaSqW3N2fTTS5eOGpW9Qcaok.png", layout: "half", ratio: 552 / 765.546875 },
          { src: "/assets/youtube/DSc2Ih7tF5fGnhXGd6Dj71NuI.png", ratio: 1128 / 632.484375 },
        ],
      },
      {
        title: "Made an impact across the company.",
        captions: [
          "Identified a gap in our asset creation workflow that created friction & excessive manual labor. So I built an internal tool to automate portions of the process. Giving autonomy to our counterparts.",
          "Worked with our growth team to reduce churn by implementing a post-cancellation recovery flow. The insights gathered went on to motivate retargeting and re-engagement initiatives.",
          "Helped to organize an internal conference that was attended by individuals from across Google products, offices, & countries.",
        ],
      },
    ],
  },
};
