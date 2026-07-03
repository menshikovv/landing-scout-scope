"use client";

import { useState } from "react";
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

export default function Landing() {
  const [role, setRole] = useState<"scout" | "player">("scout");

  return (
    <main className="relative">
      <DesignProHero role={role} onRoleChange={setRole} />

      {role === "scout" ? (
        <>
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
        </>
      ) : (
        <RevealStagger>
          <PlayerForm />
        </RevealStagger>
      )}

      <RevealStagger>
        <FAQ role={role} />
      </RevealStagger>

      <RevealStagger>
        <Footer />
      </RevealStagger>
    </main>
  );
}
