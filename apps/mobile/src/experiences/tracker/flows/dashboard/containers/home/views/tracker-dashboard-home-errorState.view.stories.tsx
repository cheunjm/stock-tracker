import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerDashboardHomeErrorStateView } from "./tracker-dashboard-home-errorState.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerDashboardHomeErrorStateView> = {
  title: "tracker/dashboard/home/errorState.view",
  component: TrackerDashboardHomeErrorStateView,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TrackerDashboardHomeErrorStateView>;

export const Default: Story = {};

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-dashboard-home-errorState.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerDashboardHomeErrorStateView />,
        },
      ]}
    />
  ),
};
