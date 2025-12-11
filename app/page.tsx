import { Hero } from "@/components/Hero";
import { TaleOfTape } from "@/components/TaleOfTape";
import { EngagementParadox } from "@/components/EngagementParadox";
import { ParetoRule } from "@/components/ParetoRule";
import { DoubleAgents } from "@/components/DoubleAgents";
import { HallOfFame } from "@/components/HallOfFame";
import { WallOfShame } from "@/components/WallOfShame";
import { FlipFloppers } from "@/components/FlipFloppers";
import { FinalVerdict } from "@/components/FinalVerdict";
import { Methodology } from "@/components/Methodology";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-deep">
      <Hero />
      <TaleOfTape />
      <EngagementParadox />
      <ParetoRule />
      <DoubleAgents />
      <HallOfFame />
      <WallOfShame />
      <FlipFloppers />
      <FinalVerdict />
      <Methodology />
    </main>
  );
}
