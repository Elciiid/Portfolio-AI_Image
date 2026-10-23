"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const copyrightYear = 2026;

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-16 md:px-10">
        <div className="flex flex-col gap-10 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-[clamp(2.5rem,6vw,4.5rem)]">{site.name}</p>
            <p className="mt-2 text-[14px] text-muted-foreground">
              AI fashion &amp; jewelry imagery
            </p>
          </div>

          <div className="relative flex items-center gap-6 text-[14px]">
            <a
              href={site.linkedin}
              className="resend-link underline underline-offset-4"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => setShowEmail((current) => !current)}
              className="resend-link underline underline-offset-4"
              aria-expanded={showEmail}
              aria-controls="footer-email"
            >
              Email
            </button>
            {showEmail && (
              <p
                id="footer-email"
                role="status"
                className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-[3px] bg-foreground px-3 py-2 text-[13px] text-background shadow-[0_8px_24px_-8px_rgba(27,23,18,0.4)]"
              >
                {site.email}
              </p>
            )}
          </div>
        </div>

        <p className="pt-6 text-[12px] text-muted-foreground">
          &copy; {copyrightYear} {site.name}. All images are AI-generated practice work.
        </p>
      </div>
    </footer>
  );
}
