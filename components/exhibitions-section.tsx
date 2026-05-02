"use client"

import { SectionHeader } from "@/components/section-header"
import { exhibitions } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function ExhibitionsSection() {
  const { t, pick } = useLanguage()

  return (
    <section
      id="exhibitions"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader
          index={t("exhibitions.index")}
          title={t("exhibitions.title")}
          subtitle={t("exhibitions.subtitle")}
        />

        <ul className="divide-y divide-border">
          {exhibitions.map((e) => (
            <li
              key={`${e.year}-${e.title.en}`}
              className="grid grid-cols-[64px_1fr] items-baseline gap-x-6 gap-y-1 py-5 md:grid-cols-[72px_1fr_auto] md:gap-x-10"
            >
              <span className="font-mono text-xs tracking-[0.04em] text-muted-foreground">
                {e.year}
              </span>
              <span className="font-sans text-base font-light leading-snug text-foreground transition-colors hover:text-foreground/70 md:text-lg">
                {pick(e.title)}
              </span>
              <span className="col-span-2 font-mono text-[11px] tracking-[0.04em] uppercase text-muted-foreground md:col-span-1 md:text-right">
                {pick(e.venue)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
