"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : undefined
  const isDark = current === "dark"

  const toggle = () => setTheme(isDark ? "light" : "dark")

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("theme.toggle.aria")}
      title={t("theme.toggle.aria")}
      className={cn(
        "relative inline-flex h-7 w-7 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {/* Prevent hydration mismatch: render both icons, toggle with opacity once mounted */}
      <Sun
        aria-hidden="true"
        className={cn(
          "absolute h-3.5 w-3.5 transition-all duration-300",
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
      <Moon
        aria-hidden="true"
        className={cn(
          "absolute h-3.5 w-3.5 transition-all duration-300",
          mounted && !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        )}
      />
      <span className="sr-only">{t("theme.toggle.aria")}</span>
    </button>
  )
}
