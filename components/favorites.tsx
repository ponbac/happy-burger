import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Favorites = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-8 py-16",
        className
      )}
    >
      <h1 className="cursor-default text-5xl font-bold text-king-brown">
        Våra favoriter
      </h1>
      <div className="flex flex-row gap-6">
        <BurgerCard
          name="Gourmet Grill Triple Cheese"
          image="/images/gourmet_triple_cheese.png"
        />
        <BurgerCard
          name="Chili Mayo Bacon King"
          image="/images/chili-mayo-beef.png"
        />
        <BurgerCard name="Flexi Royale" image="/images/pb-royale.png" />
        <BurgerCard name="Steakhouse" image="/images/steakhouse-beef.png" />
      </div>
    </div>
  );
};

const BurgerCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="group relative flex w-72 flex-col items-center justify-center gap-20 px-8 py-12 hover:cursor-pointer">
      {/* Sliding beige background */}
      <div className="absolute top-0 -z-10 h-40 w-72 rounded-lg bg-king-beige transition-all duration-300 group-hover:h-full" />
      {/* Fade-in button */}
      <button
        className={cn(
          "absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-king-orange text-xl font-bold text-king-white",
          "outline outline-1 outline-offset-[16px] outline-king-orange",
          "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        )}
      >
        <ArrowRight />
      </button>
      <Image
        src={image}
        alt="Tasty burger"
        width={400 * 0.55}
        height={290 * 0.55}
      />
      <h1 className="text-center text-2xl text-king-brown">{name}</h1>
    </div>
  );
};
