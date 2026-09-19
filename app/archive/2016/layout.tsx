import type { Metadata } from "next";
import { LegacyPortfolio } from "@/components/LegacyPortfolio";

export const metadata: Metadata = {
  title: "Aaron Porter — 2016 Portfolio",
  description: "Aaron Porter’s original 2016 portfolio, faithfully rebuilt from its WordPress source.",
  alternates: { canonical: "/archive/2016" },
};

export default function LegacyPortfolioLayout() {
  return <LegacyPortfolio />;
}
