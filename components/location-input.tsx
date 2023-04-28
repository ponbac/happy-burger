"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const LocationInput = ({ className }: { className?: string }) => {
  const [location, setLocation] = useState("");

  return (
    <div
      className={cn(
        "flex w-96 flex-row items-center justify-between rounded-md bg-king-white px-4 py-2",
        className
      )}
    >
      <div className="flex flex-col">
        <label className="text-xs text-king-brown" htmlFor="location">
          Din adress
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Ange din plats"
          onChange={(e) => setLocation(e.target.value)}
          className={cn("h-8 w-52 text-base text-king-brown", "outline-none")}
        />
      </div>
      <div className="flex flex-row items-center gap-6">
        <TargetIcon className="text-king-brown hover:cursor-pointer" />
        <button
          className={cn(
            "h-12 w-fit items-center justify-center rounded-md border-2 border-king-red bg-king-red px-8 text-base text-king-beige",

            {
              "cursor-not-allowed": !location,
              "transition-colors duration-300 hover:bg-king-white hover:text-king-red":
                location,
            }
          )}
        >
          Ja
        </button>
      </div>
    </div>
  );
};

const TargetIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19.531 9.25h-1.186a8.443 8.443 0 00-7.095-7.095V.969A.469.469 0 0010.781.5H9.22a.469.469 0 00-.469.469v1.186A8.443 8.443 0 001.655 9.25H.469A.469.469 0 000 9.719v1.562c0 .26.21.469.469.469h1.186a8.443 8.443 0 007.095 7.095v1.186c0 .26.21.469.469.469h1.562c.26 0 .469-.21.469-.469v-1.186a8.443 8.443 0 007.095-7.095h1.186c.26 0 .469-.21.469-.469V9.72a.469.469 0 00-.469-.469zm-8.281 7.056v-1.587a.469.469 0 00-.469-.469H9.22a.469.469 0 00-.469.469v1.587a5.944 5.944 0 01-4.556-4.556h1.587c.26 0 .469-.21.469-.469V9.72a.469.469 0 00-.469-.469H4.194A5.944 5.944 0 018.75 4.694v1.587c0 .26.21.469.469.469h1.562c.26 0 .469-.21.469-.469V4.694a5.944 5.944 0 014.556 4.556h-1.587a.469.469 0 00-.469.469v1.562c0 .26.21.469.469.469h1.587a5.944 5.944 0 01-4.556 4.556zm0-5.806a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
      ></path>
    </svg>
  );
};
