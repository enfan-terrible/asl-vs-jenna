import { cn } from "@/lib/utils";

interface VerdictBannerProps {
  title: string;
  subtitle?: string;
  accent?: "gold" | "coral" | "green" | "red";
  className?: string;
}

const accentStyles = {
  gold: "border-verdict bg-verdict/10 text-verdict",
  coral: "border-coral bg-coral/10 text-coral",
  green: "border-peacemaker bg-peacemaker/10 text-peacemaker",
  red: "border-shame bg-shame/10 text-toxic",
};

export function VerdictBanner({
  title,
  subtitle,
  accent = "coral",
  className,
}: VerdictBannerProps) {
  return (
    <div
      className={cn(
        "w-full py-8 px-6 border-y-2 text-center",
        accentStyles[accent],
        className
      )}
    >
      <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl uppercase tracking-wide">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 font-mono text-sm text-cream-muted italic">
          &quot;{subtitle}&quot;
        </p>
      )}
    </div>
  );
}
