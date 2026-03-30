import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerHistoryBrowseSkeletonCardView } from "./tracker-history-browse-skeletonCard.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerHistoryBrowseSkeletonCardView> = {
  title: "tracker/history/browse/skeletonCard.view",
  component: TrackerHistoryBrowseSkeletonCardView,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TrackerHistoryBrowseSkeletonCardView>;

export const Default: Story = {};

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-history-browse-skeletonCard.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerHistoryBrowseSkeletonCardView />,
        },
      ]}
    />
  ),
};
