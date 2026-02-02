import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pros & Coaches - CluckLabs",
  description: "Features for professionals and coaches on CluckLabs",
};

export default function ProsPage() {
  return (
    <main className="pb-20 pt-40">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Pros / Coaches
        </h1>
        <p className="text-lg text-body-color">
          Features and benefits for professionals and coaches coming soon.
        </p>
      </div>
    </main>
  );
}
