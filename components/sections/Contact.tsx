import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactRows, site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:gap-x-10 md:px-10 md:py-32">
        <Reveal className="md:col-span-5">
          <h2 className="display text-[clamp(2.1rem,4.2vw,3.4rem)]">Get in touch</h2>
          <p className="mt-6 max-w-[440px] text-[16px] leading-[1.75] text-muted-foreground">
            Open to recurring collection work in fashion, jewelry and luxury imagery. Send the art
            direction document or a short note about the brief and I&apos;ll reply directly.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-ink">
              <Mail size={15} aria-hidden="true" /> Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          <a
            href={`mailto:${site.email}`}
            className="display resend-link block break-all text-[clamp(1.5rem,3.2vw,2.4rem)]"
          >
            {site.email}
          </a>

          <p className="mb-4 mt-10 inline-flex items-center gap-2 text-[14px] font-medium">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70"
                style={{ animation: "ping 1.8s cubic-bezier(0,0,0.2,1) 2" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Open to collection work
          </p>

          <dl className="border-t border-border">
            {contactRows.map((d) => (
              <div
                key={d.label}
                className="flex items-baseline justify-between gap-6 border-b border-border py-3.5"
              >
                <dt className="label">{d.label}</dt>
                <dd className="max-w-[26rem] text-right text-[14px]">
                  {d.href ? (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resend-link underline underline-offset-4"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
