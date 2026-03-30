import { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";

type RefreshFabState = "default" | "loading";

type TrackerDashboardHomeRefreshFabViewProps = {
  state?: RefreshFabState;
  onPress?: () => void;
};

export const TrackerDashboardHomeRefreshFabView = memo(
  ({ state = "default", onPress }: TrackerDashboardHomeRefreshFabViewProps) => {
    return (
      <Pressable
        style={[styles.fab, state === "loading" && styles.fabLoading]}
        onPress={onPress}
        disabled={state === "loading"}
      >
        {state === "loading" ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.icon}>↻</Text>
        )}
      </Pressable>
    );
  },
);

TrackerDashboardHomeRefreshFabView.displayName =
  "TrackerDashboardHomeRefreshFabView";

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FF2D55",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  fabLoading: {
    backgroundColor: "#FF8DA6",
  },
  icon: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
