import { cn } from "@/lib/utils";

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
        <AuthIcon className="w-4 text-king-brown" />
      </div>
    </div>
  );
};

const AuthIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="21"
      fill="none"
      viewBox="0 0 18 21"
      className={className}
    >
      <path
        fill="#502314"
        d="M15.875 9.25h-.938V6.437A5.945 5.945 0 009 .5a5.945 5.945 0 00-5.938 5.938V9.25h-.937C1.09 9.25.25 10.09.25 11.125v7.5c0 1.035.84 1.875 1.875 1.875h13.75c1.035 0 1.875-.84 1.875-1.875v-7.5c0-1.035-.84-1.875-1.875-1.875zm-4.063 0H6.189V6.437A2.816 2.816 0 019 3.626a2.816 2.816 0 012.813 2.813V9.25z"
      ></path>
    </svg>
  );
};
