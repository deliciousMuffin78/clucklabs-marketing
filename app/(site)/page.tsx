"use client";

import Image from "next/image";
import {
  Activity,
  Users,
  Link2,
  Compass,
  Zap,
  Sparkles,
  Award,
  Dumbbell,
  Utensils,
  Heart,
  Moon,
  Share2,
  MessageSquare,
  Calendar,
  Trophy,
  TrendingUp,
  Video,
  CreditCard,
  Camera,
  Gift,
} from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import SignupForm from "@/components/Common/SignupForm";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient />
      {/* Hero */}
      <section className="relative h-[110vh] min-h-[700px] w-full overflow-hidden bg-white md:h-[100vh]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/home-hero1.avif"
            alt="User Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[15%] items-center justify-center px-4 pt-20 text-center md:-translate-y-[0%] md:px-8 md:pt-0 xl:-translate-y-[15%] xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="mb-2 text-[0.6rem] font-medium tracking-[4px] text-white uppercase sm:text-[0.7rem] md:mb-4.5 md:text-[0.8rem] lg:text-[0.9rem]">
              Clubs · Individuals · Pros
            </h4>
            <h1 className="text-primary mb-3 max-w-[900px] text-3xl leading-[1.1] font-bold md:mb-6 md:text-5xl lg:text-[4.5rem]">
              It's What You Do
            </h1>
            <p className="mb-0 max-w-[900px] text-lg leading-[1.4] text-white drop-shadow-sm md:text-3xl">
              Cluck connects running, walking, training, recovery, food, sleep,
              and community so you get clear signals and a smarter next step
              without overthinking.
            </p>
            <div className="my-4 inline-block rounded-full bg-[#1884be]/80 px-8 py-2 backdrop-blur-sm">
              <p className="text-base font-bold text-white md:text-lg">
                Coming Spring - Summer 2026
              </p>
            </div>

            <div className="flex w-full justify-center">
              <div className="w-[100%] rounded-[40px] border border-white/20 bg-white/10 p-3 backdrop-blur-sm md:w-auto md:p-6 lg:p-8">
                <SignupForm
                  ctaText="Get Early Access"
                  description="Early access invites. No spam."
                  showInterests={false}
                  pageName="homepage"
                  descriptionClassName="text-white/100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feature Sections Grid --> */}
      <section className="py-10 md:py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <div className="mb-5 text-center md:mb-15">
            <h2 className="text-xl font-bold tracking-[8px] text-black uppercase md:text-4xl lg:text-5xl dark:text-white">
              CHOOSE YOUR PATH
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {/* Row 1: Single Container */}
            <div className="w-full">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-lg backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div
                  className="relative z-10 flex flex-col overflow-hidden rounded-[32px] px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20"
                  style={{
                    backgroundColor: "#1884be",
                    backgroundImage: `
                      radial-gradient(
                        circle at 50% 0%,
                        rgba(255,255,255,0.40) 0%,
                        rgba(255,255,255,0.35) 12%,
                        rgba(255,255,255,0.25) 12.5%,
                        rgba(255,255,255,0.25) 24%,
                        rgba(255,255,255,0.18) 24.5%,
                        rgba(255,255,255,0.18) 36%,
                        rgba(255,255,255,0.12) 36.5%,
                        rgba(255,255,255,0.12) 48%,
                        rgba(255,255,255,0.06) 48.5%,
                        rgba(255,255,255,0.06) 60%,
                        rgba(255,255,255,0) 60.5%
                      )
                    `,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-md mb-6 inline-block self-center rounded-full bg-white/100 px-10 py-5 font-semibold tracking-[4px] text-[#1884be] uppercase md:text-2xl">
                    INDIVIDUALS
                  </h4>
                  <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Your next step, made obvious.
                  </h2>
                  <p className="mx-auto mb-10 text-lg text-white/90 md:w-4/5 md:text-xl lg:w-3/5">
                    Train, eat, sleep, recover, repeat. Cluck connects fitness,
                    nutrition, wellbeing, and community so your plan reacts to
                    your signals, not your willpower.
                  </p>

                  <div className="mb-10 flex flex-wrap justify-center gap-5">
                    {[
                      { Icon: Activity, color: "#dc6069" },
                      { Icon: Dumbbell, color: "#ed8130" },
                      { Icon: Utensils, color: "#5f9d53" },
                      { Icon: Heart, color: "#ec4899" },
                      { Icon: Moon, color: "#27587a" },
                      { Icon: Share2, color: "#a855f7" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                      >
                        <item.Icon
                          size={22}
                          strokeWidth={2.5}
                          style={{ color: item.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href="/features/users"
                    className="hover:bg-primaryho inline-block self-center rounded-full bg-[#0f0f14] px-10 py-5.5 text-lg font-medium text-white uppercase shadow-2xl transition-all duration-300 md:px-40"
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: Two Containers */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div
                  className="relative z-10 flex h-full flex-col overflow-hidden rounded-[32px] px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20"
                  style={{
                    backgroundColor: "#f05a28",
                    backgroundImage: `
                      radial-gradient(
                        circle at 50% 0%,
                        rgba(255,255,255,0.40) 0%,
                        rgba(255,255,255,0.35) 12%,
                        rgba(255,255,255,0.25) 12.5%,
                        rgba(255,255,255,0.25) 24%,
                        rgba(255,255,255,0.18) 24.5%,
                        rgba(255,255,255,0.18) 36%,
                        rgba(255,255,255,0.12) 36.5%,
                        rgba(255,255,255,0.12) 48%,
                        rgba(255,255,255,0.06) 48.5%,
                        rgba(255,255,255,0.06) 60%,
                        rgba(255,255,255,0) 60.5%
                      )
                    `,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-md mb-6 inline-block self-center rounded-full bg-white/100 px-10 py-5 font-semibold tracking-[4px] text-[#f05a28] uppercase md:text-2xl">
                    CLUBS
                  </h4>
                  <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    Turn a meetup into a movement.
                  </h2>
                  <p className="mb-10 flex-1 text-lg text-white/90">
                    Chat, posts, announcements, events, memberships, challenges,
                    leaderboards, and payouts in one place, so your club grows
                    without noisy feeds or admin overload.
                  </p>

                  <div className="mb-10 flex flex-wrap justify-center gap-5">
                    {[
                      { Icon: MessageSquare, color: "#3b82f6" },
                      { Icon: Share2, color: "#a855f7" },
                      { Icon: Calendar, color: "#ec4899" },
                      { Icon: Trophy, color: "#eab308" },
                      { Icon: CreditCard, color: "#eab308" },
                      { Icon: TrendingUp, color: "#10b981" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                      >
                        <item.Icon
                          size={22}
                          strokeWidth={2.5}
                          style={{ color: item.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href="/features/clubs"
                    className="hover:bg-primaryho inline-block self-center rounded-full bg-[#0f0f14] px-10 py-5.5 text-lg font-medium text-white uppercase shadow-2xl transition-all duration-300 md:px-40"
                  >
                    See details
                  </a>
                </div>
              </div>
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div
                  className="relative z-10 flex h-full flex-col overflow-hidden rounded-[32px] px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20"
                  style={{
                    backgroundColor: "#6b3fa0",
                    backgroundImage: `
                      radial-gradient(
                        circle at 50% 0%,
                        rgba(255,255,255,0.40) 0%,
                        rgba(255,255,255,0.35) 12%,
                        rgba(255,255,255,0.25) 12.5%,
                        rgba(255,255,255,0.25) 24%,
                        rgba(255,255,255,0.18) 24.5%,
                        rgba(255,255,255,0.18) 36%,
                        rgba(255,255,255,0.12) 36.5%,
                        rgba(255,255,255,0.12) 48%,
                        rgba(255,255,255,0.06) 48.5%,
                        rgba(255,255,255,0.06) 60%,
                        rgba(255,255,255,0) 60.5%
                      )
                    `,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-md mb-6 inline-block self-center rounded-full bg-white/100 px-10 py-5 font-semibold tracking-[4px] text-[#6b3fa0] uppercase md:text-2xl">
                    PROS
                  </h4>
                  <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    Coach in real time, <br />
                    not after the fact.
                  </h2>
                  <p className="mb-10 flex-1 text-lg text-white/90">
                    Run 1:1 or groups with optional live streaming data during
                    sessions, sell plans at scale, and get discovered for
                    results, not followers.
                  </p>

                  <div className="mb-10 flex flex-wrap justify-center gap-5">
                    {[
                      { Icon: Video, color: "#dc6069" },
                      { Icon: MessageSquare, color: "#3b82f6" },
                      { Icon: Dumbbell, color: "#ed8130" },
                      { Icon: Utensils, color: "#5f9d53" },
                      { Icon: TrendingUp, color: "#10b981" },
                      { Icon: CreditCard, color: "#eab308" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                      >
                        <item.Icon
                          size={22}
                          strokeWidth={2.5}
                          style={{ color: item.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href="/features/pros"
                    className="hover:bg-primaryho inline-block self-center rounded-full bg-[#0f0f14] px-10 py-5.5 text-lg font-medium text-white uppercase shadow-2xl transition-all duration-300 md:px-40"
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Two Containers */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div
                  className="relative z-10 flex h-full flex-col overflow-hidden rounded-[32px] px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20"
                  style={{
                    backgroundColor: "#d11764",
                    backgroundImage: `
                      radial-gradient(
                        circle at 50% 0%,
                        rgba(255,255,255,0.40) 0%,
                        rgba(255,255,255,0.35) 12%,
                        rgba(255,255,255,0.25) 12.5%,
                        rgba(255,255,255,0.25) 24%,
                        rgba(255,255,255,0.18) 24.5%,
                        rgba(255,255,255,0.18) 36%,
                        rgba(255,255,255,0.12) 36.5%,
                        rgba(255,255,255,0.12) 48%,
                        rgba(255,255,255,0.06) 48.5%,
                        rgba(255,255,255,0.06) 60%,
                        rgba(255,255,255,0) 60.5%
                      )
                    `,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-md mb-6 inline-block self-center rounded-full bg-white/100 px-10 py-5 font-semibold tracking-[4px] text-[#d11764] uppercase md:text-2xl">
                    CREATORS
                  </h4>
                  <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    Turn one challenge into recurring income.
                  </h2>
                  <p className="mb-10 flex-1 text-lg text-white/90">
                    Launch paid challenges and programs with sponsor prizes,
                    create and schedule content in Cluck, and earn referrals for
                    up to 2 years while members stay focused.
                  </p>

                  <div className="mb-10 flex flex-wrap justify-center gap-5">
                    {[
                      { Icon: Camera, color: "#dc6069" },
                      { Icon: CreditCard, color: "#3b82f6" },
                      { Icon: Calendar, color: "#ec4899" },
                      { Icon: Gift, color: "#eab308" },
                      { Icon: MessageSquare, color: "#a855f7" },
                      { Icon: TrendingUp, color: "#10b981" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                      >
                        <item.Icon
                          size={22}
                          strokeWidth={2.5}
                          style={{ color: item.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href="/features/creators"
                    className="hover:bg-primaryho inline-block self-center rounded-full bg-[#0f0f14] px-10 py-5.5 text-lg font-medium text-white uppercase shadow-2xl transition-all duration-300 md:px-40"
                  >
                    See details
                  </a>
                </div>
              </div>
              <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-md backdrop-blur-xl md:p-6 dark:bg-white/5">
                <div
                  className="relative z-10 flex h-full flex-col overflow-hidden rounded-[32px] px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20"
                  style={{
                    backgroundColor: "#3fa36c",
                    backgroundImage: `
                      radial-gradient(
                        circle at 50% 0%,
                        rgba(255,255,255,0.40) 0%,
                        rgba(255,255,255,0.35) 12%,
                        rgba(255,255,255,0.25) 12.5%,
                        rgba(255,255,255,0.25) 24%,
                        rgba(255,255,255,0.18) 24.5%,
                        rgba(255,255,255,0.18) 36%,
                        rgba(255,255,255,0.12) 36.5%,
                        rgba(255,255,255,0.12) 48%,
                        rgba(255,255,255,0.06) 48.5%,
                        rgba(255,255,255,0.06) 60%,
                        rgba(255,255,255,0) 60.5%
                      )
                    `,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-md mb-6 inline-block self-center rounded-full bg-white/100 px-10 py-5 font-semibold tracking-[4px] text-[#3fa36c] uppercase md:text-2xl">
                    BRANDS
                  </h4>
                  <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    Turn incentives
                    <br />
                    into foot traffic.
                  </h2>
                  <p className="mb-10 flex-1 text-lg text-white/90">
                    Fund rewards tied to participation and redemption, then
                    watch clubs, creators, and pros drive measurable action and
                    repeat customers.
                  </p>

                  <div className="mb-10 flex flex-wrap justify-center gap-5">
                    {[
                      { Icon: Gift, color: "#dc6069" },
                      { Icon: CreditCard, color: "#3b82f6" },
                      { Icon: TrendingUp, color: "#10b981" },
                      { Icon: MessageSquare, color: "#a855f7" },
                      { Icon: Share2, color: "#ec4899" },
                      { Icon: Heart, color: "#f43f5e" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                      >
                        <item.Icon
                          size={22}
                          strokeWidth={2.5}
                          style={{ color: item.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href="/features/brands"
                    className="hover:bg-primaryho inline-block self-center rounded-full bg-[#0f0f14] px-10 py-5.5 text-lg font-medium text-white uppercase shadow-2xl transition-all duration-300 md:px-40"
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How Cluck Works Section --> */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full max-w-[900px] text-center">
              <h4 className="text-primary mb-4 inline-block rounded-full bg-white px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                HOW CLUCK WORKS
              </h4>
              <h2 className="relative mb-6 text-3xl leading-[1.2] font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                From maybe tomorrow <br />
                <span className="text-primary">to done.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto max-w-[700px] text-lg">
                Cluck connects your routine to clear next steps and real
                accountability, so progress feels simpler to start and easier to
                repeat.
              </p>
            </div>

            <div className="relative mx-auto aspect-[588/526.5] w-full max-w-[800px]">
              <Image
                src="/images/features/how-it-works.avif"
                alt="Modern Club Management"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="w-full max-w-[1100px]">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Link2 size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Connect what you use (or start simple)
                    </p>
                  </div>
                </div>

                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Compass size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Get your next step based on signals that matter
                    </p>
                  </div>
                </div>

                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Show up with people through clubs, events, and challenges
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-12 text-center text-lg font-medium text-black dark:text-white">
                Less guessing. More follow-through. Better days you can repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this works (Stacked Design) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full max-w-[900px] text-center">
              <h4 className="text-primary mb-4 inline-block rounded-full bg-white px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                Why this works
              </h4>
              <h2 className="relative mb-6 text-3xl leading-[1.2] font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                Cluck connects the people <br />
                <span className="text-primary">who create progress.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto max-w-[700px] text-lg">
                Members train inside Cluck, then clubs, pros, creators, and
                brands plug in to make showing up easier and more rewarding.
              </p>
            </div>

            <div className="relative mx-auto aspect-[588/526.5] w-full max-w-[800px]">
              <Image
                src="/images/features/why-it-works.avif"
                alt="Rewards & Sponsors"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="w-full max-w-[1100px]">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Clubs create rhythm through events, challenges, and
                      community
                    </p>
                  </div>
                </div>

                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Zap size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Pros add targeted help when members need more than a
                      meetup
                    </p>
                  </div>
                </div>

                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Creators drive participation with challenges people
                      actually finish
                    </p>
                  </div>
                </div>

                <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection flex items-start gap-5 rounded-3xl border bg-white p-8">
                  <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                    <Award size={22} />
                  </div>
                  <div>
                    <p className="text-waterloo dark:text-manatee text-lg">
                      Brands fund rewards tied to measurable actions
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-12 text-center text-lg font-medium text-black dark:text-white">
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
                Get early access to Cluck and spend less time guessing. <br />
                More time feeling better, even when life isn’t perfect.
              </p>

              <div className="flex w-full justify-center">
                <div className="w-full max-w-[650px]">
                  <SignupForm
                    ctaText="Get early access"
                    description="Early access invites. No pressure. No spam."
                    pageName="homepage"
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
