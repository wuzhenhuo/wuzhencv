import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  index: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  index,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:sticky md:top-24 md:self-start", className)}>
      <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
        {index}
      </p>
      <div className="h-px w-8 bg-accent" style={{boxShadow: '0 0 6px rgba(215,25,33,0.5)'}} />
      <h2 className="font-sans text-3xl font-light leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-[0.04em] uppercase text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
