import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// CSS-built stand-in for warm, golden-hour photography: lens-disc bokeh over a
// deep umber base. Deterministic (seeded) so server and client markup match.
// Swap any <Bokeh /> for a real <Image /> once photography exists.

export type BokehScene = "hero" | "band" | "portrait" | "macro" | "ember";

interface SceneDef {
  base: string;
  seed: number;
  count: number;
  size: [number, number]; // orb diameter as % of container width
  alpha: [number, number];
  focus: [number, number]; // cluster centre, % of container
  spread: number; // cluster radius, % of container
  rgb: string[];
  glow: string;
  shade: string;
}

const SCENES: Record<BokehScene, SceneDef> = {
  hero: {
    base: "linear-gradient(125deg, #150b05 0%, #2f1c0f 38%, #6d4727 78%, #8b6035 100%)",
    seed: 11,
    count: 26,
    size: [5, 17],
    alpha: [0.1, 0.5],
    focus: [72, 34],
    spread: 42,
    rgb: ["255,214,150", "240,180,100", "255,236,205", "205,145,72"],
    glow: "radial-gradient(60% 70% at 74% 30%, rgba(236,176,96,0.5), transparent 70%)",
    shade: "linear-gradient(90deg, rgba(14,8,4,0.7) 0%, rgba(14,8,4,0.15) 55%, transparent 100%)",
  },
  band: {
    base: "linear-gradient(115deg, #4a2f19 0%, #7a5230 50%, #5c3b20 100%)",
    seed: 29,
    count: 20,
    size: [10, 26],
    alpha: [0.08, 0.3],
    focus: [50, 50],
    spread: 60,
    rgb: ["255,210,140", "230,165,90", "255,232,196"],
    glow: "radial-gradient(70% 90% at 30% 40%, rgba(240,180,100,0.35), transparent 70%)",
    shade: "linear-gradient(180deg, rgba(20,11,5,0.35), rgba(20,11,5,0.5))",
  },
  portrait: {
    base: "linear-gradient(170deg, #1d110a 0%, #3b2515 55%, #6a4527 100%)",
    seed: 47,
    count: 18,
    size: [8, 24],
    alpha: [0.1, 0.45],
    focus: [55, 28],
    spread: 50,
    rgb: ["255,214,150", "242,184,104", "255,238,210"],
    glow: "radial-gradient(70% 55% at 60% 22%, rgba(240,182,98,0.5), transparent 70%)",
    shade: "linear-gradient(0deg, rgba(14,8,4,0.78) 0%, rgba(14,8,4,0.1) 55%, transparent 100%)",
  },
  macro: {
    base: "linear-gradient(150deg, #e3cfae 0%, #c29c66 55%, #8d6638 100%)",
    seed: 63,
    count: 14,
    size: [14, 38],
    alpha: [0.18, 0.55],
    focus: [50, 45],
    spread: 55,
    rgb: ["255,244,222", "255,226,170", "214,162,92"],
    glow: "radial-gradient(60% 60% at 40% 35%, rgba(255,240,205,0.6), transparent 70%)",
    shade: "linear-gradient(0deg, rgba(60,36,16,0.3), transparent 60%)",
  },
  ember: {
    base: "linear-gradient(140deg, #0f0803 0%, #24150b 60%, #4a2f19 100%)",
    seed: 83,
    count: 12,
    size: [6, 20],
    alpha: [0.06, 0.32],
    focus: [30, 60],
    spread: 45,
    rgb: ["240,180,100", "205,145,72", "255,214,150"],
    glow: "radial-gradient(55% 60% at 28% 62%, rgba(214,150,70,0.35), transparent 70%)",
    shade: "linear-gradient(0deg, rgba(8,4,2,0.4), transparent 60%)",
  },
};

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r2 = (n: number) => Math.round(n * 100) / 100;

interface BokehProps {
  scene?: BokehScene;
  /** Offsets the seeded layout so repeated scenes (e.g. a gallery) differ. */
  variant?: number;
  drift?: boolean;
  className?: string;
}

export default function Bokeh({
  scene = "hero",
  variant = 0,
  drift = false,
  className,
}: BokehProps) {
  const def = SCENES[scene];
  const rand = mulberry32(def.seed + variant * 101);

  const orbs = Array.from({ length: def.count }, (_, i) => {
    const angle = rand() * Math.PI * 2;
    const dist = Math.sqrt(rand()) * def.spread;
    const size = def.size[0] + rand() * (def.size[1] - def.size[0]);
    const alpha = def.alpha[0] + rand() * (def.alpha[1] - def.alpha[0]);
    const rgb = def.rgb[Math.floor(rand() * def.rgb.length)];
    const blur = size > 16 ? 3 : 1.2;
    const style: CSSProperties = {
      left: `${r2(def.focus[0] + Math.cos(angle) * dist - size / 2)}%`,
      top: `${r2(def.focus[1] + Math.sin(angle) * dist * 1.3 - size / 2)}%`,
      width: `${r2(size)}%`,
      aspectRatio: "1",
      borderRadius: "50%",
      background: `radial-gradient(circle, rgba(${rgb},${r2(alpha * 0.55)}) 0%, rgba(${rgb},${r2(alpha * 0.7)}) 62%, rgba(${rgb},${r2(alpha)}) 68%, rgba(${rgb},0) 72%)`,
      filter: `blur(${blur}px)`,
      mixBlendMode: "screen",
    };
    return <span key={i} className="absolute block" style={style} />;
  });

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background: def.base }}
    >
      <div className={cn("absolute -inset-[6%]", drift && "bokeh-drift")}>{orbs}</div>
      <div className="absolute inset-0" style={{ background: def.glow }} />
      <div className="absolute inset-0" style={{ background: def.shade }} />
    </div>
  );
}
