import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { MobileLabStrip } from "../components/MobileLabStrip";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col">
      {/* 1. Fixed/Sticky Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. React Native Mobile Lab Strip */}
      <MobileLabStrip />

      {/* 4. About Me Section */}
      <AboutMe />

      {/* 5. Skills Section */}
      <Skills />

      {/* 6. Portfolio Section */}
      <Portfolio />

      {/* 7. Contact Section */}
      <Contact />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
