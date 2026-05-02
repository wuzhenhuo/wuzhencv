"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { CVDownloadButton } from "@/components/cv-download-button"

export function HeroSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-projection.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-15 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 dot-grid-subtle opacity-40" />
        {/* Tech scan line */}
        <div className="absolute inset-x-0 h-px bg-accent/20 scan-line" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-36 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1fr_260px] md:items-start lg:grid-cols-[1fr_300px]">
          {/* Left: text */}
          <div>
            {/* Eyebrow label */}
            <p className="mb-10 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
              {t("hero.eyebrow")}
            </p>

            {/* Hero name */}
            {lang === "en" ? (
              <h1 className="mb-8 font-display text-[72px] leading-[1.0] tracking-[-0.02em] text-foreground sm:text-[88px] md:text-[112px]">
                Wu Zhen
              </h1>
            ) : (
              <h1 className="mb-8 font-sans text-[64px] font-light leading-[1.0] tracking-[-0.03em] text-foreground sm:text-[80px] md:text-[100px]">
                吴 振
              </h1>
            )}

            {/* Tagline */}
            <p className="mb-3 max-w-3xl font-sans text-xl font-light leading-snug tracking-[-0.01em] text-foreground md:text-2xl">
              {lang === "en"
                ? <>Between stage, film, media art <span className="text-muted-foreground">&</span> machine intelligence.</>
                : <>游走于舞台、影像、媒体艺术<span className="text-muted-foreground">与</span>人工智能之间。</>}
            </p>

            {/* Description */}
            <p className="mb-10 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
              {t("hero.description")}
            </p>

            {/* Meta */}
            <p className="mb-8 font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              {t("hero.based")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-bold tracking-[0.1em] uppercase text-primary-foreground transition-opacity hover:opacity-80"
              >
                {t("hero.cta")}
                <span aria-hidden="true">→</span>
              </a>
              <CVDownloadButton variant="ghost" />
              <a
                href="https://orcid.org/0000-0003-2351-1498"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
              >
                <svg viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true">
                  <path fill="#A6CE39" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                  <path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.5 10.1 10.1z"/>
                </svg>
              </a>
              <a
                href="https://au.cnki.net/mobile/workbench/personalHomePage/000064813070"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="中国知网 CNKI"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
              >
                <svg viewBox="0 0 40 40" className="h-5 w-5" aria-hidden="true">
                  <rect width="40" height="40" rx="4" fill="#006BB9"/>
                  <text x="20" y="28" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">知</text>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden border border-border/60 portrait-glow">
              <Image
                src="/images/wuzhen.png"
                alt="Wu Zhen 吴振"
                width={300}
                height={380}
                className="h-auto w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                <span className="text-accent mr-2">▸</span>
                {lang === "en" ? "Wu Zhen · Beijing" : "吴振 · 北京"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
