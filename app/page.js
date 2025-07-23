import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/product";
import Benefits from "./components/Benefits";
import Penghargaan from "./components/penghargaan";
import About from "./components/about";
import Teknologi from "./components/teknologi";
import Testimoni from "./components/TestimonialSection";
import Unggulan from "./components/produkunggulan";
import Skema from "./components/skema";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="unggulan">
        <Unggulan />
      </section>
      <section id="teknologi">
        <Teknologi />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="skema">
        <Skema />
      </section>
      <section id="testimoni">
        <Testimoni />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
