import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = (window.scrollY / total) * 100;
      setScrollPct(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ruler-progress-wrap" aria-hidden="true">
      <div className="ruler-track">
        {[...Array(21)].map((_, i) => (
          <div
            key={i}
            className={`ruler-mark ${i % 5 === 0 ? "major" : ""}`}
            style={{ top: `${(i / 20) * 100}%` }}
          />
        ))}
      </div>
      <div
        className="ruler-thumb"
        style={{ top: `${scrollPct}%` }}
      >
        <span className="ruler-val">{Math.round(scrollPct)}%</span>
      </div>
    </div>
  );
}