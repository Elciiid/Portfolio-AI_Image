import Reveal from "@/components/ui/Reveal";

const points = [
  {
    title: "A written visual system",
    text: "Black and gold, warm golden-hour light, strong bokeh, tight framing and glowing skin, written down and followed on every frame.",
  },
  {
    title: "Checked before delivery",
    text: "Each image goes through a 15-point check for colour, focus, anatomy and jewelry detail before you see it.",
  },
  {
    title: "Sized and graded",
    text: "Portrait 3:4 or 4:5, upscaled, with a light warm grade so a batch looks like one set.",
  },
  {
    title: "Quick to iterate",
    text: "Feedback goes back into the prompt kit, so the next batch improves instead of drifting.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1400px] scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-5">
          <h2 className="display text-[clamp(2.1rem,4.2vw,3.4rem)]">How I work</h2>
        </Reveal>
        <ul className="border-t border-border md:col-span-7">
          {points.map((p) => (
            <li key={p.title} className="border-b border-border">
              <Reveal className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <h3 className="display text-[22px]">{p.title}</h3>
                <p className="text-[15px] leading-[1.7] text-muted-foreground">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
