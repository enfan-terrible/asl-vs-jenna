import { TheCensoredChatPage } from "@/components/pages/TheCensoredChat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Censored Chat | Court of Public Opinion",
  description:
    "Evidence of chat suppression in ASL's stream. The 'positive' chat was manufactured through deletion. 83 references to censorship. Jenna was blocked from defending herself.",
};

export default function CensoredChatRoute() {
  return <TheCensoredChatPage />;
}
