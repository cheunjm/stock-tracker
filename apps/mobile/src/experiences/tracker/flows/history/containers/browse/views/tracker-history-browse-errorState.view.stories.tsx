import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerHistoryBrowseErrorStateView } from "./tracker-history-browse-errorState.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerHistoryBrowseErrorStateView> = {
  title: "tracker/history/browse/errorState.view",
  component: TrackerHistoryBrowseErrorStateView,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TrackerHistoryBrowseErrorStateView>;

export const Default: Story = {};

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-history-browse-errorState.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerHistoryBrowseErrorStateView />,
        },
      ]}
    />
  ),
};
