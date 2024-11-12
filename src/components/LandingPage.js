import HeroSection from './Landing/HeroSection';
import TeaserSection from './Landing/TeaserSection';
import FAQ from './Landing/FAQ';
import About from './Landing/AboutUs'
import ContactUs from './Landing/ContactUs'


export default function LandingPage() {
  return (
    <div>

      <HeroSection />
      <TeaserSection />
      <About/>
      <FAQ />
      <ContactUs/>
    </div>
  );
}
