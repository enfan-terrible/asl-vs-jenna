import { Hero } from "@/components/Hero";
import { CensorshipEvidence } from "@/components/CensorshipEvidence";
import { DarvoEvidence } from "@/components/DarvoEvidence";
import { InfiltratorEvidence } from "@/components/InfiltratorEvidence";
import { FinalVerdict } from "@/components/FinalVerdict";
import { Methodology } from "@/components/Methodology";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-deep">
      <Hero />
      <CensorshipEvidence />
      <DarvoEvidence />
      <InfiltratorEvidence />
      <FinalVerdict />
      <Methodology />
    </main>
  );
}
