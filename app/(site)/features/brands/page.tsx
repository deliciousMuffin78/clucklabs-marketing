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
      <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/brands.avif"
            alt="Brands Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[23%] items-center justify-center px-4 text-center md:px-8 xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="text-primary mb-4.5 text-lg font-medium tracking-[4px] uppercase">
              Brands · Local Businesses · Sponsors · Partners
            </h4>
            <h1 className="text-primary mb-6 max-w-[900px] text-[4.1rem] leading-[1.1] font-bold">
              Get real people to show up. <br />
              Pay for outcomes, not ads.
            </h1>
            <p className="text-primary mb-10 max-w-[900px] text-xl md:text-2xl">
              Cluck turns movement into measurable action: visits,
              participation, redemptions, and repeat customers powered by clubs,
              creators, and pros. No upfront spend. You fund results when they
              happen.
            </p>

            <div className="rounded-[40px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-6 lg:p-8">
              <SignupForm
                pageName="brands"
                showInterests={false}
                descriptionClassName="text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 lg:py-32">
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

      {/* SMB Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/clubs-dashboard.avif"
                alt="Built for SMBs"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                BUILT FOR SMBS, TOO
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Not a global brand? <br />
                <span className="text-primary">Perfect.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck works for the places people actually visit and talk about:
                local shops, studios, clinics, cafés, and regional brands who
                want real action.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Local cafés, juice bars, and restaurants
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Gyms, studios, and wellness clinics
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run shops, bike shops, and specialty retail
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Regional and national brands
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                If your goal is real people doing something, get Cluck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incentives Section (Flipped Design) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/sponsors.avif"
                alt="Incentives move people"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                INCENTIVES MOVE PEOPLE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Impressions don’t create behavior. <br />
                <span className="text-primary">Rewards do.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Traditional marketing pays for attention and hopes for action.
                Cluck flips that by tying spend to verified participation and
                clear outcomes.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Participation you can count
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Actions you can measure
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Communities that repeat it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Content that comes from doing, not posing
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Designed for genuine participation at scale. You can’t automate
                effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effort Level Section (Two Columns) */}
      <section className="relative overflow-hidden py-20 lg:py-32">
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
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/leaderboard.avif"
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
                Build a bank of rewards <br />
                <span className="text-primary">that gets used.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Prize pools let you publish offers once and apply them across
                many challenges, communities, and regions without rebuilding
                every campaign.
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
                      Set eligibility: location, timing, participation level,
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
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                One set of rewards can power many campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storefront Section (Image Right) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/pro-clinic.avif"
                alt="Movement to storefront"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                MOVEMENT TO STOREFRONT
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Turn showing up <br />
                <span className="text-primary">into walking in.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck is ideal for SMBs because rewards can be tied to real
                participation and then redeemed locally.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Post-activity offers that drive visits the same day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Event nights, pickups, and in-store moments people plan
                      for
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Repeat challenges that build weekly habit and repeat
                      business
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You’re not buying reach. You’re rewarding behavior with the
                community that shows up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/lifestyle.avif"
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
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/sponsors.avif"
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

      {/* Simple, End to End Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/clubs-dashboard-sponsors.avif"
                alt="Simple, end to end"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                SIMPLE, END TO END
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Everything you need to run <br />
                <span className="text-primary">outcome-driven campaigns.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Create challenges, fund rewards, reach communities, and see what
                worked without managing a dozen tools.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Challenge creation and distribution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Prize pool management
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Club and creator activation paths
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Participation, completion, and redemption reporting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Clean setup that works for SMBs and scales for brands
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Less noise. More signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-32 lg:py-36">
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
