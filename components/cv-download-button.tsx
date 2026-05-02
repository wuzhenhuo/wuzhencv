"use client"

import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const CV_URL =
  "https://drive.google.com/uc?export=download&id=17d58P8mKCdlchYL9afiQxUZz_eiJ7mZm"

type Variant = "primary" | "ghost" | "nav"

interface CVDownloadButtonProps {
  variant?: Variant
  className?: string
}

export function CVDownloadButton({
  variant = "primary",
  className,
}: CVDownloadButtonProps) {
  const { t } = useLanguage()

  const base =
    "group inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  const styles: Record<Variant, string> = {
    primary:
      "rounded-full border border-primary bg-primary px-5 py-2.5 text-primary-foreground hover:opacity-80",
    ghost:
      "rounded-full border border-border px-5 py-2.5 text-foreground hover:border-foreground",
    nav: "text-muted-foreground hover:text-foreground",
  }

  return (
    <a
      href={CV_URL}
      download="Wu-Zhen-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("hero.cv")}
      className={cn(base, styles[variant], className)}
    >
      <Download
        aria-hidden="true"
        className={cn(
          "transition-transform group-hover:-translate-y-0.5",
          variant === "nav" ? "h-3.5 w-3.5" : "h-3.5 w-3.5",
        )}
      />
      <span>{variant === "nav" ? t("nav.cv") : t("hero.cv")}</span>
    </a>
  )
}
