import { HisTrackRecordPage } from "@/components/pages/HisTrackRecord";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "His Track Record | Court of Public Opinion",
  description:
    "198 documented references to pattern behavior from ASL's own audience. His own subscribers were asking these questions long before Jenna.",
};

export default function TrackRecordRoute() {
  return <HisTrackRecordPage />;
}
