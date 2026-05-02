"use client"

import { SectionHeader } from "@/components/section-header"
import { education } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { t, pick, lang } = useLanguage()

  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-10">
        <SectionHeader index={t("about.index")} title={t("about.title")} />

        <div className="space-y-10">
          <div className="font-sans text-lg font-light leading-relaxed text-foreground md:text-xl md:leading-[1.6]">
            {lang === "en" ? (
              <p className="text-pretty">
                Wu Zhen is an{" "}
                <span className="text-foreground font-medium">AI artist</span>{" "}
                and{" "}
                <span className="text-foreground font-medium">stage visual designer</span>
                , Associate Professor at{" "}
                <span className="font-medium">Beijing Dance Academy</span>, with a{" "}
                <span className="font-medium">Ph.D. in Digital Media</span>{" "}
                from Macau University of Science and Technology. He is a
                Visiting Scholar at the University of California, Irvine, and a
                Guest Professor and Doctoral Supervisor at Shinawatra University,
                Thailand. His work integrates digital media art, artificial
                intelligence, XR technologies, and performance, focusing on
                interdisciplinary creation across{" "}
                <span className="font-medium">dance</span>,{" "}
                <span className="font-medium">film</span>, and{" "}
                <span className="font-medium">interactive media</span>.
              </p>
            ) : (
              <p className="text-pretty">
                吴振，<span className="font-medium">AI 艺术家</span>、
                <span className="font-medium">舞台视觉设计师</span>，
                <span className="font-medium">北京舞蹈学院</span>副教授，
                <span className="font-medium">澳门科技大学数字媒体博士</span>
                。美国加州大学尔湾分校访问学者、兼任泰国西那瓦大学客座教授、博士生导师。创作融合数字媒体艺术、人工智能、XR
                技术与表演，聚焦<span className="font-medium">舞蹈</span>、<span className="font-medium">影像</span>与
                <span className="font-medium">交互媒体</span>的跨界创作。
              </p>
            )}
          </div>

          <div className="space-y-4 font-sans text-sm leading-relaxed text-muted-foreground">
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {t("about.education")}
            </p>
            <ul className="divide-y divide-border">
              {education.map((item) => (
                <li
                  key={item.school.en}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-4 text-sm md:grid-cols-[120px_1fr_auto]"
                >
                  <span className="font-mono text-xs tracking-[0.04em] text-muted-foreground md:text-sm">
                    {item.period}
                  </span>
                  <span className="font-sans text-foreground">{pick(item.degree)}</span>
                  <span className="col-span-2 font-mono text-xs tracking-[0.04em] text-muted-foreground md:col-span-1 md:text-right">
                    {pick(item.school)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
