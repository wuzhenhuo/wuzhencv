"use client"

import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t("lang.toggle.aria")}
      className={cn(
        "inline-flex items-center gap-0 border border-border bg-card p-0.5 text-[11px] tracking-[0.12em]",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "relative px-2.5 py-1 font-mono uppercase transition-colors",
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={cn(
          "relative px-2.5 py-1 font-mono text-[13px] leading-none transition-colors",
          lang === "zh"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        中
      </button>
    </div>
  )
}
