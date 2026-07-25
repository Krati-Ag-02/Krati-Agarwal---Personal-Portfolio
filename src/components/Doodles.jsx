/* A library of hand-drawn-style SVG doodles. Every doodle takes
   `color` (one of your CSS var names: "sage" | "clay" | "slate" |
   "ochre" | "text-soft" | "glass-border-strong" etc.) and renders
   using currentColor, resolving through var(--{color}). */

const wrap = (color) => ({ color: `var(--${color})` });

export function ArrowDoodle({ color = "clay", size = 50, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size * 0.6}
      viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 30 C 20 8, 38 6, 54 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 9 L55 14 L46 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CurvedArrowDoodle({ color = "sage", size = 50, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8 C 4 26, 18 40, 40 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 30 L41 34 L38 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function SparkleDoodle({ color = "ochre", size = 26, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 C12.6 8, 14 9.4, 20 10 C14 10.6, 12.6 12, 12 18 C11.4 12, 10 10.6, 4 10 C10 9.4, 11.4 8, 12 2Z"
        fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function StarDoodle({ color = "clay", size = 22, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 L14.5 9.5 L21 10.2 L16 14.6 L17.5 21 L12 17.4 L6.5 21 L8 14.6 L3 10.2 L9.5 9.5 Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function ScribbleCircleDoodle({ color = "slate", size = 46, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="23" cy="23" rx="17" ry="13" stroke="currentColor" strokeWidth="1.6" transform="rotate(-6 23 23)" />
      <ellipse cx="24" cy="22" rx="15" ry="11.5" stroke="currentColor" strokeWidth="1.6" transform="rotate(4 24 22)" opacity="0.7" />
    </svg>
  );
}

export function DashedPathDoodle({ color = "glass-border-strong", width = 90, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={width} height="30"
      viewBox={`0 0 ${width} 30`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M2 24 C ${width * 0.3} 2, ${width * 0.6} 30, ${width - 8} 6`}
        stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" fill="none" />
      <path d={`M${width - 16} 2 L${width - 2} 6 L${width - 12} 14`}
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CurlyDividerDoodle({ color = "glass-border-strong", width = 130, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={width} height="18"
      viewBox={`0 0 ${width} 18`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d={`M14 9 Q ${width * 0.3} 1, ${width * 0.5} 9 T ${width - 14} 9`}
        stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx={width - 7} cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PushpinDoodle({ color = "ochre", size = 26, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="5" fill="currentColor" opacity="0.92" />
      <path d="M12 13 L12 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function DoubleUnderlineDoodle({ color = "clay", width = 90, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={width} height="14"
      viewBox={`0 0 ${width} 14`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="4" x2={width - 2} y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="11" x2={width - 10} y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PlusCrossDoodle({ color = "sage", size = 20, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TerminalDoodle({ color = "slate", size = 44, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size * 0.7}
      viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="41" height="27" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10 L12 15 L6 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="16" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CodeBracketsDoodle({ color = "clay", size = 40, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size * 0.7}
      viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2 C10 2, 10 8, 6 8 C10 8, 10 12, 6 14 C10 16, 10 20, 6 20 C10 20, 10 26, 15 26"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M25 2 C30 2, 30 8, 34 8 C30 8, 30 12, 34 14 C30 16, 30 20, 34 20 C30 20, 30 26, 25 26"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LightningDoodle({ color = "ochre", size = 24, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2 L5 14 L11 14 L9 22 L19 9 L13 9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function GitBranchDoodle({ color = "sage", size = 36, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="30" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="28" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9 L8 27" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 15 C 8 18, 22 15, 25 17" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function CompassStarDoodle({ color = "clay", size = 28, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1 L16.4 11.6 L27 14 L16.4 16.4 L14 27 L11.6 16.4 L1 14 L11.6 11.6 Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function ConstellationDoodle({ color = "slate", width = 90, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={width} height="50"
      viewBox={`0 0 ${width} 50`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="10" r="2" fill="currentColor" />
      <circle cx="34" cy="4" r="1.6" fill="currentColor" />
      <circle cx="55" cy="20" r="2.2" fill="currentColor" />
      <circle cx="80" cy="8" r="1.6" fill="currentColor" />
      <circle cx="46" cy="42" r="1.8" fill="currentColor" />
      <path d="M8 10 L34 4 L55 20 L80 8 M55 20 L46 42" stroke="currentColor" strokeWidth="1" opacity="0.6" fill="none" />
    </svg>
  );
}

export function InkSplashDoodle({ color = "ochre", size = 24, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <circle cx="19" cy="7" r="1.4" fill="currentColor" />
      <circle cx="4" cy="17" r="1" fill="currentColor" />
      <circle cx="20" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function CornerFoldDoodle({ color = "clay", size = 30, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2 H22 L28 8 V28 H2 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M22 2 L22 8 L28 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function BookmarkDoodle({ color = "ochre", size = 26, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size * 1.15}
      viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2 H23 V28 L13 20 L3 28 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function BurstDoodle({ color = "sage", size = 32, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 16 + Math.cos(a) * 6, y1 = 16 + Math.sin(a) * 6;
        const x2 = 16 + Math.cos(a) * 14, y2 = 16 + Math.sin(a) * 14;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />;
      })}
    </svg>
  );
}

export function CoffeeCupDoodle({ color = "clay", size = 26, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10 H18 V17 C18 20.5, 15 22 11 22 C7 22, 4 20.5, 4 17 Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M18 12 C22 12, 22 18, 18 18" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M8 3 C7 5.5, 9.5 5.5, 8.5 8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M13 3 C12 5.5, 14.5 5.5, 13.5 8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function SmileyDoodle({ color = "ochre", size = 24, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="10" r="1.1" fill="currentColor" />
      <circle cx="15.5" cy="10" r="1.1" fill="currentColor" />
      <path d="M7.5 14.5 C 9 17, 15 17, 16.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ZigzagDoodle({ color = "text-soft", width = 60, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={width} height="16"
      viewBox={`0 0 ${width} 16`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points={`2,14 ${width * 0.2},2 ${width * 0.4},14 ${width * 0.6},2 ${width * 0.8},14 ${width - 2},2`}
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function QuoteMarksDoodle({ color = "text-soft", size = 26, className = "", style = {} }) {
  return (
    <svg className={`doodle ${className}`} style={{ ...wrap(color), ...style }} width={size} height={size * 0.7}
      viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10 C2 4, 7 2, 9 2 C7 4, 6 6, 6 9 C8 9, 9.5 10.5, 9.5 12.5 C9.5 15, 7.5 16.5, 5 16.5 C2.5 16.5, 0.5 14, 2 10 Z" fill="currentColor" opacity="0.85" />
      <path d="M15 10 C15 4, 20 2, 22 2 C20 4, 19 6, 19 9 C21 9, 22.5 10.5, 22.5 12.5 C22.5 15, 20.5 16.5, 18 16.5 C15.5 16.5, 13.5 14, 15 10 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}