import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}
export const NavBar = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-between gap-4 py-4 xl:justify-center xl:gap-16",
        className
      )}
      {...props}
    >
      {/* BK-logo */}
      <Image
        src="/images/header-logo.svg"
        alt="Burger King logo"
        width={61}
        height={61}
        className="cursor-pointer"
      />
      {/* Menu items */}
      <div className="flex flex-row items-center justify-center gap-10">
        <MenuItem name="Meny" />
        <MenuItem name="King Finder" />
        <MenuItem name="Kampanjer" />
        <MenuItem name="Karriär" />
        <MenuItem name="Hemleverans" />
        <MenuItem name="Kuponger" />
        <MenuItem name="Om oss" />
        <MenuItem name="Hållbarhet" />
      </div>
      {/* Find restaurant button */}
      <button
        className={cn(
          "h-12 items-center justify-center rounded-md border border-king-red bg-king-red px-6 text-base text-[#f5ebdc]",
          "transition-colors duration-300 hover:bg-[#f5ebdc] hover:text-king-red"
        )}
      >
        Hitta restaurang
      </button>
    </header>
  );
};

const MenuItem = ({ name }: { name: string }) => {
  return (
    <a
      className={cn(
        "cursor-pointer font-regular text-base font-semibold text-king-brown",
        "transition-colors duration-300 hover:text-king-red"
      )}
    >
      {name}
    </a>
  );
};
