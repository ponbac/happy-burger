import { cn } from "@/lib/utils";
import Image from "next/image";
import LocationInput from "./location-input";

export const KingFinder = () => {
  return (
    <div className="flex h-[32rem] w-full flex-row">
      <div className="relative flex w-1/2 flex-col items-center justify-center overflow-hidden bg-king-red">
        <Image
          src="/images/finder-ice-cream.webp"
          width={350}
          height={350}
          alt="Ice cream"
          className="absolute left-0"
        />
        <h1 className="z-10 text-5xl font-bold text-white">Hitta restaurang</h1>
        <LocationInput className="z-10 mt-8" />
      </div>
      <div className="flex w-1/2 items-center justify-center bg-[url('/images/delivery-bg-burger.webp')] bg-cover">
        <div className="flex h-[15rem] w-[30rem] flex-col items-center justify-center gap-8 rounded-md bg-king-orange">
          <h1 className="text-5xl font-bold text-king-brown">
            Blir du hungrig?
          </h1>
          <button
            className={cn(
              "h-12 w-fit items-center justify-center rounded-md bg-king-brown px-5 text-base text-king-white",
              "transition-colors duration-300 hover:bg-king-white hover:text-king-brown"
            )}
          >
            Beställ med hemleverans
          </button>
        </div>
      </div>
    </div>
  );
};
