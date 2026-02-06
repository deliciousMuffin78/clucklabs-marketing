"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { signup } from "@/lib/signup";
import { toast } from "react-hot-toast";

interface SignupFormProps {
  initialInterests?: string[];
  ctaText?: string;
  description?: string;
  showInterests?: boolean;
  pageName?: string;
  descriptionClassName?: string;
  layout?: "default" | "compact";
}

export default function SignupForm({
  initialInterests = [],
  ctaText = "Get early access",
  description = "Early access invites. No spam.",
  showInterests = true,
  pageName = "homepage",
  descriptionClassName = "text-primary",
  layout = "default",
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>(initialInterests);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const interestsList = ["Individual", "Club", "Pro", "Creator", "Brand"];

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await signup({
        email,
        interests: interests.length > 0 ? interests : ["general"],
        source: `clucklabs - ${pageName}`,
      });
      setStatus("success");
      setEmail("");
      toast.success("Thanks for signing up!");
    } catch (error) {
      console.error("Signup error:", error);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center ${
          layout === "compact" ? "py-4" : "py-10"
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-full bg-green-100 text-green-600 ${
            layout === "compact" ? "mb-2 h-10 w-10" : "mb-4 h-16 w-16"
          }`}
        >
          <svg
            className={layout === "compact" ? "h-5 w-5" : "h-8 w-8"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className={`font-bold text-black dark:text-white ${
            layout === "compact" ? "text-lg" : "text-2xl"
          }`}
        >
          You're on the list!
        </h3>
        <p
          className={`text-waterloo dark:text-manatee mt-1 ${
            layout === "compact" ? "text-sm" : ""
          }`}
        >
          {layout === "compact"
            ? "We'll be in touch."
            : "We'll be in touch soon with your early access invite."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary mt-2 text-xs font-medium hover:underline"
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col ${
        layout === "compact"
          ? "items-center gap-3 md:items-start"
          : "items-center gap-5"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full ${
          layout === "compact"
            ? "max-w-full"
            : showInterests
            ? "max-w-[650px]"
            : "max-w-[500px]"
        }`}
      >
        <div
          className={`flex flex-col ${
            !showInterests ? "gap-4 sm:flex-row" : "gap-6"
          }`}
        >
          {!showInterests ? (
            <div
              className={`group flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:border-3 sm:bg-white sm:p-0 dark:bg-black/30 ${
                layout === "compact"
                  ? "sm:border-2 sm:p-0.5"
                  : "sm:border-3 sm:p-0"
              } sm:focus-within:border-primary/70 sm:dark:border-white/30 sm:dark:bg-black/30`}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
                disabled={status === "loading"}
                className={`border-primary/30 focus:border-primary flex-1 rounded-full border-2 bg-white text-black placeholder:text-black/60 focus:outline-hidden sm:border-none sm:bg-transparent dark:border-white/30 dark:bg-black dark:text-white dark:placeholder:text-white/70 sm:dark:bg-transparent ${
                  layout === "compact"
                    ? "px-5 py-3.5 text-base sm:px-4 sm:py-3"
                    : "px-6 py-4 text-base sm:px-4 sm:py-2"
                }`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`bg-primary hover:bg-primaryho flex items-center justify-center rounded-full font-medium whitespace-nowrap text-white shadow-md transition-all duration-300 ${
                  layout === "compact"
                    ? "px-8 py-3.5 text-base sm:py-3"
                    : "px-10 py-4 text-lg sm:py-3"
                }`}
              >
                {status === "loading" ? "..." : ctaText}
              </button>
            </div>
          ) : (
            <>
              {showInterests && (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl font-bold tracking-[1px] text-[#d11764] uppercase">
                    Select your interests:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {interestsList.map((interest) => {
                      const isSelected = interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          disabled={status === "loading"}
                          className={`flex items-center gap-2 rounded-full px-5.5 py-2.5 text-lg font-medium transition-all duration-200 ${
                            isSelected
                              ? "text-white"
                              : "bg-zumthor text-primary hover:bg-zumthor/80 dark:bg-white/10 dark:text-white"
                          }`}
                          style={
                            isSelected ? { backgroundColor: "#d11764" } : {}
                          }
                        >
                          {interest}
                          {isSelected && <X size={14} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="border-primary/30 focus:border-primary flex-1 rounded-full border-2 bg-white px-6 py-4 text-black placeholder:text-black/60 focus:outline-hidden dark:border-white/30 dark:bg-black dark:text-white dark:placeholder:text-white/70"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`bg-primary hover:bg-primaryho flex w-full items-center justify-center rounded-full text-lg font-medium whitespace-nowrap text-white shadow-md transition-all duration-300 ${
                  !showInterests ? "px-10 py-4" : "w-full py-6"
                }`}
              >
                {status === "loading" ? "Processing..." : ctaText}
              </button>
            </>
          )}
        </div>
      </form>
      {description && (
        <p
          className={`${descriptionClassName} text-center text-sm font-medium tracking-wide uppercase md:text-left`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
