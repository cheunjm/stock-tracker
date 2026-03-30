import { memo } from "react";
import { TrackerSkeletonCardView } from "@/experiences/tracker/views";

export const TrackerAccountsListSkeletonCardView = memo(() => {
  return <TrackerSkeletonCardView width={310} height={100} />;
});

TrackerAccountsListSkeletonCardView.displayName =
  "TrackerAccountsListSkeletonCardView";
