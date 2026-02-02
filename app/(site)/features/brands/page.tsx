import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands & Small Businesses - CluckLabs",
  description: "Features for brands and small businesses on CluckLabs",
};

export default function BrandsPage() {
  return (
    <main className="pb-20 pt-40">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Brands & Small Businesses
        </h1>
        <p className="text-lg text-body-color">
          Features and benefits for brands and small businesses coming soon.
        </p>
      </div>
    </main>
  );
}
