"use client"

import { SectionHeader } from "@/components/section-header"
import { courses, teaching } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function TeachingSection() {
  const { t, pick } = useLanguage()

  return (
    <section
      id="teaching"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader
          index={t("teaching.index")}
          title={t("teaching.title")}
          subtitle={t("teaching.subtitle")}
        />

        <div className="space-y-14">
          <div className="space-y-5">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {t("teaching.appointments")}
            </p>
            <ul className="divide-y divide-border">
              {teaching.map((item) => (
                <li
                  key={`${item.institution.en}-${item.role.en}`}
                  className="grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
                >
                  <div className="space-y-1">
                    <p className="font-sans text-lg font-light text-foreground">
                      {pick(item.role)}
                    </p>
                    <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted-foreground">
                      {pick(item.institution)}
                    </p>
                  </div>
                  {item.detail.en ? (
                    <p className="font-mono text-[11px] tracking-[0.04em] uppercase text-muted-foreground md:text-right">
                      {pick(item.detail)}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {t("teaching.courses")}
            </p>
            <ul className="grid gap-px sm:grid-cols-2 border border-border">
              {courses.map((c) => (
                <li
                  key={c.name.en}
                  className="space-y-2 border border-border bg-card p-5"
                >
                  <p className="font-sans text-base font-light text-foreground">
                    {pick(c.name)}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
                    {pick(c.level)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 border-t border-border pt-10">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {t("teaching.research")}
            </p>
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
              {t("teaching.research.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
