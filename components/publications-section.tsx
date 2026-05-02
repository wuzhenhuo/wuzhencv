"use client"

import { SectionHeader } from "@/components/section-header"
import { publications } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function PublicationsSection() {
  const { t, pick } = useLanguage()

  return (
    <section
      id="publications"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader
          index={t("publications.index")}
          title={t("publications.title")}
          subtitle={t("publications.subtitle")}
        />

        <ol className="divide-y divide-border">
          {publications.map((p, i) => (
            <li
              key={`${p.year}-${p.title.en}`}
              className="grid gap-4 py-6 md:grid-cols-[56px_1fr] md:gap-8"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                <span className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground">
                  {p.year}
                </span>
                <span className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-sans text-base font-light leading-snug text-foreground md:text-lg">
                  {pick(p.title)}
                  {p.downloadUrl && (
                    <a
                      href={p.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download"
                      className="ml-2 inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.06em] uppercase text-accent hover:text-accent/80 transition-colors align-middle"
                    >
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                        <path d="M8 12l-4-4h2.5V3h3v5H12L8 12zm-5 2h10v1.5H3V14z"/>
                      </svg>
                      PDF
                    </a>
                  )}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.04em] uppercase text-muted-foreground">
                  {pick(p.venue)}
                  {p.index ? (
                    <span className="text-muted-foreground/50">
                      {" · "}
                      {pick(p.index)}
                    </span>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
