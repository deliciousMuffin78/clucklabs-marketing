"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import SignupForm from "@/components/Common/SignupForm";

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="relative overflow-hidden pt-35 pb-20 lg:pt-45 lg:pb-25">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary mb-4.5 text-lg font-medium tracking-[4px] uppercase">
              ABOUT CLUCK
            </h4>
            <h1 className="mb-6 max-w-[900px] text-4xl leading-[1.1] font-bold text-black md:text-5xl lg:text-6xl dark:text-white">
              It’s what you do.
            </h1>
            <p className="text-waterloo dark:text-manatee mb-10 max-w-[800px] text-xl md:text-2xl">
              Cluck is the connected wellness system for real-life sports
              communities. We believe that movement should be social,
              measurable, and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-25">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl dark:text-white">
                Our Mission
              </h2>
              <p className="text-waterloo dark:text-manatee mb-6 text-lg">
                We're building tools for the places people actually visit and
                talk about. From local run clubs to neighborhood gyms and
                regional brands, we help communities thrive by rewarding the
                behaviors that matter.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Verified participation that builds trust",
                  "Rewards that drive real-world action",
                  "Communities that show up and repeat",
                  "Tools that scale without the workload",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square w-full md:w-1/2">
              <div className="from-primary/20 to-secondary/20 border-primary/10 flex h-full w-full items-center justify-center rounded-3xl border bg-gradient-to-br backdrop-blur-sm">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt="Cluck Logo"
                  width={200}
                  height={50}
                  className="hidden opacity-50 dark:block"
                />
                <Image
                  src="/images/logo/logo-light.png"
                  alt="Cluck Logo"
                  width={200}
                  height={50}
                  className="opacity-50 dark:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-25">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl md:p-6 dark:bg-white/5">
            <div className="dark:bg-blacksection relative z-10 rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                Ready to Join the Community?
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto mb-10 text-lg md:w-4/5 md:text-xl lg:w-3/5">
                Join thousands of individuals, clubs, and brands building the
                future of real-world participation.
              </p>
              <div className="flex w-full justify-center">
                <div className="w-full max-w-[650px]">
                  <SignupForm
                    ctaText="Get early access"
                    description="Early access invites. No pressure. No spam."
                    pageName="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
