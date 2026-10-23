import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Collection from "@/components/sections/Collection";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collection />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
