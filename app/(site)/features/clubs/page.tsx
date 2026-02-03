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
} from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import { NoiseBackground } from "@/components/ui/noise-background";

// export const metadata = {
//   title: "Clubs & Communities | Cluck",
//   description: "The connected wellness system for real-life sports communities.",
// };

const clubFeatures = [
  {
    title: "Run the club",
    icon: <Users size={18} />,
    items: [
      "Club chat and announcements",
      "Member management",
      "Roles and visibility",
      "Payments and payouts",
    ],
  },
  {
    title: "Create experiences",
    icon: <Calendar size={18} />,
    items: [
      "Events and schedules",
      "Free or paid events",
      "Programs and plans",
      "Challenges with rewards",
    ],
  },
  {
    title: "Grow and monetize",
    icon: <TrendingUp size={18} />,
    items: [
      "Free and paid memberships",
      "Leaderboards and sharing",
      "Club shop",
      "Growth planning tools",
    ],
  },
];

export default function ClubsPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      {/* Club Hero */}
      <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero1.avif"
            alt="Club Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[15%] items-center justify-center px-4 text-center md:px-8 xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="mb-4.5 text-lg font-medium tracking-[4px] text-white uppercase">
              Clubs & Communities
            </h4>
            <h1 className="mb-6 max-w-[900px] text-[4.5rem] leading-[1.1] font-bold text-white">
              Run your club. <br />
              Grow your community. <br />
              <span className="text-primary">Get paid.</span>
            </h1>
            <p className="mb-10 max-w-[900px] text-xl text-white drop-shadow-sm md:text-2xl">
              Cluck brings your club’s communication, events, challenges,
              leaderboards, and programming into one place. Powered by member
              activity so it’s easier to organize, easier to grow, and easier to
              monetize. <br />
              Free to run. Built to grow with you.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-primary hover:bg-primaryho flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium text-white shadow-xl transition-all duration-300">
                Bring my club
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
              EVERYTHING YOUR CLUB NEEDS
            </h4>
            <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
              Tools that replace the chaos. <br className="hidden md:block" />
              Everything under one roof so your club runs itself.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              Cluck gives your club a single place to communicate, organize, and
              grow without juggling group chats, spreadsheets, and event links.
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
            {clubFeatures.map((feature, index) => (
              <div key={index} className="md:flex-1">
                <NoiseBackground
                  gradientColors={["#b4dcff", "#ffffff", "#f0d2ff"]}
                  noiseIntensity={0.1}
                  speed={0.05}
                  containerClassName="rounded-[32px] p-[10px] shadow-sm"
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
                EARN WITHOUT SELLING OUT
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Earn without changing <br />
                <span className="text-primary">who you are.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck helps clubs monetize through paid memberships, ticketed
                events, premium programs, and prize-based challenges, if you
                choose.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep your club free and still run everything smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Add paid options as you grow: paid membership tiers,
                      events, programs, challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer value members feel good paying for: coaching access,
                      structured plans, special sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Use built-in tools that make paid experiences simple to
                      run, not harder.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You bring the community. Cluck makes it easier to sustain.
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
                REWARDS THAT DRIVE SHOWING UP
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Bring sponsors in or find <br />
                <span className="text-primary">them inside Cluck.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Cluck makes it easy to run sponsor-backed prizes tied to real
                participation, with simple tools to manage rewards so your club
                can motivate members without extra admin.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Bring your own sponsors into Cluck or choose from
                      available sponsor prize offers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run prize-based challenges and events with rewards tied to
                      real participation and completion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep prizes organized in one place so it’s clear what’s
                      offered, when it runs, and who earned it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Show sponsors clear outcomes through visible
                      participation, progress, and completion.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                More participation for your members and a clearer win for
                sponsors.
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
                PURPOSE + PROGRESS POWERED BY MEMBER MOVEMENT
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Offer plans your members will pay for... because they asked for
                them.
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                When members use Cluck for training, leaderboards and activity
                insights update automatically so you can see what your club is
                actually doing and turn that into targeted programs like
                marathon prep, strength add-ons, mobility blocks, or beginner
                tracks as optional upgrades.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      See club leaderboards automatically with multiple views
                      for pace, distance, consistency, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Spot what members want through real activity patterns like
                      weekly volume, route preferences, and session types.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Build programs around real goals: 5K, half, marathon,
                      strength, consistency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Create special sessions for subsets of the club:
                      beginners, PR chasers, return-from-injury.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer premium programming without changing the club's free
                      vibe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep plans connected to the same community, schedule, and
                      accountability.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Fun is great. Purpose plus progress is how clubs grow.
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
                ADD PROS WITHOUT ADDING PAYROLL
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Need mobility help? <br />
                Strength programming? <br />
                <span className="text-primary">Nutrition guidance?</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                When your club needs more than a meetup, Cluck makes it easy to
                bring in the right coaches and specialists so you can offer
                better support without hiring or doing it all yourself.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Invite coaches and specialists for what your members
                      actually need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Add mobility, strength, form checks, recovery, or
                      nutrition support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Offer opt-in help so only the people who want it join in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run one-time clinics or recurring sessions without
                      changing your club’s vibe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep your club focused while members get more value.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You lead the community. Pros fill the gaps. Everyone wins.
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
                LOCAL FEEL, GLOBAL REACH
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Run a local club or build <br />
                <span className="text-primary">one without borders.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Members can show up in person, join a live run, or do it
                remotely and still count as part of the same moment because
                their activity, posts, and progress can flow into the club.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep remote members involved with leaderboards,
                      challenges, and club updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Run live meetups while remote members participate from
                      anywhere and still “count”.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Share photos, route notes, and wins in the same place so
                      everyone feels together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Organize chapters by city while keeping one shared club
                      identity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Bring the whole club behind the same cause, event, or
                      challenge across time zones.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                Same club. One feed. Bigger reach. Same energy. Members
                everywhere.
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
                BETTER FOR THEM, TOO
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Members don’t just join your club. They train inside it.
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Because members use Cluck for their own routine, the club
                becomes easier to participate in and more fun to stay connected
                to—before, during, and after every event or challenge.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      One app for training and club life: workouts, activity,
                      and community in the same place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      A live club feed: events, challenges, updates, photos, and
                      wins without hunting for links.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Leaderboards that make connection easy: see who’s showing
                      up and find “people like me”.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Clear momentum: progress that carries across sessions,
                      events, and challenges instead of resetting each week.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                When members feel involved and improving, they keep showing up.
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
                Ready to bring your club into Cluck?
              </h2>
              <p className="text-waterloo dark:text-manatee mx-auto mb-10 text-lg md:w-4/5 md:text-xl lg:w-3/5">
                Create your club, invite your members, and start showing up
                together—free to run from day one, with tools to grow, offer
                more, and earn when it fits.
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
                      Bring my club
                    </button>
                  </div>
                </form>
                <p className="text-primary text-sm font-medium tracking-wide uppercase">
                  Free to run. Built for real life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
