import { memo } from "react";
import { TrackerEmptyStateView } from "@/experiences/tracker/views";

export const TrackerAccountsListEmptyStateView = memo(() => {
  return (
    <TrackerEmptyStateView
      title="등록된 SA가 없습니다"
      subtitle="담당 SA를 추가해보세요"
      ctaLabel="SA 추가하기"
      width={310}
      height={230}
      testID="accounts-list-empty-state"
    />
  );
});

TrackerAccountsListEmptyStateView.displayName =
  "TrackerAccountsListEmptyStateView";
