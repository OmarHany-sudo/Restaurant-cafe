import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Testimonials />
        {/* إضافة البطاقة هنا بعد Testimonials */}
        <div className="card">This is a card with hover animation</div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;