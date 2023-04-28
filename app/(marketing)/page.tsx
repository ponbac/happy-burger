import { Favorites } from "@/components/favorites";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { KingFinder } from "@/components/king-finder";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <Hero />
      <Favorites />
      <KingFinder />
      <Footer />
    </main>
  );
}
