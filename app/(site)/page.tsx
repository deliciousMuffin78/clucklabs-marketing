"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Smartphone,
  Activity,
  Users,
  Link2,
  Compass,
  Zap,
  Sparkles,
  Award,
} from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="relative overflow-hidden">
      <MeshGradient />
      {/* Hero */}
      <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/users-app.avif"
            alt="User Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[23%] items-center justify-center px-4 text-center md:px-8 xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="mb-4.5 text-lg font-medium tracking-[4px] text-white uppercase">
              Individuals · Clubs · Pros · Creators
            </h4>
            <h1 className="mb-6 max-w-[900px] text-[4.5rem] leading-[1.1] font-bold text-white">
              One app. Total clarity. <br />
              <span className="text-primary">Ecosystem for progress.</span>
            </h1>
            <p className="mb-10 max-w-[900px] text-xl text-white drop-shadow-sm md:text-2xl">
              Cluck connects training, recovery, food, sleep, and community so
              you get clear signals and a smarter next step without
              overthinking.
            </p>

            <div className="flex flex-col items-center gap-6">
              <form onSubmit={handleSubmit} className="w-full max-w-[500px]">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="focus:border-primary flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white backdrop-blur-md placeholder:text-white/60 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primaryho flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium whitespace-nowrap text-white shadow-xl transition-all duration-300"
                  >
                    Get Early Access
                  </button>
                </div>
              </form>
              <p className="text-sm font-medium tracking-wide text-white/70 uppercase">
                Early access invites. No pressure. No spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feature Sections Grid --> */}
      <section className="py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <div className="mb-15 text-center">
            <h2 className="text-3xl font-bold tracking-[8px] text-black uppercase md:text-4xl lg:text-5xl dark:text-white">
              CHOOSE YOUR PATH
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {/* Row 1: Single Container */}
            <div className="w-full">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-lg backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div className="dark:bg-blacksection relative z-10 rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
                  <h4 className="bg-zumthor text-primary mb-2 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                    INDIVIDUALS | MEMBERS
                  </h4>
                  <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                    For you
                  </p>
                  <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                    Your next step, made obvious.
                  </h2>
                  <p className="text-waterloo dark:text-manatee mx-auto mb-10 text-lg md:w-4/5 md:text-xl lg:w-3/5">
                    Train, eat, sleep, recover, repeat. Cluck connects fitness,
                    nutrition, wellbeing, and community so your plan reacts to
                    your signals, not your willpower.
                  </p>
                  <a
                    href="/features/users"
                    className="bg-primary hover:bg-primaryho inline-block rounded-full px-40 py-5.5 text-lg font-medium text-white shadow-lg transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: Two Containers */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div className="dark:bg-blacksection relative z-10 flex h-full flex-col rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
                  <h4 className="bg-zumthor text-primary mb-2 inline-block self-center rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                    CLUBS
                  </h4>
                  <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                    Run the community
                  </p>
                  <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl dark:text-white">
                    Turn a meetup into a movement.
                  </h2>
                  <p className="text-waterloo dark:text-manatee mb-10 flex-1 text-lg">
                    Chat, posts, announcements, events, memberships, challenges,
                    leaderboards, and payouts in one place, so your club grows
                    without noisy feeds or admin overload.
                  </p>
                  <a
                    href="/features/clubs"
                    className="bg-primary hover:bg-primaryho inline-block rounded-full px-10 py-5.5 text-lg font-medium text-white shadow-lg transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div className="dark:bg-blacksection relative z-10 flex h-full flex-col rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
                  <h4 className="bg-zumthor text-primary mb-2 inline-block self-center rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                    PROS
                  </h4>
                  <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                    Coach with clarity
                  </p>
                  <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl dark:text-white">
                    Coach in real time, <br />
                    not after the fact.
                  </h2>
                  <p className="text-waterloo dark:text-manatee mb-10 flex-1 text-lg">
                    Run 1:1 or groups with optional live streaming data during
                    sessions, sell plans at scale, and get discovered for
                    results, not followers.
                  </p>
                  <a
                    href="/features/pros"
                    className="bg-primary hover:bg-primaryho inline-block rounded-full px-10 py-5.5 text-lg font-medium text-white shadow-lg transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Two Containers */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div className="dark:bg-blacksection relative z-10 flex h-full flex-col rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
                  <h4 className="bg-zumthor text-primary mb-2 inline-block self-center rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                    CREATORS
                  </h4>
                  <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                    Make it pay
                  </p>
                  <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl dark:text-white">
                    Turn one challenge into recurring income.
                  </h2>
                  <p className="text-waterloo dark:text-manatee mb-10 flex-1 text-lg">
                    Launch paid challenges and programs with sponsor prizes,
                    create and schedule content in Cluck, and earn referrals for
                    up to 2 years while members stay focused.
                  </p>
                  <a
                    href="/features/creators"
                    className="bg-primary hover:bg-primaryho inline-block rounded-full px-10 py-5.5 text-lg font-medium text-white shadow-lg transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div className="dark:bg-blacksection relative z-10 flex h-full flex-col rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
                  <h4 className="bg-zumthor text-primary mb-2 inline-block self-center rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                    BRANDS | RETAILERS
                  </h4>
                  <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                    Pay for what works
                  </p>
                  <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl dark:text-white">
                    Turn incentives into foot traffic.
                  </h2>
                  <p className="text-waterloo dark:text-manatee mb-10 flex-1 text-lg">
                    Fund rewards tied to participation and redemption, then
                    watch clubs, creators, and pros drive measurable action and
                    repeat customers.
                  </p>
                  <a
                    href="/features/brands"
                    className="bg-primary hover:bg-primaryho inline-block rounded-full px-10 py-5.5 text-lg font-medium text-white shadow-lg transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Club Management Section (Copied from About Design) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/clubs-dashboard.avif"
                alt="Modern Club Management"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="text-primary mb-4 inline-block rounded-full bg-white px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                HOW CLUCK WORKS
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                From maybe tomorrow <br />
                <span className="text-primary">to done.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck connects your routine to clear next steps and real
                accountability, so progress feels simpler to start and easier to
                repeat.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Link2 size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Connect what you use (or start simple)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Compass size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Get your next step based on signals that matter
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Users size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Show up with people through clubs, events, and challenges
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Less guessing. More follow-through. Better days you can repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Sponsors Section (Flipped Design) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/sponsors.avif"
                alt="Rewards & Sponsors"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="text-primary mb-4 inline-block rounded-full bg-white px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                Why this works
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Cluck connects the people <br />
                <span className="text-primary">who create progress.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Members train inside Cluck—then clubs, pros, creators, and
                brands plug in to make showing up easier and more rewarding.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Users size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Clubs create rhythm through events, challenges, and
                      community
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Zap size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Pros add targeted help when members need more than a
                      meetup
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Sparkles size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Creators drive participation with challenges people
                      actually finish
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/10">
                    <Award size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Brands fund rewards tied to measurable actions
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Everyone wins when participation is the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Final CTA Section --> */}
      <section className="relative overflow-hidden py-10">
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          {/* Outer Shell (The thick translucent frame) */}
          <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-xl backdrop-blur-xl md:p-6 dark:bg-white/5">
            {/* Inner Container (The white surface) */}
            <div className="dark:bg-blacksection relative z-10 rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                EARLY ACCESS START NOW
              </h4>
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                Ready to cluck?
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto mb-10 text-lg md:w-4/5 md:text-xl lg:w-3/5">
                Get early access to Cluck and spend less time guessing, more
                time feeling better, even when life isn’t perfect.
              </p>

              <div className="flex flex-col items-center gap-5">
                <form onSubmit={handleSubmit} className="w-full max-w-[500px]">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                      className="border-stroke shadow-solid-2 focus:border-primary dark:border-strokedark dark:focus:border-primary flex-1 rounded-full border px-6 py-4 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primaryho flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium whitespace-nowrap text-white shadow-xl transition-all duration-300"
                    >
                      Get early access
                    </button>
                  </div>
                </form>
                <p className="text-primary text-sm font-medium tracking-wide uppercase">
                  Early access invites. No pressure. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
