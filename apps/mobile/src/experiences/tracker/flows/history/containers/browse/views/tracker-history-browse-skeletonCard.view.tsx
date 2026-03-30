import { memo } from "react";
import { TrackerSkeletonCardView } from "@/experiences/tracker/views";

export const TrackerHistoryBrowseSkeletonCardView = memo(() => {
  return <TrackerSkeletonCardView width={310} height={100} />;
});

TrackerHistoryBrowseSkeletonCardView.displayName =
  "TrackerHistoryBrowseSkeletonCardView";
