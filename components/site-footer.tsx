"use client"

import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const { t, lang } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-sm font-medium text-foreground">
            {lang === "zh" ? "吴振" : "Wu Zhen"}
          </span>
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted-foreground">
            · {t("footer.role")}
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
          <span>© {year}</span>
          <span className="hidden sm:inline">{t("footer.cities")}</span>
          <a href="#top" className="transition-colors hover:text-foreground">
            {t("footer.backToTop")} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
