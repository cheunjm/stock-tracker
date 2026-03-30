import { memo } from "react";
import { TrackerPurchaseRowView } from "@/experiences/tracker/views";

type TrackerHistoryBrowsePurchaseRowViewProps = {
  type?: "regular" | "tank";
  productName?: string;
  date?: string;
  amount?: number;
};

export const TrackerHistoryBrowsePurchaseRowView = memo(
  (props: TrackerHistoryBrowsePurchaseRowViewProps) => {
    return <TrackerPurchaseRowView {...props} />;
  },
);

TrackerHistoryBrowsePurchaseRowView.displayName =
  "TrackerHistoryBrowsePurchaseRowView";
