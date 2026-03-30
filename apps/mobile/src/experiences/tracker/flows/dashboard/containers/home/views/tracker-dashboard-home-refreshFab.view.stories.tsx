import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerDashboardHomeRefreshFabView } from "./tracker-dashboard-home-refreshFab.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerDashboardHomeRefreshFabView> = {
  title: "tracker/dashboard/home/refreshFab.view",
  component: TrackerDashboardHomeRefreshFabView,
  parameters: { layout: "centered" },
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "loading"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrackerDashboardHomeRefreshFabView>;

export const Default: Story = { args: { state: "default" } };
export const Loading: Story = { args: { state: "loading" } };

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-dashboard-home-refreshFab.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerDashboardHomeRefreshFabView state="default" />,
        },
        {
          name: "loading",
          render: () => <TrackerDashboardHomeRefreshFabView state="loading" />,
        },
      ]}
    />
  ),
};
