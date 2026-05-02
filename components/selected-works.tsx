"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { selectedWorks } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export function SelectedWorks() {
  const { t, pick } = useLanguage()

  return (
    <section id="works" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader
          index={t("works.index")}
          title={t("works.title")}
          subtitle={t("works.subtitle")}
        />

        <div className="space-y-20">
          {selectedWorks.map((work, idx) => (
            <article
              key={`${work.year}-${work.title.en}`}
              className="group grid gap-6 md:grid-cols-12 md:gap-8 border border-transparent hover:border-accent/20 transition-colors duration-500 p-0 md:-mx-4 md:px-4 md:py-2 rounded-sm"
            >
              <div className="col-span-12 md:col-span-7 space-y-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  {work.video ? (
                    <iframe
                      src={work.video}
                      title={pick(work.title)}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={`${pick(work.title)} — ${pick(work.role)}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-background/20" />
                    </>
                  )}
                </div>
                {work.youtubeUrl && (
                  <a
                    href={work.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Watch on YouTube"
                  >
                    <YouTubeIcon />
                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase">YouTube</span>
                  </a>
                )}
              </div>

              <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:py-2">
                {/* Index + year */}
                <div className="flex items-baseline justify-between font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                  <span>
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(selectedWorks.length).padStart(2, "0")}
                  </span>
                  <span>{work.year}</span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="font-sans text-2xl font-light leading-tight tracking-[-0.01em] text-foreground md:text-3xl">
                    {pick(work.title)}
                  </h3>
                  {work.subtitle ? (
                    <p className="font-sans text-sm text-muted-foreground">
                      {pick(work.subtitle)}
                    </p>
                  ) : null}
                </div>

                {/* Role */}
                <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">
                  {pick(work.role)}
                </p>

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {pick(work.description)}
                </p>

                {/* Tags */}
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag.en}
                      className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] uppercase text-muted-foreground"
                    >
                      {pick(tag)}
                    </span>
                  ))}
                </div>

                {work.website && (
                  <a
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-accent hover:text-accent/80 transition-colors"
                  >
                    <span aria-hidden="true">↗</span>
                    {work.website.replace(/^https?:\/\//, "")}
                  </a>
                )}
                {work.venue ? (
                  <p className="pt-1 font-mono text-[11px] tracking-[0.06em] uppercase text-muted-foreground">
                    <span className="text-foreground/40">{t("works.venue")}</span>
                    {" · "}
                    {pick(work.venue)}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
