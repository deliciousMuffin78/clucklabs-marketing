What this border actually is

This is a two layer container, not a border property.

Layer 1. Outer shell (the border)

Shape: rounded rectangle or pill

Thickness: thick, around 8 to 14px visually

Fill: soft gradient, not solid

Opacity: semi translucent

Blur: very subtle, almost imperceptible

Purpose: this is the border itself

Layer 2. Inner surface (the card)

Shape: same radius, slightly smaller

Fill: pure white

No gradient

No noise

Clean and flat

The border is not drawn.
It is revealed by spacing between the two layers.

Border gradient characteristics (important)

The gradient you want is:

Direction: left to right

Start color: cool pastel blue

Middle: almost white

End color: soft lavender or pink

Saturation: low

Contrast: low

Alpha: around 60 to 80 percent

It should feel like frosted glass light, not color paint.

Example color feel (descriptive)

Left: icy sky blue

Center: milky white

Right: pale lavender blush

No harsh stops. No visible bands.

Why your current approach cannot produce this

Noise backgrounds and animated borders fail here because:

Noise breaks edge clarity

Animation adds visual tension

Border becomes busy instead of elegant

This effect is static, calm, editorial.

Correct structural model (this is the key)

Think of it like this:

Outer container = gradient shell

Padding = border thickness

Inner container = white card

The gradient lives only in the outer container background.

The inner card covers the center, leaving only the edges visible.

That is how the pill button works in your screenshot.

Exact visual rules to follow

Use these rules and it will look right immediately.

Outer container

Rounded radius: very high, always larger than inner

Background: linear gradient, pastel

No shadow or only extremely soft ambient shadow

No noise

No animation

Inner container

Radius: outer radius minus border thickness

Background: pure white

Slight shadow optional

Content lives here

Why this works visually

Edges look intentional and smooth

Border reads as light, not color

Card feels premium and modern

Matches Framer, Linear, Notion style systems

This is exactly how that pill button is constructed.

One sentence mental model

You are not styling a border.
You are placing a white card inside a translucent gradient shell.

If you want, next I can:

Give you exact hex values that match the screenshot

Help you tune radius and thickness for desktop vs mobile

Explain how to adapt this for dark mode without losing the effect

EXAMPLE> 
import { cn } from "@/lib/utils";
import { NoiseBackground } from "@/components/ui/noise-background";

export function NoiseBackgroundDemoSecond() {
  return (
    <div className="mx-auto max-w-sm">
      <NoiseBackground
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}
      >
        <Card>
          <img
            src="https://assets.aceternity.com/blog/how-to-create-a-bento-grid.png"
            alt="Task Complete"
            className="h-60 w-full rounded-lg object-cover"
          />
          <div className="px-4 py-2">
            <h3 className="text-left text-lg font-semibold text-balance text-neutral-800 dark:text-neutral-200">
              How to create a bento grid with Tailwind
            </h3>
            <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
              Learn how to create a bento grid with Tailwind CSS, Next.js and
              Framer Motion.
            </p>
          </div>
        </Card>
      </NoiseBackground>
    </div>
  );
}

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-80 flex-col overflow-hidden rounded-lg bg-white text-center dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};
