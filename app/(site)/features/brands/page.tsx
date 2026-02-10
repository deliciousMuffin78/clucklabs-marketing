"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Layout,
  Zap,
  Calendar,
  TrendingUp,
  MessagesSquare,
  ShieldCheck,
  CreditCard,
  Award,
  ShoppingBag,
  BarChart3,
  Star,
  CheckCircle2,
  Activity,
  Briefcase,
  Search,
  Lock,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import { NoiseBackground } from "@/components/ui/noise-background";
import SignupForm from "@/components/Common/SignupForm";

// export const metadata = {
//   title: "Clubs & Communities | Cluck",
//   description: "The connected wellness system for real-life sports communities.",
// };

const brandFeatures = [
  {
    title: "Manage the action",
    icon: <Zap size={18} />,
    items: [
      "Challenge builder and distribution",
      "Prize pool and offer management",
      "Eligibility and rule settings",
      "Automated reward delivery",
    ],
  },
  {
    title: "Activate the ecosystem",
    icon: <Users size={18} />,
    items: [
      "Creator and Pro partnerships",
      "Club-led activations",
      "Targeted community discovery",
      "Sponsored event placements",
    ],
  },
  {
    title: "Measure the outcome",
    icon: <BarChart3 size={18} />,
    items: [
      "Verified participation tracking",
      "Redemption and foot traffic data",
      "Repeat customer analytics",
      "ROI and performance reporting",
    ],
  },
];

export default function BrandsPage() {
  return (
    <main>
      {/* Brands Hero */}
      <section className="relative h-[110vh] min-h-[700px] w-full overflow-hidden bg-white md:h-[100vh]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/brands.avif"
            alt="Brands Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[25%] items-center justify-center px-4 pt-20 text-center md:-translate-y-[14%] md:px-8 md:pt-0 xl:-translate-y-[25%] xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="md:mb-4.0 mb-2 text-[0.9rem] font-medium tracking-[4px] text-white uppercase md:text-[0.8rem] lg:text-lg">
              Brands · Local Businesses
            </h4>
            <h1 className="text-primary text-[1.7rem] mb-3 max-w-[900px] leading-[1.1] font-bold md:mb-6 md:text-5xl xl:text-[4.0rem]">
              Get real people to show up. <br />
              Pay for outcomes, not ads.
            </h1>
            <p className="mb-0 max-w-[900px] text-lg leading-[1.4] text-white md:text-3xl">
              Cluck turns movement into measurable action: visits,
              participation, redemptions, and repeat customers powered by clubs,
              creators, and pros. No upfront spend. You fund results when they
              happen.
            </p>
          </div>
        </div>
      </section>

      {/* Unified Signup Form Section - Below Header/Hero for all devices */}
      <section className="relative z-30 -mt-10 px-4 pb-5 md:-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[40px] border border-white/20 bg-white/90 p-1 shadow-2xl backdrop-blur-md md:p-2 lg:bg-white/95">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Form */}
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <SignupForm
                  ctaText="Get Early Access"
                  description="Early access invites. No spam."
                  showInterests={false}
                  pageName="brands"
                  descriptionClassName="text-black/60"
                />
              </div>

              {/* Right Column: Benefits */}
              <div className="bg-primary/5 flex flex-col justify-center rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Lock size={18} className="text-[#1884be]" />
                    </div>
                    <p className="text-sm font-bold text-black/80">
                      12 Month Rate Lock
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <BadgeCheck size={18} className="text-[#3fa36c]" />
                    </div>
                    <p className="text-sm font-bold text-black/80">
                      Lifetime Verified Badge
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Star size={18} className="text-[#f05a28]" />
                    </div>
                    <p className="text-sm font-bold text-black/80">
                      First Cluck Event VIP Access
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Trophy size={18} className="text-[#6b3fa0]" />
                    </div>
                    <p className="text-sm font-bold text-black/80">
                      Win 1 Year Of Premium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-10 lg:py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-[900px] text-center md:mb-24">
            <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
              EVERYTHING YOUR BUSINESS NEEDS
            </h4>
            <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
              Tools that turn movement into money.{" "}
              <br className="hidden md:block" />
              Scale your impact without scaling your workload.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              Cluck gives you a single dashboard to launch challenges, manage
              prize pools, and track real-world redemptions without chasing
              creators or manual reporting.
            </p>
          </div>

          <div className="relative z-1 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-11">
            <div className="absolute -top-1/2 right-0 left-0 -z-1 mx-auto h-full w-full opacity-80">
              <Image
                width={1200}
                height={400}
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="dark:hidden"
              />
              <Image
                fill
                src="/images/shape/shape-dotted-dark.svg"
                alt="Dotted"
                className="hidden dark:block"
              />
            </div>
            {brandFeatures.map((feature, index) => (
              <div key={index} className="flex">
                <NoiseBackground
                  gradientColors={["#b4dcff", "#ffffff", "#f0d2ff"]}
                  noiseIntensity={0.1}
                  speed={0.05}
                  containerClassName="rounded-[32px] p-[10px] shadow-sm h-full w-full"
                  className="h-full"
                >
                  <div className="dark:bg-blacksection flex h-full flex-col rounded-[22px] bg-white p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="text-primary">{feature.icon}</span>
                      <h3 className="text-xl font-bold tracking-wider text-black uppercase dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {feature.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-waterloo dark:text-manatee flex items-center gap-3 text-lg"
                        >
                          <span className="bg-primary/40 h-1.5 w-1.5 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </NoiseBackground>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCENTIVES THAT DRIVE REAL ACTION Section */}
      <section className="overflow-hidden pt-4 pb-10 lg:pt-6 lg:pb-20">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-[900px] text-center">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                INCENTIVES THAT DRIVE REAL ACTION
              </h4>
              <h2 className="relative mb-0 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Impressions don’t create behavior. <br />
                <span className="text-primary">Rewards do.</span>
              </h2>
            </div>

            <div className="relative mx-auto aspect-[16/7] w-full max-w-[1000px]">
              <Image
                src="/images/features/brands-rewards-at-scale.avif"
                alt="Incentives move people"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="mt-8 w-full max-w-[1000px]">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Column 1 */}
                <div>
                  <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                    Traditional marketing pays for attention and hopes for
                    action. Cluck flips that by tying spend to verified
                    participation and clear, real world outcomes.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Participation you can count
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Actions you can measure
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Communities that repeat
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Results that show up in the real world
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                    Cluck is built for the places people actually visit and talk
                    about. Local shops, studios, gyms, cafés, clinics, and
                    regional brands that want people to do something, not just
                    see something.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Post activity rewards that drive same day visits
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Event nights, pickups, and in store moments people plan
                        for
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-waterloo dark:text-manatee text-lg">
                        Repeat challenges that build weekly habits and repeat
                        business
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-16 text-center text-xl font-bold text-black dark:text-white">
                You are not buying reach. You are rewarding behavior with
                communities that show up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effort Level Section (Two Columns) */}
      <section className="relative overflow-hidden py-10 pb-15 lg:py-20">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          {/* Outer Shell (The thick translucent frame) */}
          <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl md:p-6 dark:bg-white/5">
            {/* Inner Container (The white surface) */}
            <div className="dark:bg-blacksection relative z-10 rounded-[32px] bg-white px-7.5 py-12.5 shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
              {/* Section Header */}
              <div className="mx-auto mb-16 max-w-[900px] text-center md:mb-24">
                <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                  PICK YOUR EFFORT LEVEL
                </h4>
                <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
                  Run it yourself, or let the ecosystem run it.
                </h2>
                <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
                  You can launch a brand challenge directly, or publish rewards
                  and let clubs, creators, and pros activate it with their
                  communities.
                </p>
              </div>

              <div className="relative z-1 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-11">
                <div className="absolute -top-1/2 right-0 left-0 -z-1 mx-auto h-full w-full opacity-80">
                  <Image
                    width={1200}
                    height={400}
                    src="/images/shape/shape-dotted-light.svg"
                    alt="Dotted"
                    className="dark:hidden"
                  />
                  <Image
                    fill
                    src="/images/shape/shape-dotted-dark.svg"
                    alt="Dotted"
                    className="hidden dark:block"
                  />
                </div>

                {/* Section 1: Run a challenge */}
                <div className="flex">
                  <NoiseBackground
                    gradientColors={["#b4dcff", "#ffffff", "#f0d2ff"]}
                    noiseIntensity={0.1}
                    speed={0.05}
                    containerClassName="rounded-[32px] p-[10px] shadow-sm h-full w-full"
                    className="h-full"
                  >
                    <div className="dark:bg-blacksection flex h-full flex-col rounded-[22px] bg-white p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="text-primary">
                          <Zap size={18} />
                        </span>
                        <h3 className="text-xl font-bold tracking-wider text-black uppercase dark:text-white">
                          Run a challenge
                        </h3>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div>
                          <h4 className="mb-3 text-sm font-bold tracking-widest text-black uppercase dark:text-white">
                            What you do
                          </h4>
                          <ul className="flex flex-col gap-3">
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Choose the action that matters: participate,
                              complete, visit, redeem
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Choose who it’s for: location, activity type,
                              skill level, club size, timing
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Choose what motivates: product, discount,
                              experience, access
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3 text-sm font-bold tracking-widest text-black uppercase dark:text-white">
                            What Cluck handles
                          </h4>
                          <ul className="flex flex-col gap-3">
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Distribution to the right communities
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Participation tracking and completion
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Reward delivery and redemption
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Reporting that shows what actually worked
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NoiseBackground>
                </div>

                {/* Section 2: Fund rewards */}
                <div className="flex">
                  <NoiseBackground
                    gradientColors={["#f0d2ff", "#ffffff", "#b4dcff"]}
                    noiseIntensity={0.1}
                    speed={0.05}
                    containerClassName="rounded-[32px] p-[10px] shadow-sm h-full w-full"
                    className="h-full"
                  >
                    <div className="dark:bg-blacksection flex h-full flex-col rounded-[22px] bg-white p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="text-primary">
                          <Users size={18} />
                        </span>
                        <h3 className="text-xl font-bold tracking-wider text-black uppercase dark:text-white">
                          Fund rewards and let others activate
                        </h3>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div>
                          <h4 className="mb-3 text-sm font-bold tracking-widest text-black uppercase dark:text-white">
                            What you do
                          </h4>
                          <ul className="flex flex-col gap-3">
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Add offers to your prize pool
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Set simple criteria for who can use them and when
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Approve the types of activations you want
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3 text-sm font-bold tracking-widest text-black uppercase dark:text-white">
                            What the ecosystem does
                          </h4>
                          <ul className="flex flex-col gap-3">
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Clubs run events and challenges
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Creators drive participation and content
                            </li>
                            <li className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg">
                              <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              Pros add programs that increase follow-through
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NoiseBackground>
                </div>
              </div>

              <div className="mt-12 text-center md:mt-16">
                <p className="text-waterloo dark:text-manatee text-lg font-medium">
                  Less outreach. More activations that perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards at Scale Section (Image Left) */}
      <section className="overflow-hidden py-10 pb-10 lg:py-10 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/sponsors.avif"
                alt="Rewards at scale"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                REWARDS AT SCALE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Build once.
                <br />
                <span className="text-primary">Activate everywhere.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Prize pools let you publish rewards once and apply them across
                challenges, communities, and regions without rebuilding
                campaigns every time.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer prizes, discounts, bundles, or experiences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Set eligibility by location, timing, participation level,
                      completion rules
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run limited drops, seasonal pushes, or ongoing offers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Reuse the same offers across clubs, creators, and pro-led
                      programs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Create challenges, fund rewards, reach communities, and
                      see what worked without juggling tools or workflows.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                One set of rewards. One system. Less noise. More signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Section (Image Left) */}
      <section className="overflow-hidden pb-10 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/brands-verification.avif"
                alt="Confidence without hassle"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                CONFIDENCE WITHOUT HASSLE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Know it happened. <br />
                <span className="text-primary">Then reward it.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck connects rewards to participation and completion so
                incentives feel earned and results are easier to trust.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Participants and completions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Redemptions and repeat participation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Event attendance and check-ins
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Multi-week consistency and retention
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Clear outcomes make smarter spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earned Attention Section (Image Right) */}
      <section className="overflow-hidden pb-10 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/brands-posting.avif"
                alt="Earned attention"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                EARNED ATTENTION
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                People share what they did, <br />
                <span className="text-primary">not what they saw.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Challenges and events naturally create photos, updates, and
                stories that spread because they’re part of the experience.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Community-driven posts tied to real participation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Creator-led moments that feel authentic
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Brand presence that feels additive, not interruptive
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                When the experience is real, the content writes itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-0 pb-24 lg:py-10">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          {/* Outer Shell (The thick translucent frame) */}
          <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl md:p-6 dark:bg-white/5">
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

              <div className="flex w-full justify-center">
                <div className="w-full max-w-[650px]">
                  <SignupForm
                    ctaText="Get early access"
                    description="Early access invites. No pressure. No spam."
                    pageName="brands"
                    initialInterests={["Brand"]}
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
