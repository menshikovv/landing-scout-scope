import DesignProHero from "@/components/DesignProHero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Result from "@/components/Result";
import Pricing from "@/components/Pricing";
import PlayerForm from "@/components/PlayerForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RevealStagger from "@/components/RevealStagger";

export default function Home() {
  return (
    <main className="relative">
      <DesignProHero />
      <RevealStagger>
        <Problem />
      </RevealStagger>
      <RevealStagger>
        <Solution />
      </RevealStagger>
      <RevealStagger>
        <HowItWorks />
      </RevealStagger>
      <RevealStagger>
        <Result />
      </RevealStagger>
      <RevealStagger>
        <Pricing />
      </RevealStagger>
      <RevealStagger>
        <PlayerForm />
      </RevealStagger>
      <RevealStagger>
        <FAQ />
      </RevealStagger>
      <RevealStagger>
        <Footer />
      </RevealStagger>
    </main>
  );
}
