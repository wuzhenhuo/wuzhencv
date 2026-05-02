"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import type { Lang, L } from "@/lib/portfolio-data"
import { dict } from "@/lib/i18n-strings"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (key: keyof typeof dict) => string
  pick: (value: L) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "wuzhen-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
      if (stored === "en" || stored === "zh") {
        setLangState(stored)
      } else if (typeof navigator !== "undefined") {
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith("zh")) setLangState("zh")
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
    } catch {
      // ignore
    }
  }, [lang, hydrated])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "zh" : "en")),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (key) => dict[key][lang],
      pick: (value) => value[lang],
    }),
    [lang, setLang, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
