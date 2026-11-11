import { cn } from "@/lib/utils";
import type { Level } from "./data";

const styles: Record<Level, string> = {
  Beginner: "border-success/40 bg-success/10 text-success",
  Intermediate: "border-highlight/40 bg-highlight/10 text-highlight",
  Advanced: "border-primary/50 bg-primary/15 text-primary-glow",
};

export function LevelBadge({ level, className }: { level: Level; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", styles[level], className)}>
      {level}
    </span>
  );
}
