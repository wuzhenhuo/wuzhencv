"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { CVDownloadButton } from "@/components/cv-download-button"

const NAV_ITEMS = [
  { href: "#about", key: "nav.about" as const },
  { href: "#works", key: "nav.works" as const },
  { href: "#exhibitions", key: "nav.exhibitions" as const },
  { href: "#publications", key: "nav.writing" as const },
  { href: "#teaching", key: "nav.teaching" as const },
  { href: "#contact", key: "nav.contact" as const },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-mono text-xs font-bold tracking-[0.12em] uppercase text-foreground transition-colors hover:text-muted-foreground"
        >
          {lang === "zh" ? "吴振 / WU ZHEN" : "WU ZHEN"}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <span className="hidden md:inline">
            <CVDownloadButton variant="nav" />
          </span>
        </div>
      </div>
    </header>
  )
}
