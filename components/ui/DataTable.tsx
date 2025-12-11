import { cn } from "@/lib/utils";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  accent?: "default" | "green" | "red";
}

const accentStyles = {
  default: "border-coral/20",
  green: "border-peacemaker/20",
  red: "border-shame/20",
};

const headerAccentStyles = {
  default: "text-coral",
  green: "text-peacemaker",
  red: "text-toxic",
};

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  className,
  accent = "default",
}: DataTableProps<T>) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className={cn("border-b", accentStyles[accent])}>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "px-4 py-3 text-left font-mono text-xs uppercase tracking-widest",
                  headerAccentStyles[accent],
                  column.className
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b last:border-b-0 transition-colors hover:bg-navy-light/50",
                accentStyles[accent]
              )}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn(
                    "px-4 py-3 font-mono text-sm text-cream",
                    column.className
                  )}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
