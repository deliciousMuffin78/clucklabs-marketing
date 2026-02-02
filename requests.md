This is a classic Framer Motion layout jitter problem, and you actually have three separate causes stacking on top of each other. The good news is this is very fixable, and once fixed the navbar will feel rock solid and premium.

I’ll break this into:

Why the jitter is happening

The exact root causes in your code

The fixes you should apply, with concrete code changes

A clean mental model so it does not come back later

1) Why this jitter is happening

Your navbar is animating layout affecting properties while its children are also flexing and centering.

Specifically:

You animate width between "100%" and "max-content"

You animate paddingLeft and paddingRight

You use justify-center and flex-1 inside

Framer Motion recalculates layout on every scroll tick

When the animation completes, the browser snaps to final layout

That produces:

Items getting clipped while width is shrinking

A visible “snap” at animation end

Logo shifting left or right when animation settles

This is not a bug in Framer Motion. It is a layout contract problem.

2) The concrete root causes in your code
Root cause A. Animating width to max-content

This is the biggest offender.

width: visible ? "max-content" : "100%",


max-content forces the browser to measure all children, then collapse to the minimum width needed. While that is happening, your last item “Brands” has no guaranteed room, so it gets clipped until the animation finishes.

This is why you see:

Brands almost outside

Then suddenly correct width

Root cause B. Padding animation + center justification

You animate padding:

paddingLeft: visible ? "2.5rem" : "1rem",
paddingRight: visible ? "2.5rem" : "1rem",


At the same time you have:

justify-center


When width and padding animate together, the center point shifts. That is why the logo jitters left when expanding.

Root cause C. NavItems uses flex-1 while container width is changing
className="flex flex-1 flex-row items-center justify-center"


flex-1 tells it to consume all available space, but the available space is itself animating. That causes internal reflow mid animation.

3) The correct fix strategy (important)

Rule:
Never animate width, padding, or max-content on a navbar that contains centered flex content.

Instead:

Keep width stable

Animate scale, background, blur, border radius

If you want a “shrinking” feel, fake it visually

This is how high end navbars do it.

4) Exact fixes you should apply
Fix 1. Lock width. Remove max-content entirely

Replace this in NavBody:

❌ Remove

width: visible ? "max-content" : "100%",
paddingLeft: visible ? "2.5rem" : "1rem",
paddingRight: visible ? "2.5rem" : "1rem",


✅ Use this instead:

scale: visible ? 0.92 : 1,


This creates the same visual shrink without layout reflow.

Fix 2. Let Tailwind handle padding statically

Keep padding stable so children never reflow.

Update className:

"mx-auto hidden lg:flex items-center justify-between 
 rounded-full py-2.5 px-6 max-w-c-1390"


Do not animate padding.

Fix 3. Remove flex-1 from NavItems

This is critical.

❌ Current

"flex flex-1 flex-row items-center justify-center"


✅ Replace with

"flex flex-row items-center justify-center"


If you want spacing control, use gap-x-*, not flex growth.

Fix 4. Use transform origin center

Add this to NavBody motion div:

style={{ transformOrigin: "center" }}


This ensures scale shrinks inward evenly and does not pull left or right.

Fix 5. Slow the spring slightly

Your spring is a little aggressive for a navbar.

Change transition to:

transition={{
  type: "spring",
  stiffness: 100,
  damping: 26,
}}


This removes the “snap” feeling.

5) Corrected NavBody code (drop-in)

Here is a clean, fixed version of your NavBody that will not jitter:

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.05)"
          : "none",
        scale: visible ? 0.92 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 26,
      }}
      style={{ transformOrigin: "center" }}
      className={cn(
        "relative mx-auto hidden lg:flex items-center justify-between 
         rounded-full py-2.5 px-6 max-w-c-1390
         border border-transparent transition-colors duration-500",
        visible
          ? "bg-white/80 border-stroke dark:bg-black/80 dark:border-strokedark"
          : "bg-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

6) Why this fixes everything

Width never changes, so no clipping

Padding never animates, so no horizontal jump

Scale is GPU accelerated and stable

Children layout is constant

Visual shrink still feels intentional and premium

This is exactly how Stripe, Linear, Vercel style navbars are built.

7) Optional refinement (nice but not required)

If you want the nav to feel slightly tighter when shrunk without padding animation, you can reduce gap between items using class toggles:

visible ? "gap-4" : "gap-6"


Gap changes do not cause the same jitter as width and padding.