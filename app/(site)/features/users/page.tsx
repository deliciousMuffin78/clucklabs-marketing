"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Calendar,
  CheckCircle2,
  Search,
  Activity,
  Compass,
  Award,
  Heart,
  ChevronDown,
  Lock,
  BadgeCheck,
  Star,
  Trophy,
} from "lucide-react";
import MeshGradient from "@/components/Common/MeshGradient";
import { NoiseBackground } from "@/components/ui/noise-background";
import { AnimatePresence } from "framer-motion";
import SignupForm from "@/components/Common/SignupForm";

// export const metadata = {
//   title: "Clubs & Communities | Cluck",
//   description: "The connected wellness system for real-life sports communities.",
// };

const userFeatures = [
  {
    title: "EVENTS",
    subtitle: "Show up · Move together",
    headline: "Put it on the calendar. Then do it.",
    icon: <Calendar size={18} />,
    items: [
      "Join local or virtual meetups",
      "Commit to a time, not just a plan",
      "Real momentum comes from showing up",
    ],
  },
  {
    title: "CHALLENGES",
    subtitle: "Motivation · Goals · Fun",
    headline: "Make progress feel like a game.",
    icon: <Zap size={18} />,
    items: [
      "Simple challenges you can actually finish",
      "Solo or group - your pace still counts",
      "Progress you can see (and celebrate)",
    ],
  },
  {
    title: "SOCIAL",
    subtitle: "Friends · Clubs · Chat",
    headline: "Don’t do it alone.",
    icon: <Users size={18} />,
    items: [
      "Share wins, check in, and stay accountable",
      "Find people with similar goals and rhythm",
      "Consistency comes from belonging, not pressure",
    ],
  },
];

const peopleFeatures = [
  {
    title: "CLUBS",
    subtitle: "Local · Global · Together",
    headline: "Find your people. Keep showing up.",
    icon: <Users size={18} />,
    items: [
      "Find your pace: join clubs that match your style: casual, consistent, or competitive",
      "Show up together: train, meet up, and stay accountable with people like you",
      "Make it fun to stick with: events and challenges that turn consistency into something social",
    ],
  },
  {
    title: "PROS",
    subtitle: "Coaches · Trainers · Specialists",
    headline: "Coaching that fits your life.",
    icon: <Search size={18} />, // Need to import Search
    items: [
      "Support your way: one session, monthly coaching, or small-group help",
      "Get expert clarity fast: form checks, programming tweaks, recovery and nutrition guidance",
      "More personal when you want it: optional live data visibility during sessions for more hands-on coaching",
    ],
  },
];

const cluckActions = [
  {
    overlay: "Run | Walk | Cycle",
    subtitle: "Cardio · Distance · Endurance",
    headline:
      "Build endurance. Hit a goal. Go farther. Feel better. Stay injury-smart.",
    body: "Whether you’re training for a PR, building a healthy routine, or getting started from scratch, Cluck helps you move with structure and without overthinking.",
    bullets: [
      "Train with purpose: build endurance, speed, or consistency with clear sessions and weekly rhythm",
      "Stay injury-smart: warm-ups, cooldowns, mobility, and recovery cues that support sustainable progress",
      "Route + conditions aware: plan around weather, air quality, and time available (so you actually follow through)",
      "Fuel + recover better: hydration and nutrition support that connects to how you perform and feel",
      "Track the details that matter: shoes/gear, effort, and how your body responds over time",
    ],
    closer:
      "Life gets busy. Cluck helps you keep momentum without turning it into a restart.",
    image: "/images/features/user-run2.avif",
  },
  {
    overlay: "Train",
    subtitle: "Strength · Workouts · Plans",
    headline: "Get stronger safely, steadily, and with a plan that adapts.",
    body: "Whether you’re chasing muscle, performance, or pain-free movement, Cluck helps you train with structure that meets you where you are, and adjusts as your body and life change.",
    bullets: [
      "Train for your goal: strength, muscle, athletic performance, or mobility without a one-size-fits-all program",
      "Workouts that adapt: plans shift with your readiness and recovery so you push when it’s smart and back off when it’s not",
      "Form + injury prevention support: warm-ups, mobility, and progression that protect joints and keep you consistent",
      "Fuel training the right way: connect nutrition and recovery to results so you’re not “working hard” in the wrong direction",
      "Pro support when you want it: train with real coaches in-person or virtual, with the option for live data visibility for more personal guidance",
    ],
    closer:
      "Because the best results come from training that’s sustainable, not just intense.",
    image: "/images/features/user-train.avif",
  },
  {
    overlay: "FOUNDATION",
    subtitle: "Mobility · Core · Everyday Strength",
    headline:
      "Training for people who want to feel better, move better, and not fall apart.",
    body: "This is for moving through real life without chasing PRs or living in the gym. Build a body that supports you, not the other way around.",
    bullets: [
      "Build a durable base: mobility, core, stability, and strength that supports your whole body",
      "Move pain-free more often: routines designed to improve how you feel day-to-day, not just how you perform",
      "Stay consistent without burnout: realistic sessions you can actually stick with",
      "Support posture and joints: balance, range of motion, and control, especially if you sit a lot or feel “tight”",
      "Connect the whole system: see how movement, sleep, stress, and nutrition affect how your body shows up",
    ],
    closer: "Not training for sport - training for life.",
    image: "/images/features/users-foundation.avif",
  },
  {
    overlay: "SLEEP & WELLBEING",
    subtitle: "Sleep · Stress · Recovery · Habits",
    headline:
      "Feel better day to day. See what’s actually affecting your energy.",
    body: "Cluck connects your sleep, stress, recovery, and daily movement so you can spot the patterns behind “why today feels off” and build habits that actually improve energy, mood, and consistency.",
    bullets: [
      "Make sleep actionable: track your sleep and spot what helps (and what quietly wrecks your week)",
      "Connect the dots: link choices and routines to real outcomes - energy, mood, cravings, motivation, and training quality",
      "Stay stress-aware: quick check-ins that reveal how stress shows up in your body and behavior",
      "Recover with the right reset: rest, mobility, light movement, or an easier day based on how you’re actually doing",
      "Build habits that stick: hydration, wind-down, steps, and consistency without turning life into a checklist",
    ],
    closer:
      "When everything is connected, the signals get clear, and better days get easier to repeat.",
    image: "/images/features/user-wellbeing.avif",
  },
  {
    overlay: "NUTRITION",
    subtitle: "Food · Fuel · Recipes",
    headline: "Nutrition that learns you without making you track forever.",
    body: "Log everything if you love the details or log a little and let Cluck do the math. Either way, you get nutrition that actually supports your training, sleep, and energy… without the usual “I can’t keep up with this”.",
    bullets: [
      "Log your way: quick entries, imports, photos-to-meals, or nothing detailed when life is busy",
      "Less logging over time (optional): set a baseline, then let Cluck run on patterns until a quick check-in is useful again",
      "Beyond calories: macros and key micronutrients so nutrition supports energy, recovery, and consistency",
      "Eat for your goal like a real person: recipe ideas, meal prep, and smarter takeout/delivery options. Cheat days are part of the plan, with easy adjustments to stay on track with quick nudges like “take a walk” or “go lighter next meal”.",
      "Make food easier: recipes, meal prep, leftovers, and smart swaps, including family-friendly versions and allergy-aware tweaks without cooking two separate dinners",
    ],
    closer:
      "You don’t need perfect tracking - you need a system you can live with.",
    image: "/images/features/user-nutrition.avif",
  },
  {
    overlay: "CYCLE & PLANNING",
    subtitle: "Cycle · Hormones · Fertility",
    headline: "Record more than dates. Support your whole system.",
    body: "Cluck connects cycle and hormone patterns to sleep, training, recovery, nutrition, and stress so you can support your body with the right choices at the right time.",
    bullets: [
      "Use the full ecosystem: cycle-aware guidance for movement, recovery, sleep, and nutrition so symptoms don’t run your week",
      "Plan around real life: see patterns and prep ahead (energy dips, cravings, mood shifts) with simple, doable adjustments",
      "Beyond cycle: support for perimenopause/menopause and other hormone-driven changes (as available)",
      "Partner support (optional): shared planning for fertility goals so both partners can coordinate habits, timing, and health choices together",
      "Pregnancy modes: pre-, during-, and post-pregnancy support with safe movement, recovery, stress tools, and routines (as available)",
    ],
    closer:
      "You don’t have to do everything,small changes at the right time add up.",
    image: "/images/features/user-cycle.avif",
  },
];

const CluckActionRow = ({ action, index }: { action: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImageRight = index % 2 !== 0;

  return (
    <section className="py-5 md:py-20">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
        <div
          className={`flex flex-col items-center gap-8 md:flex-row lg:gap-32.5 ${
            isImageRight ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
            <Image
              src={action.image}
              alt={action.subtitle}
              fill
              className="rounded-2xl object-contain"
              unoptimized
            />
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h4 className="bg-zumthor text-primary mb-2 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
              {action.overlay}
            </h4>
            <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
              {action.subtitle}
            </p>
            <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
              {action.headline}
            </h2>
            <p className="text-waterloo dark:text-manatee mb-8 text-lg">
              {action.body}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary mx-auto flex w-fit items-center gap-2 text-sm font-bold tracking-widest uppercase transition-opacity hover:opacity-80 md:mx-0"
            >
              {isExpanded ? "Hide details" : "See details"}
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {action.bullets && (
                    <ul className="border-stroke dark:border-strokedark mt-8 flex flex-col gap-4 border-t pt-8">
                      {action.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg"
                        >
                          <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {action.closer && (
                    <p className="mt-10 text-lg font-medium text-black italic dark:text-white">
                      {action.closer}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function UsersPage() {
  return (
    <main>
      {/* User Hero */}
      <section className="relative h-[110vh] min-h-[700px] w-full overflow-hidden bg-white md:h-[100vh]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/users-app.avif"
            alt="User Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-c-1315 relative z-10 mx-auto flex h-full -translate-y-[28%] items-center justify-center px-4 pt-20 text-center md:-translate-y-[14%] md:px-8 md:pt-0 xl:-translate-y-[28%] xl:px-0">
          <div className="flex w-full flex-col items-center lg:w-4/5">
            <h4 className="mb-2 text-[0.8rem] font-medium tracking-[4px] text-white uppercase sm:text-[0.7rem] md:mb-4.5 md:text-[0.8rem] xl:text-[0.9rem]">
              Individuals · Members
            </h4>
            <h1 className="mb-3 max-w-[900px] text-3xl leading-[1.1] font-bold text-white md:mb-6 md:text-5xl xl:text-[4.5rem]">
              One app. Fewer guesses. <br />
              <span className="text-primary">Better days. Real life.</span>
            </h1>
            <p className="mb-5 max-w-[900px] text-base leading-[1.4] text-white drop-shadow-sm md:text-2xl lg:text-2xl xl:text-2xl">
              Cluck brings movement, recovery, food, sleep, and community
              together so you get clear signals and a smarter next step, even
              when life gets busy. Don’t have a goal? Perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Unified Signup Form Section - Below Header/Hero for all devices */}
      <section className="relative z-30 -mt-10 px-4 pb-10 md:-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[40px] border border-white/20 bg-white/90 p-1 shadow-2xl backdrop-blur-md md:p-2 lg:bg-white/95">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Form */}
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <SignupForm
                  ctaText="Get Early Access"
                  description="Early access invites. No spam."
                  showInterests={false}
                  pageName="users"
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

      {/* What you can do in Cluck Section Header */}
      <section className="pt-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <div className="mx-auto max-w-[900px] text-center">
            <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
              The App
            </h4>
            <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
              What you can do in Cluck
            </h2>
            <p className="text-waterloo dark:text-manatee mt-4 text-xl md:text-2xl">
              Cluck is for runners, walkers, and everyone in between.
            </p>
          </div>
        </div>
      </section>

      {cluckActions.map((action, index) => (
        <CluckActionRow key={index} action={action} index={index} />
      ))}

      {/* No Goal Section */}
      <section className="relative overflow-hidden py-10">
        <MeshGradient />
        <div className="max-w-c-1315 relative z-10 mx-auto px-4 md:px-8 xl:px-0">
          {/* Outer Shell */}
          <div className="rounded-[40px] border border-white/20 bg-white/30 p-4 shadow-xl backdrop-blur-xl md:p-6 dark:bg-white/5">
            {/* Inner Container */}
            <div className="dark:bg-blacksection relative z-10 rounded-[28px] bg-white px-7.5 py-12.5 text-center shadow-sm md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
              <h4 className="bg-zumthor text-primary md: text-lgfont-semibold mb-4 inline-block rounded-full px-4.5 py-1.5 text-sm tracking-[4px] uppercase md:text-xl dark:bg-white/10">
                Starting over · Starting fresh · Just starting
              </h4>
              <p className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
                Start with something you can do today.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
                Have no goal? Perfect.
              </h2>

              <p className="text-waterloo dark:text-manatee mx-auto mb-16 max-w-[800px] text-lg leading-relaxed md:text-xl">
                If you’re figuring it out as you go, you’re exactly who Cluck is
                for. Start with one small step today, and Cluck helps you turn
                that into momentum. Zero shame, zero pressure. Cluck keeps it
                simple and keeps you moving.
              </p>

              <div className="grid grid-cols-1 gap-10 text-left md:grid-cols-2 md:gap-12 lg:gap-20">
                {/* Column 1 */}
                <div className="flex flex-col gap-10">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Activity size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Any level counts:
                      </span>{" "}
                      from a 3-minute reset, to a short walk, to building a
                      weekly routine that sticks
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Award size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Build confidence fast:
                      </span>{" "}
                      small wins that stack: walks, mobility, basic strength,
                      easy cardio, whatever fits you
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Compass size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Get the next step, not a lecture:
                      </span>{" "}
                      “do this now” suggestions based on your time, energy, and
                      reality
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-10">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Heart size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Progress that feels good:
                      </span>{" "}
                      more energy, better sleep, less stress, stronger body
                      without needing to “be fit first”
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Users size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Stay consistent with people:
                      </span>{" "}
                      join a club or challenge so momentum comes from belonging,
                      not willpower
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Search size={20} />
                    </div>
                    <p className="text-waterloo dark:text-manatee leading-relaxed">
                      <span className="font-bold text-black dark:text-white">
                        Want real human help?
                      </span>{" "}
                      Work with coaches and pros when you want extra support
                      (virtual or in-person)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-[900px] text-center md:mb-24">
            <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
              Stay consistent
            </h4>
            <h2 className="mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
              Accountability that actually works: people.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              Cluck turns “I’ll do it tomorrow” into something you show up for -
              through events, challenges, and the people doing it with you.
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
            {userFeatures.map((feature, index) => (
              <div key={index} className="flex">
                <NoiseBackground
                  gradientColors={["#b4dcff", "#ffffff", "#f0d2ff"]}
                  noiseIntensity={0.1}
                  speed={0.05}
                  containerClassName="rounded-[32px] p-[10px] shadow-sm h-full w-full"
                  className="h-full"
                >
                  <div className="dark:bg-blacksection flex h-full flex-col rounded-[22px] bg-white p-8 text-left">
                    <div className="mb-6 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{feature.icon}</span>
                        <h3 className="text-xl font-bold tracking-wider text-black uppercase dark:text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                        {feature.subtitle}
                      </p>
                    </div>

                    <h4 className="mb-6 text-xl font-bold text-black dark:text-white">
                      {feature.headline}
                    </h4>

                    <ul className="flex flex-col gap-4">
                      {feature.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg"
                        >
                          <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
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

      {/* Continue Section (Image Left) */}
      <section className="relative overflow-hidden py-0 md:py-0">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto aspect-[588/526.5] w-full md:w-1/2">
              <Image
                src="/images/features/bring-data2.avif"
                alt="Continue where you left off"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="md:w-1/2">
              <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
                Continue where you left off
              </h4>
              <h2 className="relative mb-6 text-2xl leading-[1.2] font-bold text-black md:text-3xl lg:text-4xl dark:text-white">
                Bring your data. <br />
                <span className="text-primary">Keep your momentum.</span>
              </h2>
              <p className="text-waterloo dark:text-manatee mb-8 text-lg">
                Connect your trackers and apps to carry your history into Cluck
                so you keep progressing with better signals, smarter context,
                and less guesswork.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Keep your history: bring your existing data so you don’t
                      start over
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Connect your wearables: Apple Watch, Garmin, Oura, and
                      more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Better signals, better guidance: the more you connect, the
                      smarter Cluck gets
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      Track your way: detailed or simple - Cluck still keeps the
                      picture clear
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-waterloo dark:text-manatee">
                      You’re in control: choose what’s private, and what you
                      share (if anything)
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-lg font-medium text-black dark:text-white">
                You own your data. Cluck just makes it work harder for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When an App is Not Enough Section */}
      <section className="py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-[900px] text-center md:mb-24">
            <h4 className="bg-zumthor text-primary mb-4 inline-block rounded-full px-4.5 py-1.5 text-lg font-semibold tracking-[4px] uppercase dark:bg-white/10">
              When an app is not enough
            </h4>
            <h2 className="text-primary mb-6 text-2xl leading-[1.2] font-bold md:text-3xl lg:text-4xl">
              Get unstuck with real people.
            </h2>
            <p className="text-waterloo dark:text-manatee text-xl leading-relaxed md:text-[1.4rem]">
              When you hit a plateau, need accountability, want expert eyes on
              your form, or just want a real human to guide the next step -
              Cluck makes it easy to bring in the right support without starting
              over somewhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-11">
            {peopleFeatures.map((feature, index) => (
              <div key={index} className="flex h-full">
                <NoiseBackground
                  gradientColors={["#f0d2ff", "#ffffff", "#b4dcff"]}
                  noiseIntensity={0.1}
                  speed={0.05}
                  containerClassName="rounded-[32px] p-[10px] shadow-sm h-full w-full"
                  className="h-full"
                >
                  <div className="dark:bg-blacksection flex h-full flex-col rounded-[22px] bg-white p-8 text-left">
                    <div className="mb-6 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{feature.icon}</span>
                        <h3 className="text-xl font-bold tracking-wider text-black uppercase dark:text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                        {feature.subtitle}
                      </p>
                    </div>

                    <h4 className="mb-6 text-xl font-bold text-black dark:text-white">
                      {feature.headline}
                    </h4>

                    <ul className="flex flex-col gap-4">
                      {feature.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-waterloo dark:text-manatee flex items-start gap-3 text-lg"
                        >
                          <span className="bg-primary/40 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </NoiseBackground>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-waterloo dark:text-manatee text-sm font-medium">
              You control your data. Share what you want with a coach or club,
              nothing is shared by default.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Final CTA Section --> */}
      <section className="relative overflow-hidden py-20">
        <MeshGradient />
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

              <div className="flex w-full justify-center">
                <div className="w-full max-w-[650px]">
                  <SignupForm
                    ctaText="Get early access"
                    description="Early access invites. No pressure. No spam."
                    pageName="user"
                    initialInterests={["Individual"]}
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
