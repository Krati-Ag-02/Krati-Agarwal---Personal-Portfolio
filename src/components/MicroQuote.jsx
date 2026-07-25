/* Micro-quote chip — two variants:
   - "hand": loose Caveat handwriting with a wavy underline, like
     the moodboard's personal/branding quotes.
   - "mono": small bracketed JetBrains Mono box, like the
     moodboard's UI/UX quotes ("[ Details matter. ]").
   Colored via `color` (one of your CSS var names). */
export default function MicroQuote({
  text,
  variant = "hand",
  color = "clay",
  rotate = -2,
  className = "",
}) {
  return (
    <span
      className={`micro-quote micro-quote-${variant} ${className}`}
      style={{ "--mq-color": `var(--${color})`, "--mq-rotate": `${rotate}deg` }}
    >
      {text}
    </span>
  );
}

/* Curated quotes, grouped by theme — mix of adapted moodboard
   lines and new ones written to match. Pick freely, or add more
   in the same voice: short, plain-verb, no filler. */
export const QUOTES = {
  dev: [
    "Build. Break. Improve.",
    "Ship > perfect.",
    "One commit closer.",
    "Think. Build. Repeat.",
    "Small steps matter.",
    "Code with purpose.",
  ],
  uiux: [
    "Clarity wins.",
    "Function with elegance.",
    "Every pixel counts.",
    "Design with empathy.",
    "Less clutter, more impact.",
    "Consistency creates trust.",
  ],
  personal: [
    "Always creating.",
    "Curiosity drives me.",
    "Built with patience.",
    "Learning as I build.",
    "Ideas into interfaces.",
    "Still sketching this one.",
  ],
};