import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Bokeh, { type BokehScene } from "@/components/ui/Bokeh";
import { listPortfolioImages } from "@/lib/portfolio-images";

// Three tall campaign frames: the first three images in public/ai-imagery/.
// Bokeh plates stand in for any that are missing.
const fallbackScenes: BokehScene[] = ["ember", "portrait", "hero"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const panels = listPortfolioImages().slice(0, 3);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden text-[#f4ecdc]">
      <div className="absolute inset-0 grid grid-cols-3">
        {fallbackScenes.map((scene, i) => {
          const img = panels[i];
          return (
            <div key={i} className="relative overflow-hidden bg-[#0a0807]">
              {img ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  sizes="34vw"
                  className="object-cover"
                />
              ) : (
                <Bokeh scene={scene} variant={i} drift />
              )}
            </div>
          );
        })}
      </div>

      {/* keeps the title and nav legible over any image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,7,0.65) 0%, rgba(10,8,7,0.12) 30%, rgba(10,8,7,0.2) 60%, rgba(10,8,7,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pb-8 pt-28 md:px-10 md:pb-10">
        <div className="my-auto text-center">
          <h1
            className="hero-title rise text-[clamp(3rem,11.5vw,10.5rem)]"
            style={delay(80)}
          >
            Black &amp; gold,
            <br />
            shallow focus
          </h1>
          <p
            className="rise mx-auto mt-8 max-w-[460px] text-[15px] leading-[1.7] text-[#f4ecdc]/80"
            style={delay(240)}
          >
            AI fashion and jewelry imagery made with Stable Diffusion, to a written visual system.
            Practice frames, not client work.
          </p>
        </div>

        <div
          className="rise flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          style={delay(420)}
        >
          <p className="text-[11px] uppercase leading-relaxed tracking-[0.2em] text-[#f4ecdc]/70">
            Practice collection &mdash; Vol. I
            <br />
            Black &amp; gold edit
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-light">
              See the work <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-line-light">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
