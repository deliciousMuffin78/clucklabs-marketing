import { Metadata } from "next";
import PrivacyContent from "@/components/Terms/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Cluck Labs",
  description: "Privacy Policy for Cluck Labs",
};

export default function PrivacyPage() {
  return (
    <main className="pb-20 pt-40">
      <PrivacyContent />
    </main>
  );
}
