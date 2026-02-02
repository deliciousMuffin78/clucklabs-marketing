import { Metadata } from "next";
import TermsContent from "@/components/Terms/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service - Cluck Labs",
  description: "Terms of Service for Cluck Labs",
};

export default function TermsPage() {
  return (
    <main className="pb-20 pt-40">
      <TermsContent />
    </main>
  );
}
