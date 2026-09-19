import type { Metadata } from "next";
import { ArchiveExperience } from "@/components/ArchiveExperience";

export const metadata: Metadata = {
  title: "2016 Portfolio Archive",
  description: "Aaron Porter’s original 2015–2016 portfolio, rebuilt from the surviving WordPress archive.",
  alternates: { canonical: "/archive/2016" },
  openGraph: {
    title: "2016 Portfolio Archive - Aaron Porter",
    description: "Film, identity, and civic stories from the years before product.",
    url: "/archive/2016",
    images: ["/assets/archive/beach-hero.jpg"],
  },
};

export default function Archive2016Page() {
  return <ArchiveExperience />;
}
