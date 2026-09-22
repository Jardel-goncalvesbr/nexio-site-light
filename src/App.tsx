import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm'; // 1. Importa Formulário
import Footer from './components/Footer';           // 2. Importa Rodapé
import Header from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <FAQ />
        <ContactForm /> {/* 3. Renderiza Formulário */}
      </main>

      <Footer /> {/* 4. Renderiza Rodapé fora da tag <main> */}
    </div>
  );
}
