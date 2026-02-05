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

const creatorFeatures = [
  {
    title: "Challenge Engine",
    icon: <Zap size={18} />,
    items: [
      "Paid challenges: set entry fees tied to participation and completion",
      "Formats that convert: distance, streaks, milestones, teams, and meetups",
      "Prize pools: pick funded rewards that fit your audience, or bring your own",
      "Built in verification: keep wins fair so people trust the results",
      "Recurring cadence: run weekly or monthly drops so momentum builds",
      "Automated payouts: winners, prizes, and payouts handled without manual work",
    ],
  },
  {
    title: "Monetization Stack",
    icon: <CreditCard size={18} />,
    items: [
      "Programs and experiences: cohorts, series, workshops, premium sessions",
      "Plans at scale: sell repeatable training, nutrition, and recovery plans",
      "Memberships and subscriptions: recurring value for your core community",
      "Sponsor backed rewards: brand funded prizes that improve conversion",
      "Performance tracking: see what drove signups, participation, and paid conversion",
      "2 year referrals: earn for up to 2 years while a referred member stays subscribed",
    ],
  },
  {
    title: "Content Distribution",
    icon: <Layout size={18} />,
    items: [
      "Create in app: posts with images and media connected to what you are running",
      "Scheduling: plan launches, reminders, and recap posts ahead of time",
      "Expiring drops: time bound promos and limited releases that stay clean",
      "Smart links: posts stay tied to the exact challenge, program, or offer",
      "Share out: publish to IG, TikTok, Facebook while Cluck stays the home base",
      "Measurement loop: track which content turned attention into action",
    ],
  },
];

export default function CreatorsPage() {
  return (
    <main>
      {/* Creators Hero */}
      <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/creators.avif"
            alt="Creators Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[23%] items-center justify-center px-4 text-center md:px-8 xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="text-primary mb-4.5 text-lg font-medium tracking-[4px] uppercase">
              Creators · Influencers · Community Leaders
            </h4>
            <h1 className="text-primary mb-6 max-w-[900px] text-[3.8rem] leading-[1.1] font-bold">
              Turn attention into momentum. <br />
              Turn momentum into income.
            </h1>
            <p className="text-primary mb-10 max-w-[900px] text-xl md:text-2xl">
              Cluck helps you run challenges, drop programs, and build a
              community people actually show up for, while signups,
              verification, prizes, payments, and payouts happen in one place.
              Free. Cluck earns when you do.
            </p>

            <div className="rounded-[40px] border border-black/7 bg-black/7 p-4 backdrop-blur-sm md:p-6 lg:p-8">
              <SignupForm
                pageName="creators"
                showInterests={false}
                descriptionClassName="text-primary/70"
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
              EVERYTHING YOUR CREATOR BUSINESS NEEDS
            </h4>
            <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
              Tools that turn attention into action.{" "}
              <br className="hidden md:block" />
              Everything under one roof so your community actually shows up.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              Cluck gives you one place to run challenges, sell programs, reward
              participation, and get paid cleanly without link chaos, manual
              tracking, or payout headaches.
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
            {creatorFeatures.map((feature, index) => (
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

      {/* Modern Club Management Section (Copied from About Design) */}
      <section className="overflow-hidden pb-20 lg:pb-20">
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
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                ACTION BEATS IMPRESSIONS
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Most platforms reward views. <br />
                <span className="text-primary">
                  Cluck rewards follow-through.
                </span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                If people move because of you, Cluck turns that participation
                into durable momentum you can repeat, measure, and earn from.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Your work ranks by how well it performs, not likes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Users show up when they actually need your guidance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Engagement is backed by real participation, not just a
                      scroll
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Less algorithm surface area, more community depth
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Attention fades. Participation compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Sponsors Section */}
      <section className="overflow-hidden pb-20 lg:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-12">
            <div className="relative mx-auto aspect-[588/526.5] w-full max-w-[800px]">
              <Image
                src="/images/features/creators-run-the-business.avif"
                alt="More than one payday"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="w-full max-w-[900px]">
              <div className="mb-12 text-center">
                <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                  MORE THAN ONE PAYDAY
                </h4>
                <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                  Earn from what your community does, not just what they watch.
                </h2>
                <p className="text-waterloo dark:text-manatee mx-auto max-w-[700px] text-lg">
                  Cluck turns participation into durable income, so one moment
                  of attention can compound into long term value.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-15 gap-y-8 md:grid-cols-2">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Paid challenges with entry fees tied to participation and
                      completion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Programs and experiences like cohorts, series, workshops,
                      and premium sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Plans at scale for training, nutrition, recovery, or
                      habits
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Memberships and subscriptions for your core community
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Sponsor backed prizes that increase conversion without
                      forced promos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Long tail referrals with affiliate payouts while members
                      stay subscribed
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-12 text-center text-lg font-medium text-black dark:text-white">
                Durable earnings beat one-off posts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Section (Image Right) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/creators.avif"
                alt="Content Hub"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                YOUR CONTENT HUB
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Create in Cluck, <br />
                <span className="text-primary">then publish out.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Make Cluck your home base for content that drives action, then
                share to platforms like IG, TikTok, and Facebook without
                bouncing between tools.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Create posts with images and media directly in-app
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Schedule posts ahead of time for launches, reminders, and
                      recap content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Set expirations for time-bound promos and limited drops
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep posts connected to the exact challenge, program, or
                      link you are promoting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Track what content drove signups, participation, and paid
                      conversions
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Less posting chaos. More measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/momentum-that-stacks.avif"
                alt="Momentum that stacks"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                MOMENTUM THAT STACKS
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Challenges are the start, <br />
                <span className="text-primary">not the finish.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Challenges build trust fast. That trust unlocks repeat
                participation, deeper offers, and income that compounds.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Launch challenges people understand and actually finish
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run recurring formats that build habits and return
                      behavior
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Turn completed challenges into programs, plans, and
                      memberships
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Improve offers over time using real performance data
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Unlock sponsor upgrades once traction is proven
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You build once. Momentum compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Ops Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/clubs-cockpit.avif"
                alt="Run the business, not the scramble"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                RUN THE BUSINESS, NOT THE SCRAMBLE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Payments, delivery, and <br />
                <span className="text-primary">
                  payouts handled inside Cluck.
                </span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Run your community without link chaos, platform hopping, or
                manual follow-ups.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Manage community chat, updates, and announcements in one
                      place
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Sell access to challenges, programs, memberships, and
                      plans in a single flow
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Track real participation so you know what worked and what
                      did not
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Handle payments and payouts cleanly without spreadsheets
                      or side tools
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Creators do not just post. They move people.
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
                    pageName="creators"
                    initialInterests={["Creator"]}
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
