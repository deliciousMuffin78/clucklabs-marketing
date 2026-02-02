import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators & Influencers - CluckLabs",
  description: "Features for creators and influencers on CluckLabs",
};

export default function CreatorsPage() {
  return (
    <main className="pb-20 pt-40">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Creators / Influencers
        </h1>
        <p className="text-lg text-body-color">
          Features and benefits for creators and influencers coming soon.
        </p>
      </div>
    </main>
  );
}
