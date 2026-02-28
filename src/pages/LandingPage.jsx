import Header from '../components/Header';
import Hero from '../components/Hero';
import LiveFeed from '../components/LiveFeed';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen relative selection:bg-primary selection:text-background-dark">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-1/2 transform -translate-x-1/2"></div>
        <div className="floating-orb w-[500px] h-[500px] bg-accent-purple/20 bottom-0 right-[-100px]"></div>
        <div className="floating-orb w-[400px] h-[400px] bg-blue-600/20 bottom-[20%] left-[-100px]"></div>
      </div>

      <Header />

      <main className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
        <Hero />
        <LiveFeed />
        <Features />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
