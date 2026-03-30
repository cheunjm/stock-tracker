import { memo, type ReactNode } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import type { TrackerDashboardHomeScreenState } from "../models/tracker-dashboard-home.type";
import { TrackerDashboardHomeEligibilityBadgeView } from "./tracker-dashboard-home-eligibilityBadge.view";
import { TrackerDashboardHomeSpendSummaryCardView } from "./tracker-dashboard-home-spendSummaryCard.view";
import { TrackerDashboardHomeSaCardView } from "./tracker-dashboard-home-saCard.view";
import { TrackerDashboardHomeRefreshFabView } from "./tracker-dashboard-home-refreshFab.view";
import { TrackerDashboardHomeEmptyStateView } from "./tracker-dashboard-home-emptyState.view";
import { TrackerDashboardHomeErrorStateView } from "./tracker-dashboard-home-errorState.view";
import { TrackerSkeletonCardView } from "@/experiences/tracker/views";

type TrackerDashboardHomeViewsProps = {
  screenState?: TrackerDashboardHomeScreenState;
  onRefresh?: () => void;
  onRetry?: () => void;
};

export const TrackerDashboardHomeViews = memo(
  ({ screenState = "default", onRefresh }: TrackerDashboardHomeViewsProps) => {
    const content: Record<TrackerDashboardHomeScreenState, ReactNode> = {
      default: (
        <>
          <TrackerDashboardHomeEligibilityBadgeView state="eligible" />
          <View style={styles.spacer16} />
          <TrackerDashboardHomeSpendSummaryCardView
            state="populated"
            totalSpend={12450000}
            goalAmount={30000000}
          />
          <View style={styles.spacer16} />
          <TrackerDashboardHomeSaCardView
            state="eligible"
            name="김서연 SA"
            initial="김"
            boutique="청담 부티크"
            totalSpend={8200000}
          />
          <View style={styles.spacer12} />
          <TrackerDashboardHomeSaCardView
            state="noPurchases"
            name="박지민 SA"
            initial="박"
            boutique="신세계 부티크"
            totalSpend={4250000}
          />
        </>
      ),
      empty: (
        <>
          <TrackerDashboardHomeEligibilityBadgeView state="notEligible" />
          <View style={styles.spacer16} />
          <TrackerDashboardHomeEmptyStateView />
        </>
      ),
      loading: (
        <>
          <TrackerSkeletonCardView width={350} height={36} />
          <View style={styles.spacer16} />
          <TrackerSkeletonCardView width={350} height={100} />
          <View style={styles.spacer16} />
          <TrackerSkeletonCardView width={350} height={68} />
          <View style={styles.spacer12} />
          <TrackerSkeletonCardView width={350} height={68} />
        </>
      ),
      error: <TrackerDashboardHomeErrorStateView />,
    };

    return (
      <View style={styles.screen}>
        <View style={styles.statusBar} />
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>대시보드</Text>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {content[screenState]}
        </ScrollView>
        {screenState === "default" && (
          <View style={styles.fabContainer}>
            <TrackerDashboardHomeRefreshFabView onPress={onRefresh} />
          </View>
        )}
      </View>
    );
  },
);

TrackerDashboardHomeViews.displayName = "TrackerDashboardHomeViews";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  statusBar: {
    height: 54,
  },
  appBar: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  appBarTitle: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 20,
    color: "#1A1A1A",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  fabContainer: {
    position: "absolute",
    bottom: 96,
    right: 20,
  },
  spacer16: {
    height: 16,
  },
  spacer12: {
    height: 12,
  },
});
