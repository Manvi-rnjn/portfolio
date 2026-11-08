"use client";
import { useEffect, useState } from "react";

export default function Intro({ onYes, onSkip }) {
  const [step, setStep] = useState(0); // 0 black, 1 text, 2 buttons, 3 declined
  useEffect(() => {
    const a = setTimeout(() => setStep(1), 1200);
    const b = setTimeout(() => setStep((s) => (s === 1 ? 2 : s)), 4500);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);

  return (
    <div className="intro">
      <p className={"intro-text" + (step >= 1 ? " show" : "")}>
        {step === 3 ? "Connection closed. Refresh the page to try again." : "Do you want to proceed?"}
      </p>
      <div className={"intro-actions" + (step === 2 ? " show" : "")}>
        <button onClick={onYes}>Yes</button>
        <button onClick={() => setStep(3)}>No</button>
      </div>
      {step >= 2 && <button className="skip" onClick={onSkip}>Skip intro</button>}
    </div>
  );
}