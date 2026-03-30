import { memo } from "react";
import { TrackerEmptyStateView } from "@/experiences/tracker/views";

export const TrackerHistoryBrowseEmptyStateView = memo(() => {
  return (
    <TrackerEmptyStateView
      title="구매 내역이 없습니다"
      subtitle="구매를 기록하면 여기에 표시됩니다"
      ctaLabel="구매 기록하기"
      width={310}
      height={210}
    />
  );
});

TrackerHistoryBrowseEmptyStateView.displayName =
  "TrackerHistoryBrowseEmptyStateView";
