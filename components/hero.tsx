import { cn } from "@/lib/utils";
import Image from "next/image";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-[42rem] w-screen flex-row items-center justify-between bg-king-green",
        className
      )}
    >
      <Image
        src="/images/hero-burger.webp"
        alt="Juicy burger"
        height={500}
        width={550}
      />
      <div
        className={cn(
          "flex flex-col pl-12 pr-6 pt-16 text-king-white",
          "3xl:pr-24",
          "4xl:pr-56",
        )}
      >
        <h1 className="text-[5rem] font-bold">Flame grilling since 1954</h1>
        <p className="mt-4 w-[30rem] font-regular text-xl">
          Få tillgång till exklusiva erbjudanden, upptäck vår meny, beställ
          hemleverans eller hitta en Burger King restaurang nära dig.
        </p>
        <button className="mt-8 w-fit rounded-md border-2 border-king-white px-11 py-[10px] text-base transition-colors hover:bg-king-white hover:text-black">
          Se vår meny
        </button>
      </div>
    </div>
  );
};
