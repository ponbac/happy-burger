import { cn } from "@/lib/utils";
import { LockIcon } from "lucide-react";

export const AuthBar = ({ className }: { className?: string }) => {
  return (
    <div className="flex w-full flex-row-reverse py-3">
      <div
        className={cn(
          "flex w-fit cursor-pointer flex-row-reverse items-center gap-3",
          className
        )}
      >
        <a className={cn("text-sm text-king-brown")}>Logga in</a>
        <LockIcon className="w-5 text-king-brown" />
      </div>
    </div>
  );
};
