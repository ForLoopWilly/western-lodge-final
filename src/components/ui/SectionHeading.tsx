import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, centered, light, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}>
          {!centered && <span className={cn("block h-px w-8", light ? "bg-sand-300/60" : "bg-teal-400/60")} />}
          <p className={cn("eyebrow", light ? "text-sand-200/70" : "text-teal-500")}>{eyebrow}</p>
          {centered && <span className={cn("block h-px w-8", light ? "bg-sand-300/60" : "bg-teal-400/60")} />}
        </div>
      )}
      <h2 className={cn("font-heading font-800 text-fluid-3xl leading-tight mb-4", light ? "text-white" : "text-teal-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-body text-fluid-base leading-relaxed", light ? "text-sand-200/75" : "text-muted")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
