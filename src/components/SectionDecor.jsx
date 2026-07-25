import {
  ArrowDoodle,
  CurvedArrowDoodle,
  SparkleDoodle,
  StarDoodle,
  ScribbleCircleDoodle,
  DashedPathDoodle,
  CurlyDividerDoodle,
  PushpinDoodle,
  DoubleUnderlineDoodle,
  PlusCrossDoodle,
  TerminalDoodle,
  GitBranchDoodle,
  CodeBracketsDoodle,
  LightningDoodle,
  CompassStarDoodle,
  BookmarkDoodle,
  InkSplashDoodle,
  CornerFoldDoodle,
  BurstDoodle,
  CoffeeCupDoodle,
  SmileyDoodle,
  ConstellationDoodle,
  QuoteMarksDoodle,
  ZigzagDoodle,
} from "./Doodles";
import MicroQuote from "./MicroQuote";

const DECOR = {
  hero: [
    { el: CurvedArrowDoodle, props: { color: "sage" }, style: { top: "10%", left: "4%" } },
    { el: SparkleDoodle, props: { color: "ochre", size: 22 }, style: { top: "62%", left: "5%" } },
    { el: StarDoodle, props: { color: "clay", size: 20 }, style: { top: "80%", left: "7%" } },
    { el: MicroQuote, props: { text: "Always creating.", variant: "hand", color: "sage", rotate: -3 }, style: { top: "22%", left: "4%" } },
  ],
  about: [
    { el: DoubleUnderlineDoodle, props: { color: "clay", width: 76 }, style: { top: "5%", right: "10%" } },
    { el: PlusCrossDoodle, props: { color: "sage" }, style: { top: "46%", right: "4%" } },
    { el: SparkleDoodle, props: { color: "clay", size: 18 }, style: { top: "8%", left: "5%" } },
    { el: ScribbleCircleDoodle, props: { color: "slate", size: 40 }, style: { top: "66%", right: "6%" } },
    { el: MicroQuote, props: { text: "Consistency creates trust.", variant: "mono", color: "sage", rotate: -1 }, style: { bottom: "4%", left: "4%" } },
  ],
  experience: [
    { el: CompassStarDoodle, props: { color: "clay" }, style: { top: "6%", right: "6%" } },
    { el: DashedPathDoodle, props: { color: "glass-border-strong" }, style: { top: "38%", right: "4%" } },
    { el: PushpinDoodle, props: { color: "sage", size: 22 }, style: { top: "5%", left: "5%" } },
    { el: MicroQuote, props: { text: "Every bug teaches.", variant: "hand", color: "ochre", rotate: 2 }, style: { bottom: "6%", right: "5%" } },
    { el: MicroQuote, props: { text: "Build. Break. Improve.", variant: "mono", color: "clay", rotate: -1 }, style: { bottom: "6%", left: "4%" } },
  ],
  projects: [
    { el: TerminalDoodle, props: { color: "slate" }, style: { top: "3%", right: "8%" } },
    { el: GitBranchDoodle, props: { color: "sage" }, style: { bottom: "5%", left: "4%" } },
    { el: ArrowDoodle, props: { color: "ochre", size: 40 }, style: { top: "6%", left: "5%" } },
    { el: MicroQuote, props: { text: "Ship > perfect.", variant: "mono", color: "ochre", rotate: -2 }, style: { top: "42%", right: "4%" } },
    { el: MicroQuote, props: { text: "Think. Build. Repeat.", variant: "hand", color: "sage", rotate: 2 }, style: { bottom: "4%", right: "6%" } },
  ],
  skills: [
    { el: CodeBracketsDoodle, props: { color: "clay" }, style: { top: "2%", right: "12%" } },
    { el: LightningDoodle, props: { color: "ochre" }, style: { bottom: "4%", left: "5%" } },
    { el: ZigzagDoodle, props: { color: "text-soft", width: 54 }, style: { top: "6%", left: "5%" } },
    { el: MicroQuote, props: { text: "Function with elegance.", variant: "mono", color: "slate", rotate: -2 }, style: { bottom: "3%", right: "8%" } },
    { el: MicroQuote, props: { text: "Every pixel counts.", variant: "mono", color: "clay", rotate: 1 }, style: { top: "42%", left: "4%" } },
  ],
  education: [
    { el: BookmarkDoodle, props: { color: "ochre" }, style: { top: "8%", right: "12%" } },
    { el: InkSplashDoodle, props: { color: "clay" }, style: { bottom: "14%", right: "18%" } },
    { el: CurlyDividerDoodle, props: { color: "glass-border-strong", width: 100 }, style: { top: "5%", left: "5%" } },
    { el: MicroQuote, props: { text: "Learning as I build.", variant: "hand", color: "sage", rotate: -2 }, style: { top: "22%", right: "8%" } },
    { el: MicroQuote, props: { text: "Curiosity drives me.", variant: "hand", color: "clay", rotate: 3 }, style: { bottom: "6%", left: "5%" } },
  ],
  certifications: [
    { el: CornerFoldDoodle, props: { color: "clay" }, style: { top: "4%", left: "4%" } },
    { el: BurstDoodle, props: { color: "sage" }, style: { bottom: "4%", right: "12%" } },
    { el: StarDoodle, props: { color: "ochre", size: 18 }, style: { top: "6%", right: "5%" } },
    { el: MicroQuote, props: { text: "Small steps matter.", variant: "mono", color: "ochre", rotate: -1 }, style: { top: "4%", right: "22%" } },
    { el: MicroQuote, props: { text: "Built with patience.", variant: "hand", color: "sage", rotate: 2 }, style: { bottom: "5%", left: "5%" } },
  ],
  interests: [
    { el: CoffeeCupDoodle, props: { color: "clay" }, style: { top: "4%", left: "7%" } },
    { el: SparkleDoodle, props: { color: "ochre" }, style: { top: "6%", right: "9%" } },
    { el: SmileyDoodle, props: { color: "sage", size: 22 }, style: { bottom: "6%", left: "5%" } },
    { el: MicroQuote, props: { text: "Still sketching this one.", variant: "hand", color: "sage", rotate: 3 }, style: { bottom: "12%", right: "5%" } },
    { el: MicroQuote, props: { text: "Ideas into interfaces.", variant: "hand", color: "clay", rotate: -2 }, style: { top: "8%", left: "18%" } },
  ],
  contact: [
    { el: ConstellationDoodle, props: { color: "slate" }, style: { top: "5%", left: "7%" } },
    { el: QuoteMarksDoodle, props: { color: "text-soft" }, style: { top: "7%", right: "13%" } },
    { el: StarDoodle, props: { color: "sage", size: 18 }, style: { bottom: "5%", left: "6%" } },
    { el: MicroQuote, props: { text: "One commit closer.", variant: "hand", color: "clay", rotate: -2 }, style: { bottom: "8%", right: "6%" } },
    { el: MicroQuote, props: { text: "Clarity wins.", variant: "mono", color: "slate", rotate: 1 }, style: { top: "5%", right: "30%" } },
  ],
};

export default function SectionDecor({ section }) {
  const items = DECOR[section];
  if (!items) return null;

  return (
    <>
      {items.map((item, i) => {
        const Comp = item.el;
        return (
          <div key={i} className="section-decor-item" style={{ position: "absolute", zIndex: 2, ...item.style }}>
            <Comp {...item.props} className={item.props?.className ?? "doodle-float"} />
          </div>
        );
      })}
    </>
  );
}