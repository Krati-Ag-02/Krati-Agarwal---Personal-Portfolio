import { useState } from "react";

/* Drop your 7 images into: public/interests/
   Rename the `img` paths below if your actual filenames differ. */
const ARTWORKS = [
  { id: "golden-horizon",   title: "Golden Horizon",  subtitle: "Sunset with Dolphins",           category: "oil",    img: "/golden-horizon.jpeg",   tilt: -4, lift: 8  },
  { id: "silent-falls",     title: "Silent Falls",    subtitle: "Waterfall with Deer",             category: "oil",    img: "/silent-falls.jpeg",     tilt: 3,  lift: 26 },
  { id: "village-twilight", title: "Village Twilight",subtitle: "Village Night Life",              category: "oil",    img: "/village-twilight.jpeg", tilt: -3, lift: 14 },
  { id: "blue-serenity",    title: "Blue Serenity",   subtitle: "Coloured Krishna Painting",       category: "oil",    img: "/blue-serenity.jpeg",    tilt: 4,  lift: 30 },
  { id: "divine-notes",     title: "Divine Notes",    subtitle: "Krishna with Flute — Pencil",     category: "pencil", img: "/divine-notes.jpeg",     tilt: -5, lift: 18 },
  { id: "moonlit-perch",    title: "Moonlit Perch",   subtitle: "Street Lamp with Birds",          category: "pencil", img: "/moonlit-perch.jpeg",    tilt: 5,  lift: 6  },
  { id: "palm-sunset",      title: "Palm Sunset",     subtitle: "Circular Palm Tree Sketch",       category: "pencil", img: "/palm-sunset.jpeg",      tilt: -2, lift: 22 },
];
const FILTERS = [
  { key: "all",    label: "All",             count: ARTWORKS.length },
  { key: "pencil", label: "Pencil Shading",  count: ARTWORKS.filter((a) => a.category === "pencil").length },
  { key: "oil",    label: "Oil Pastel",      count: ARTWORKS.filter((a) => a.category === "oil").length },
];

export default function Interests() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? ARTWORKS : ARTWORKS.filter((a) => a.category === filter);
 
  return (
    <section id="interests">
      <div className="blob blob-clay b1"></div>
 
      <div className="interests-header">
        <span className="section-eyebrow">// beyond the screen</span>
        <h2 className="section-title">
          Things I <em className="em-clay">create</em>
        </h2>
        <p className="section-note">
          pencil shading &amp; oil pastel — {ARTWORKS.length} pieces, hung up as they're finished
        </p>
 
        <div className="interests-filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`chip interests-filter-chip ${filter === f.key ? "chip-fill-clay" : ""}`}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
            >
              {f.label} <span className="interests-filter-count">({f.count})</span>
            </button>
          ))}
        </div>
      </div>
 
      <div className="interests-line-wrap">
        <div className="interests-wrap">
          {visible.map((art) => (
            <div
              key={art.id}
              className="polaroid-card reveal in"
              style={{ "--tilt": `${art.tilt}deg`, "--lift": `${art.lift}px` }}
            >
              <div className="polaroid-pin"></div>
              <div className="polaroid-photo">
                <img src={art.img} alt={`${art.title} — ${art.subtitle}`} loading="lazy" />
              </div>
              <p className="polaroid-caption">{art.title}</p>
              <span className="polaroid-tag">
                {art.category === "oil" ? "Oil Pastel" : "Pencil Shading"} · {art.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}