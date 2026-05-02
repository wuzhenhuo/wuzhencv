"use client"

import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/components/language-provider"
import { CVDownloadButton } from "@/components/cv-download-button"

export function ContactSection() {
  const { t, lang } = useLanguage()

  const contactLinks = [
    {
      label: t("contact.email.academic"),
      value: "wuzhen@bda.edu.cn",
      href: "mailto:wuzhen@bda.edu.cn",
    },
    {
      label: t("contact.email.studio"),
      value: "tot@alexzhenwu.com",
      href: "mailto:tot@alexzhenwu.com",
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader index={t("contact.index")} title={t("contact.title")} />

        <div className="space-y-10">
          {lang === "en" ? (
            <p className="font-sans text-2xl font-light leading-[1.3] text-balance text-foreground md:text-4xl">
              Open to{" "}
              <span className="font-medium">collaborations</span> in
              performance, installation, and AI-assisted image-making.
            </p>
          ) : (
            <p className="font-sans text-2xl font-light leading-[1.4] text-balance text-foreground md:text-4xl">
              欢迎就<span className="font-medium">合作</span>
              进行交流 —— 涵盖演出、装置、具身智能与 AI 影像创作。
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <CVDownloadButton variant="primary" />
            <a
              href="mailto:wuzhen@bda.edu.cn"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs tracking-[0.1em] uppercase text-foreground transition-colors hover:border-foreground"
            >
              {t("nav.email")}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5"
                >
                  <div className="space-y-1.5">
                    <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="font-sans text-lg font-light text-foreground transition-colors group-hover:text-muted-foreground md:text-xl">
                      {link.value}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono text-muted-foreground transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid gap-6 font-sans text-sm text-muted-foreground md:grid-cols-2">
            <div className="space-y-2">
              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                {t("contact.studio")}
              </p>
              <p className="text-foreground">{t("contact.studio.dept")}</p>
              <p>{t("contact.studio.addr")}</p>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                {t("contact.phone")}
              </p>
              <p className="text-foreground">+86 138 1074 5684</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
