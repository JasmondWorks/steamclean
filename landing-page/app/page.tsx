import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Plugins from "../components/Plugins";
import Tradeoffs from "../components/Tradeoffs";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Plugins />
      <Tradeoffs />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
