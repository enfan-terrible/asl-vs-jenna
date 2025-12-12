import { TheEnablersPage } from "@/components/pages/TheEnablers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Enablers | Court of Public Opinion",
  description:
    "100 classified enabler profiles. 50 infiltrators. Search by username to find yourself. These users appeared in both chats, pushing 'both sides' narratives and discouraging legal action.",
};

export default function EnablersRoute() {
  return <TheEnablersPage />;
}
