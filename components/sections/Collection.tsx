import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { listPortfolioImages } from "@/lib/portfolio-images";

export default function Collection() {
  const images = listPortfolioImages();
  if (images.length === 0) return null;

  return (
    <section id="work" className="scroll-mt-20 bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-12 md:gap-x-10">
          <h2 className="display text-[clamp(2.1rem,4.2vw,3.4rem)] md:col-span-5">
            Practice collection
          </h2>
          <p className="max-w-lg text-[15px] leading-[1.7] text-muted-foreground md:col-span-7">
            Practice frames made to a black-and-gold brief, not client work. Generated with Stable
            Diffusion (epiCRealism XL by epinikion).
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-6">
          {images.map((img, i) => (
            <li key={img.src} className={i % 2 === 1 ? "md:mt-14" : undefined}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-[#0a0807]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
