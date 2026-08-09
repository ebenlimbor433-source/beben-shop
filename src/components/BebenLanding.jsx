import '../styles/tokens.css';
import Nav from './Nav';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import PulseSection from './PulseSection';
import EditGrid from './EditGrid';
import AccessCTA from './AccessCTA';
import Footer from './Footer';

export default function BebenLanding() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <PulseSection />
        <EditGrid />
        <AccessCTA />
      </main>
      <Footer />
    </>
  );
}
