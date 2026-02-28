import CursorTrail from '@/components/CursorTrail';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Demo from '@/components/Demo';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <CursorTrail />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Demo />
      <LeadForm />
      <Footer />
    </main>
  );
}
