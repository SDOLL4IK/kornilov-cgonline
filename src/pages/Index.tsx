import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCinemaObjects from "@/components/FloatingCinemaObjects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingCinemaObjects />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
