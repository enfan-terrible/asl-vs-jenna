import { TheGaslightingPage } from "@/components/pages/TheGaslighting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gaslighting | Court of Public Opinion",
  description:
    "167 documented DARVO instances from ASL's chat. Weaponized therapy language, armchair BPD diagnoses, and victim reversal tactics exposed with evidence.",
};

export default function GaslightingRoute() {
  return <TheGaslightingPage />;
}
