"use client";
import { useState } from "react";
import Intro from "../components/Intro";
import HackSim from "../components/HackSim";
import Desktop from "../components/Desktop";

export default function Home() {
  const [stage, setStage] = useState("intro");
  const skip = () => setStage("desktop");
  if (stage === "intro") return <Intro onYes={() => setStage("hack")} onSkip={skip} />;
  if (stage === "hack") return <HackSim onDone={skip} onSkip={skip} />;
  return <Desktop />;
}