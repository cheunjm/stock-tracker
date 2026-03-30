import { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type DateFilter = "thisMonth" | "threeMonths" | "thisYear" | "all";

type TrackerHistoryBrowseDateFilterChipsViewProps = {
  selected?: DateFilter;
  onSelect?: (filter: DateFilter) => void;
};

const FILTERS: { key: DateFilter; label: string }[] = [
  { key: "thisMonth", label: "이번 달" },
  { key: "threeMonths", label: "3개월" },
  { key: "thisYear", label: "올해" },
  { key: "all", label: "전체" },
];

export const TrackerHistoryBrowseDateFilterChipsView = memo(
  ({
    selected = "thisMonth",
    onSelect,
  }: TrackerHistoryBrowseDateFilterChipsViewProps) => {
    return (
      <View style={styles.container}>
        {FILTERS.map((filter) => {
          const isSelected = filter.key === selected;
          return (
            <Pressable
              key={filter.key}
              style={[styles.chip, isSelected && styles.chipSelected]}
              onPress={() => onSelect?.(filter.key)}
            >
              <Text
                style={[styles.chipText, isSelected && styles.chipTextSelected]}
              >
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  },
);

TrackerHistoryBrowseDateFilterChipsView.displayName =
  "TrackerHistoryBrowseDateFilterChipsView";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    height: 28,
  },
  chip: {
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
  },
  chipSelected: {
    backgroundColor: "#FF2D55",
    borderColor: "#FF2D55",
  },
  chipText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 11,
    color: "#666",
  },
  chipTextSelected: {
    color: "#FFFFFF",
  },
});
