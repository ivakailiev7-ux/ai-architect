import type { Metadata } from "next";
import { BriefForm } from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Your brief — AI Architect",
  description: "Tell us about your brand so we can start building your ads.",
  // Post-checkout page — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function BriefPage() {
  return (
    <main>
      <BriefForm />
    </main>
  );
}
