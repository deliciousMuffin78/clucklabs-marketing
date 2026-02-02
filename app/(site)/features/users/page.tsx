"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Users & Members - CluckLabs",
//   description: "Features for users and members on CluckLabs",
// };

const sportActivities = [
  {
    name: "Running",
    color: "#FF6B6B",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
      </svg>
    ),
  },
  {
    name: "Cycling",
    color: "#4ECDC4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "Walking",
    color: "#45B7D1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
      </svg>
    ),
  },
  {
    name: "Weight Lifting",
    color: "#96CEB4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
    ),
  },
  {
    name: "Golf",
    color: "#9B59B6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 16c-1.1 0-2-.9-2-2V4h4v10c0 1.1-.9 2-2 2zm0-16c-.55 0-1 .45-1 1h2c0-.55-.45-1-1-1zM5.5 21H5v1h14v-1h-.5c-.28 0-.5-.22-.5-.5V18h-2v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V18h-2v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V18H8v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V18H5v2.5c0 .28-.22.5-.5.5z"/>
      </svg>
    ),
  },
  {
    name: "Yoga",
    color: "#F39C12",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-1 16.5v-4.5H8.5c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5zm6 0v-4c0-.28-.22-.5-.5-.5H14v4.5c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5zM21 10h-5V8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2H8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5V14h3c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H14V9h2v1h5c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H3c-.55 0-1 .45-1 1s.45 1 1 1h4v3h10v-3h4c.55 0 1-.45 1-1s-.45-1-1-1z"/>
      </svg>
    ),
  },
];

export default function UsersPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Everyday people · Members · Individuals
              </h4>
              <h1 className="mb-5 pr-16 text-4xl font-bold text-black dark:text-white md:text-5xl xl:text-6xl ">
                Fitness that fits real life.
              </h1>
              <p>
                Not perfect schedules. Not guilt. Not starting over. Don't have
                a goal? Perfect. Cluck brings your activity, habits, and
                community into one adaptive system so you can keep making
                progress even when life gets busy, messy, or unpredictable.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get early access button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get early access
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Early access invites. No pressure. No spam.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mb-10 text-center">
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-black dark:text-white">
              ACTIVITIES
            </h4>
          </div>

          <div className="relative z-50 mx-auto max-w-c-1154">
            <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
              <Image
                width={1200}
                height={400}
                sizes="(max-width: 768px) 100vw"
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="dark:hidden"
                style={{ position: "static" }}
              />
              <Image
                fill
                src="/images/shape/shape-dotted-dark.svg"
                alt="Dotted"
                className="hidden dark:block"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {sportActivities.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <div
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-[10px] bg-white p-4 shadow-solid-7 dark:bg-btndark"
                    style={{ color: activity.color }}
                  >
                    {activity.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Cluck is Different Section */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                Why Cluck is different (and better)
              </span>
              <h2 className="relative mb-6 text-4xl font-bold text-black dark:text-white">
                You don't fail plans.
                <br />
                Plans fail to adapt.
              </h2>
              <p>
                Cluck is built around a simple idea: real life changes, your
                fitness app should too.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Miss a week. Travel. Get sick. Feel burned out.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Come back without punishment.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Progress continues.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                What you get
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                One connected wellness system.
              </h2>
              <p>Not a pile of apps that don't talk to each other.</p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Activity + habits, connected
                  </h3>
                  <p>
                    Activity, movement, habits, recovery, sleep, nutrition, and
                    context all connected.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Bring your existing data
                  </h3>
                  <p>Bring your existing data. No resets. No streak anxiety.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Track your way
                  </h3>
                  <p>
                    Track as much or as little as you want - Cluck still works.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community First Section */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                Community first
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                Because people don't quit people.
              </h2>
              <p className="mb-6">
                Most apps end on a screen. Cluck loops digital into real life.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Join clubs, challenges, and events.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Chat, show up, and move together.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Local, remote, casual, competitive - it all counts.</p>
                </div>
              </div>

              <p className="mt-7.5 font-medium text-black dark:text-white">
                Motivation comes from belonging, not pressure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="hidden dark:block absolute left-0 top-0 -z-1"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h4 className="mb-4 font-medium uppercase text-black dark:text-white">
              AI that works harder than you do
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Less deciding. More follow-through.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Cluck's AI looks at your real context (not just workouts) to help
              guide what actually makes sense next.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-[10px] bg-white p-4 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ECDC4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-black dark:text-white">
                What to do today (or skip)
              </h3>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-[10px] bg-white p-4 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F39C12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-black dark:text-white">
                When to push, when to rest
              </h3>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-[10px] bg-white p-4 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9B59B6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-black dark:text-white">
                How to adjust when life changes
              </h3>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mt-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mt-17.5"
          >
            <p className="text-lg font-medium text-black dark:text-white">
              No spreadsheets. No micromanaging. No guilt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built for Real Humans Section */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Built for real humans
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                Inclusive by design.
              </h2>
              <p>
                Cluck is made for people who don't see themselves in traditional
                fitness apps.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Beginners welcome.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Irregular schedules supported.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Adaptive for injuries, recovery, and setbacks.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <p>Safeguards for minors and supported participation.</p>
                </div>
              </div>

              <p className="mt-7.5 font-medium text-black dark:text-white">
                Progress is personal. Comparison is optional.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- Pricing Comparison Section --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h4 className="font-medium uppercase text-black dark:text-white">
              Free to start. Upgrade when you want more guidance.
            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-5xl">
              Get the full system for free.
              <br />
              Add horsepower when it helps.
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5">
              Cluck’s free plan isn’t a demo. It’s the full foundation:
              tracking, planning, and the tools to stay on track without turning
              fitness into homework. When you’re ready, Advanced adds the extra
              horsepower: always-on guidance, smarter planning, and support that
              adjusts in the moment.
            </p>
          </div>

          <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
              {/* <!-- Free Plan --> */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12.5"
              >
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Free includes (use Cluck fully):
                </h4>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Track workouts + daily activity
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Basic training plans + routines
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Nutrition logging
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Cycle tracking & health patterns
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Recovery + sleep basics
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Clubs, challenges, and events
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Progress insights (baseline)
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* <!-- Advanced Plan --> */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12.5"
              >
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Advanced adds (Cluck watches + adapts):
                </h4>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Real-time guidance (what to do today / adjust now)
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      AI coaching + “next best step” suggestions
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Dynamic planning as life changes
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Schedule optimization (time + recovery-aware)
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Always-on monitoring across key signals (as enabled)
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Deeper personalization across training, recovery, nutrition
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      “Feels like a team” level support without the overhead
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* <!-- Closing Line --> */}
            <div className="mt-10 text-center">
              <p className="text-lg font-medium text-black dark:text-white">
                Start free and build momentum. Upgrade when you want the extra
                horsepower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How People Start Section --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h4 className="font-medium uppercase text-black dark:text-white">
              How people usually start
            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-5xl">
              No restart buttons. No punishment loops.
            </h2>
            <p className="mx-auto md:w-3/5">
              Start simple. Stay flexible. Let Cluck adapt as life happens.
            </p>
          </div>

          <div className="mt-15 md:mt-20">
            <div className="relative flex flex-col justify-between gap-10 md:flex-row md:gap-4">
              {/* <!-- Vertical Line for Mobile --> */}
              <div className="absolute left-6 h-full w-0.5 bg-stroke dark:bg-strokedark md:hidden"></div>
              {/* <!-- Horizontal Line for Desktop --> */}
              <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-stroke dark:bg-strokedark md:block"></div>

              {/* <!-- Step 1 --> */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-1 flex-col items-center text-center md:items-center md:text-center"
              >
                <div className="flex w-full items-center gap-4 md:flex-col md:gap-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-solid-9">
                    1
                  </div>
                  <p className="px-2 text-left font-medium text-black dark:text-white md:mt-4 md:text-center">
                    Join Cluck (solo or with friends)
                  </p>
                </div>
              </motion.div>

              {/* <!-- Step 2 --> */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-1 flex-col items-center text-center md:items-center md:text-center"
              >
                <div className="flex w-full items-center gap-4 md:flex-col md:gap-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-solid-9">
                    2
                  </div>
                  <p className="px-2 text-left font-medium text-black dark:text-white md:mt-4 md:text-center">
                    Connect what you already use (or don’t - your choice)
                  </p>
                </div>
              </motion.div>

              {/* <!-- Step 3 --> */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-1 flex-col items-center text-center md:items-center md:text-center"
              >
                <div className="flex w-full items-center gap-4 md:flex-col md:gap-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-solid-9">
                    3
                  </div>
                  <p className="px-2 text-left font-medium text-black dark:text-white md:mt-4 md:text-center">
                    Participate at your pace
                  </p>
                </div>
              </motion.div>

              {/* <!-- Step 4 --> */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-1 flex-col items-center text-center md:items-center md:text-center"
              >
                <div className="flex w-full items-center gap-4 md:flex-col md:gap-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-solid-9">
                    4
                  </div>
                  <p className="px-2 text-left font-medium text-black dark:text-white md:mt-4 md:text-center">
                    Let Cluck adapt as life happens
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pledge Section --> */}
      <section className="bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-20 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center"
          >
            <h4 className="mb-4.5 font-medium uppercase text-black dark:text-white">
              One simple promise
            </h4>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-5xl">
              Cluck is here to support progress, not judge it.
            </h2>

            <div className="mx-auto mt-12.5 max-w-[700px]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-black dark:text-white">
                    If you move a little, that counts.
                  </p>
                </div>

                <div className="flex items-center gap-5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-black dark:text-white">
                    If you show up imperfectly, that still counts.
                  </p>
                </div>

                <div className="flex items-center gap-5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-black dark:text-white">
                    If you stop and come back - that counts too.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <!-- Final CTA Section --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 text-center dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 lg:py-15 xl:px-17.5 xl:py-20">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Ready to stop starting over?
            </h2>
            <p className="mx-auto mb-10 md:w-4/5 lg:w-3/5">
              Join Cluck and build a fitness rhythm that actually fits your life.
            </p>

            <div className="flex justify-center">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-center gap-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email address"
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <button
                    aria-label="get early access button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Get early access
                  </button>
                </div>
              </form>
            </div>
            <p className="mt-5 text-sm font-medium text-black dark:text-white">
              Early access invites. No pressure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
