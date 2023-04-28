import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "flex h-32 w-full flex-col justify-center bg-king-beige px-10",
        "2xl:items-center"
      )}
    >
      <div className="space-y-3">
        <div className={cn("flex flex-row justify-between", "2xl:gap-24")}>
          <div className="flex flex-row gap-8">
            <FooterLink>Meny</FooterLink>
            <FooterLink>King Finder</FooterLink>
            <FooterLink>Kampanjer</FooterLink>
            <FooterLink>Karriär</FooterLink>
            <FooterLink>Hemleverans</FooterLink>
            <FooterLink>Kuponger</FooterLink>
            <FooterLink>Om oss</FooterLink>
            <FooterLink>Hållbarhet</FooterLink>
          </div>
          <div className="flex flex-row gap-5">
            <SocialIcon type="Facebook" />
            <SocialIcon type="Instagram" />
            <SocialIcon type="YouTube" />
            <SocialIcon type="TikTok" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <FooterLink petite>Allergiinformation</FooterLink>
          <FooterLink petite>Näringsinformation</FooterLink>
          <FooterLink petite>Användarvillkor</FooterLink>
          <FooterLink petite>Press</FooterLink>
          <FooterLink petite>Kontakt</FooterLink>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  children,
  petite,
}: {
  children: ReactNode;
  petite?: boolean;
}) => {
  return (
    <a
      className={cn("text-king-brown transition-colors hover:text-king-red", {
        "font-regular text-sm text-king-brown/50": petite,
      })}
      href="#"
    >
      {children}
    </a>
  );
};

const SocialIcon = ({
  type,
}: {
  type: "Facebook" | "Instagram" | "YouTube" | "TikTok";
}) => {
  return (
    <a
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-king-brown opacity-[65%]",
        "transition-all hover:cursor-pointer hover:bg-king-red hover:opacity-100"
      )}
    >
      <Image
        src={`/icons/${type.toLowerCase()}.png`}
        alt=""
        height={20}
        width={20}
      />
    </a>
  );
};
