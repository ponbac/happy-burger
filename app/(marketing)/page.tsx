import { Footer, Header, Hero } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
