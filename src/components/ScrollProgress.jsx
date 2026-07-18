import { useEffect, useState } from "react";

const TICKS = Array.from({ length: 11 }, (_, i) => i * 10);

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ruler">
      <div className="ruler-ticks">
        {TICKS.map((t) => (
          <div key={t}>
            <div className="ruler-tick major" style={{ top: `${t}%` }} />
            {t < 100 && (
              <div className="ruler-tick" style={{ top: `${t + 5}%` }} />
            )}
            <span className="ruler-label" style={{ top: `${t}%` }}>
              {String(t).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
      <div className="ruler-indicator" style={{ top: `calc(${progress}% - 17px)` }} />
    </div>
  );
}
