import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string | number;
  label: string;
  highlight?: boolean;
  winner?: boolean;
  className?: string;
}

export function StatCard({
  value,
  label,
  highlight = false,
  winner = false,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-navy-light p-6 rounded-lg border border-transparent transition-all card-hover",
        highlight && "border-coral/30",
        winner && "border-verdict ring-2 ring-verdict/20",
        className
      )}
    >
      <div
        className={cn(
          "font-mono text-4xl md:text-5xl font-bold",
          winner ? "text-verdict" : highlight ? "text-coral" : "text-cream"
        )}
      >
        {value}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-cream-muted">
        {label}
      </div>
    </div>
  );
}
