import { memo } from "react";
import { TrackerEmptyStateView } from "@/experiences/tracker/views";

export const TrackerDashboardHomeEmptyStateView = memo(() => {
  return (
    <TrackerEmptyStateView
      title="아직 구매 내역이 없습니다"
      subtitle="SA를 추가하고 구매를 기록해보세요"
      ctaLabel="SA 추가하기"
      width={340}
      height={240}
    />
  );
});

TrackerDashboardHomeEmptyStateView.displayName =
  "TrackerDashboardHomeEmptyStateView";
