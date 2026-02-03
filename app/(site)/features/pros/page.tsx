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

// export const metadata = {
//   title: "Clubs & Communities | Cluck",
//   description: "The connected wellness system for real-life sports communities.",
// };

const proFeatures = [
  {
    title: "Coaching Delivery",
    icon: <Activity size={18} />,
    items: [
      "Client threads: messages, files, and context in one place",
      "Plans and playbooks: publish training, nutrition, mobility, recovery, and update anytime",
      "Programs and cohorts: run group blocks with participation and progress visibility",
      "Progress and outcomes: adherence, momentum, trends, and what is actually moving the needle",
      "Full signal view: training, nutrition, sleep, recovery, readiness, and key client metrics in one place",
      "AI plan support: smart suggestions to adjust sessions and plans as signals change",
    ],
  },
  {
    title: "Business Operations",
    icon: <Briefcase size={18} />,
    items: [
      "Scheduling and bookings: 1:1 sessions, series, recurring slots, clean confirmations",
      "Services menu: list formats, specialties, availability, and pricing options",
      "Packages and subscriptions: one time sessions, bundles, or ongoing support tiers",
      "Delivery in one flow: booking, chat, notes, plan access, and follow ups stay connected",
      "Payments and payouts: tracked earnings across all services with clean records",
      "Client access controls: choose what clients share and what you can view",
    ],
  },
  {
    title: "Discovery",
    icon: <Search size={18} />,
    items: [
      "Pro profile: what you solve, who you are best for, how you coach",
      "Discovery and matching: get suggested based on needs, goals, and fit, not popularity",
      "Club invites and clinics: get brought in for specific specialties (strength, nutrition, etc)",
      "Partner with other pros: team up with specialists inside the app",
      "Shared delivery: co-manage clients or programs for higher value bundles",
      "Reputation through outcomes: build trust through consistency and results",
      "Referrals and warm intros: get recommended by clients",
    ],
  },
];

export default function ProsPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      {/* Pros Hero */}
      <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero2.avif"
            alt="Pros Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[23%] items-center justify-center px-4 text-center md:px-8 xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="mb-4.5 text-lg font-medium tracking-[4px] text-white uppercase">
              Coaches · Trainers · Nutritionists · Specialists
            </h4>
            <h1 className="mb-6 max-w-[900px] text-[4.1rem] leading-[1.1] font-bold text-white">
              You don’t need to be famous. You need to be good.
            </h1>
            <p className="mb-10 max-w-[900px] text-xl text-white drop-shadow-sm md:text-2xl">
              Cluck helps pros deliver better outcomes, get discovered by the
              right people, and earn across coaching, programs, and plans
              without living on content and algorithms. <br/>Free to join. We earn
              when you earn.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-primary hover:bg-primaryho flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium text-white shadow-xl transition-all duration-300">
                List my services
              </button>
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
              EVERYTHING A PRO NEEDS
            </h4>
            <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
              Everything in one place so coaching <br className="hidden md:block" />
              stays the work, not the workflow.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              Cluck gives you a single home for delivery, communication,
              scheduling, progress, and payouts so you can coach with clarity
              without juggling apps, links, and admin.
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
            {proFeatures.map((feature, index) => (
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
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                RESULTS RISE HERE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Great coaching shouldn’t <br />
                <span className="text-primary">get buried under noise.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                On Cluck, pros stand out through outcomes, consistency, and fit
                so the work that helps people actually gets seen and chosen.
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
                      Users find you when they actually need your skill
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Coaching is backed by real context, not guesswork
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Less marketing hustle, more craft
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                If you care about results, you’ll feel at home.
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
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                YOUR STYLE, SUPPORTED
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Coach how you already coach, <br />
                <span className="text-primary">with more clarity.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Whether you work 1:1, in groups, or through plans, Cluck gives
                you the tools to deliver, track progress, and keep everything in
                one place.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      1:1 coaching: remote or in-person, with real-time
                      streaming data and insights during sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Single sessions and subscriptions: offer one-time bookings
                      or ongoing coaching subscriptions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Group programs: cohorts, seasonal blocks, or ongoing
                      groups with clear participation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Plans and playbooks: publish your best work for clients or
                      for the broader community
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Scheduling and communication: chat, booking, and session
                      flow in the same place
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Less back-and-forth. More coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose + Progress Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/leaderboard.avif"
                alt="Purpose + Progress"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                ALMOST LIKE YOU’RE THERE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Remote coaching that <br />
                <span className="text-primary">finally feels real.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                When clients choose to share live activity and signals during a
                session, coaching remotely feels almost like you’re there with
                them so you can guide the moment, not just review it later.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      See patterns behind stalls, missed weeks, and overdoing it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Adjust in the moment or based on readiness and recovery
                      cues when effort is off, form breaks down, or pace drifts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Catch the “too much” days early and steer clients toward
                      smarter choices
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run virtual sessions with optional live visibility when it
                      helps
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Stay personal without extra admin, screenshots, or
                      back-and-forth
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Better context makes better coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Pros Section (Image Right) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/pro-clinic.avif"
                alt="Add Pros"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                SCALE WITHOUT BURNING OUT
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Turn your best work into <br />
                <span className="text-primary">repeatable results.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Create programs and plans once, improve them over time, and let
                the work spread based on performance and outcomes.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Publish training, nutrition, recovery, or mobility plans
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      See what gets used and what drives progress
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Improve what works and update it without starting over
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Reach beyond your own client roster without chasing
                      attention
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Your best work should reach more people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local feel, global reach Section (Image Left) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/lifestyle.avif"
                alt="Local feel, global reach"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                FIT OVER CLOUT
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                People find you <br />
                <span className="text-primary">when they need you.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck connects users and pros based on real needs and goals so
                discovery feels like a match, not a popularity contest.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Be suggested for the problems you actually solve
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Show up for users looking for your exact specialty
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Build a reputation through consistency and outcomes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Spend less time marketing and more time helping
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You don’t need followers. You need fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Better for them, too Section (Image Right) */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/members.avif"
                alt="Better for them, too"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                A BIGGER ECOSYSTEM
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Support clubs without <br />
                <span className="text-primary">doing everything yourself.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Clubs can invite pros for clinics, series, and specialty support
                and Cluck can recommend the right pros based on what members are
                doing and asking for.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Lead clinics for form, mobility, strength add-ons,
                      recovery, nutrition, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Get brought in when a club’s members need your skill
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer opt-in support that adds value without changing the
                      club’s vibe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Grow your client pipeline through real communities, not
                      ads
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Clubs stay focused. Members get better. Pros stay busy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Revenue Section (Image Left) --> */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/lifestyle.avif"
                alt="Revenue"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                REVENUE THAT MATCHES REAL VALUE
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                More ways to earn, <br />
                <span className="text-primary">
                  without becoming a salesperson.
                </span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck supports multiple revenue paths with pricing you control,
                and keeps delivery, payments, and payouts simple with no cost to
                start.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Free to join. We only earn when you earn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer free and paid services side by side
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Earn through coaching, programs, plans, and specialty
                      sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Get rewarded when your work drives participation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep everything tracked in one place, including payouts
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Your craft stays the focus. The business stays clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sponsorships Section (Image Right) --> */}
      <section className="overflow-hidden pb-20 lg:pb-32">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/sponsors.avif"
                alt="Aligned sponsorships"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                ALIGNED SPONSORSHIPS
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Get paid for impact, <br />
                <span className="text-primary">not promotion.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Brands can support programs and challenges tied to real
                participation so you can stay credible while members get extra
                motivation.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run sponsor-backed programs that fit your standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Tie rewards to participation and completion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep incentives organized without extra admin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Stay the expert while brands support the outcomes
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Protect your integrity and still get paid well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Final CTA Section --> */}
      <section className="relative overflow-hidden py-32 lg:py-36">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          {/* Outer Shell (The thick translucent frame) */}
          <div className="rounded-[48px] border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl md:p-6 dark:bg-white/5">
            {/* Inner Container (The white surface) */}
            <div className="dark:bg-blacksection relative z-10 rounded-[32px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                Turn your expertise into a scalable machine.
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto mb-10 text-lg md:w-4/5 md:text-xl lg:w-3/5">
                Stop fighting with manual messages and multiple apps. Start
                coaching with the tool built to help professional coaches grow
                higher, faster, and better.
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
                      Start Coaching
                    </button>
                  </div>
                </form>
                <p className="text-primary text-sm font-medium tracking-wide uppercase">
                  Launch in minutes. Scale for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
