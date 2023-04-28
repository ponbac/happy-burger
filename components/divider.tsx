import { cn } from "@/lib/utils";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-[1px] bg-king-beige", className)} />;
};
