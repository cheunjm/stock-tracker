import { memo } from "react";
import { TrackerErrorStateView } from "@/experiences/tracker/views";

export const TrackerHistoryBrowseErrorStateView = memo(() => {
  return (
    <TrackerErrorStateView
      testID="history-browse-error-state"
      title="히스토리를 불러올 수 없습니다"
      subtitle="네트워크 연결을 확인하고 다시 시도해주세요"
      retryLabel="다시 시도"
      width={310}
      height={230}
    />
  );
});

TrackerHistoryBrowseErrorStateView.displayName =
  "TrackerHistoryBrowseErrorStateView";
