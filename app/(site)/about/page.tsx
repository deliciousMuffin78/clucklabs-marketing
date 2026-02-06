"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import SignupForm from "@/components/Common/SignupForm";

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="relative overflow-hidden pt-50 pb-50 lg:pt-65 lg:pb-80">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center">
            <h4 className="text-primary mb-6 text-lg font-medium tracking-[4px] uppercase">
              OUR STORY
            </h4>
            <h1 className="max-w-[1100px] text-center text-4xl leading-[1.1] font-bold text-black md:text-5xl lg:text-6xl dark:text-white">
              It Started at a <span className="text-primary">Run Club.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content Section */}
      <section className="pb-5 lg:pb-20">
        <div className="max-w-c-1154 mx-auto px-4 md:px-8 xl:px-0">
          {/* Top Story - Full Width */}
          <div className="mb-16">
            <div className="text-waterloo dark:text-manatee flex flex-col gap-8 text-xl leading-relaxed md:text-xl">
              <p>Hi, I am Travis.</p>
              <p>
                I moved to West Hollywood in 2024 and joined a run club because
                I was looking for people. Community. Fun. A reason to show up.
                <br />
                That first run with West Hollywood Run Club was phenomenal. Not
                because of pace or performance, but because of the energy. No
                pressure. No egos. Just people showing up, moving their bodies,
                laughing, sweating, and genuinely enjoying being there. <br />
                What I loved most was how simple it felt. Everyone belonged. All
                paces were welcome. Some days you push it. Some days you take it
                easy. Most of the time, you are out there because it feels good
                to move together. That mattered to me.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12 text-lg md:flex-row md:items-start md:gap-20">
            <div className="flex flex-col gap-10 md:w-1/2">
              <div className="text-waterloo dark:text-manatee flex flex-col gap-6 text-[1.2rem] leading-relaxed">
                <p>
                  Outside the runs, I started to notice how scattered everything
                  felt. People shared moments on Instagram. Conversations lived
                  in group texts. Workouts were tracked in different apps. But
                  there was no single place to actually belong. No space that
                  brought it all together, whether you were moving with others
                  or doing your own thing.
                </p>
                <p>
                  I run. I train. I work out. But fitness is not just part of my
                  life. It is something I share.
                </p>
                <p>
                  That became even more clear through my sister, Ashley. She is
                  disabled and new here, and helping her stay active has been
                  one of the most meaningful parts of my life. Since moving
                  here, she walks more, takes fitness classes, and genuinely
                  loves seeing her progress. Counting her miles. Feeling proud
                  of what her body can do. Being part of something.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 md:w-1/2">
              <div className="text-waterloo dark:text-manatee flex flex-col gap-6 text-[1.2rem] leading-relaxed">
                <p>
                  She deserves a place in fitness. So do people like her. As I
                  looked closer, the gap was everywhere.
                </p>
                <p>
                  Run club leaders had no real tools to support their
                  communities. Creators had audiences, but no true home. Pros
                  were incredible, but hard to discover unless you already knew
                  where to look. And everyday people, at every pace and ability,
                  were left stitching things together on their own.
                </p>
                <p className="text-primary text-2xl font-bold italic">
                  Everything felt scattered. That gap became CLUCK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Brain & The Heartbeat Section */}
      <section className="py-10 lg:py-0">
        <div className="max-w-c-1154 mx-auto px-4 md:px-8 xl:px-0">
          <div className="dark:bg-blacksection border-stroke dark:border-strokedark rounded-[40px] border bg-white p-8 shadow-md md:p-12 lg:p-16">
            <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-20">
              {/* Left Column: Context */}
              <div className="md:w-1/2">
                <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
                  Dmitri and I created CLUCK together. Dmitri (The Brain) brings
                  the technology and the systems thinking. <br />
                  <br />I (The Heartbeat) bring the community, the heartbeat,
                  and the lived experience of being out there.
                </p>
              </div>

              {/* Right Column: The Quote */}
              <div className="md:w-1/2">
                <div className="border-primary relative border-l-1 pl-8 md:pl-12">
                  <p className="text-xl leading-normal font-light text-black/80 italic md:text-2xl dark:text-white/80">
                    “Not just another app or leaderboard. CLUCK is a place where
                    community actually lives, and where everyone can be part of
                    it.”
                  </p>
                  <div className="mt-8">
                    <p className="text-xl font-bold text-black dark:text-white">
                      Travis
                    </p>
                    <p className="text-waterloo dark:text-manatee text-sm font-medium tracking-widest uppercase">
                      Founder · Community Builder · Chief Fitness Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl dark:text-white">
              The Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                name: "Dmitri S",
                role: "Founder and CEO, CTO",
                tag: "“The Brain”",
                image: "/images/features/founder-ds.avif",
              },
              {
                name: "Travis S",
                role: "Founder and COO",
                tag: "“The Heartbeat”",
                image: "/images/features/founder-ts.avif",
              },
              {
                name: "Nicole A",
                role: "Strategic Advisor",
                tag: "“The Backbone”",
                image: "/images/features/nicole.avif",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-6 aspect-square w-1/2 overflow-hidden rounded-3xl grayscale transition-all hover:grayscale-0 md:w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary mb-2 font-bold tracking-widest uppercase">
                  {member.tag}
                </p>
                <p className="text-waterloo dark:text-manatee">{member.role}</p>
              </div>
            ))}
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
