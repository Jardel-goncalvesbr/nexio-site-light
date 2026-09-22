import Header from "./components2/Header";
import Hero from "./components2/Hero";
import LogosStrip from "./components2/LogosStrip";
import Services from "./components2/Services";
import Moments from "./components2/Moments";
import Technology from "./components2/Technology";
import Powerful from "./components2/Powerful";
import Portfolio from "./components2/Portfolio";
import Results from "./components2/Results";
import Faq from "./components2/Faq";
import Contact from "./components2/Contact";
import Footer from "./components2/Footer";
import WhatsFloat from "./components2/WhatsFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <Hero />
      <LogosStrip />
      <Services />
      <Moments />
      <Technology />
      <Powerful />
      <Portfolio />
      <Results />
      <Faq />
      <Contact />
      <Footer />
      <WhatsFloat />
    </div>
  );
}
