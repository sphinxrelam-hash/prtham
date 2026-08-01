import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndVision from './components/AboutAndVision';
import OurCauses from './components/OurCauses';
import Team from './components/Team';
import YearlyEvents from './components/YearlyEvents';
import PastEventsGallery from './components/PastEventsGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDonateButton from './components/FloatingDonateButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased overflow-x-hidden selection:bg-brand-green-100 selection:text-brand-green-950">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* Animated Hero Section */}
        <Hero />

        {/* Section: Introduction, Goal, and Vision of Pratham Shvaas Foundation */}
        <AboutAndVision />

        {/* Section 3: Our Core Causes */}
        <OurCauses />

        {/* Section 7: Our Members / Core Board Team & General Members */}
        <Team />

        {/* Section: Chronological Year-to-Year Events with Pictures - COMMENTED OUT */}
        {/* <YearlyEvents /> */}

        {/* Section 5: High-Performance 50+ Photo Gallery */}
        <PastEventsGallery /> 
        
        {/* Section 8: Contact / Inquiries Form Section */}
        <Contact />
      </main>

      {/* Footer Details, Quick Links & Copyright */}
      <Footer />

      {/* Floating Action Call-to-action & Interactive Donation Modal */}
      <FloatingDonateButton />
    </div>
  );
}