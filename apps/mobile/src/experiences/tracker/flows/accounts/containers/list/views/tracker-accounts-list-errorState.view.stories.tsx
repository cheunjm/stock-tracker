import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerAccountsListErrorStateView } from "./tracker-accounts-list-errorState.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerAccountsListErrorStateView> = {
  title: "tracker/accounts/list/errorState.view",
  component: TrackerAccountsListErrorStateView,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TrackerAccountsListErrorStateView>;

export const Default: Story = {};

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-accounts-list-errorState.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerAccountsListErrorStateView />,
        },
      ]}
    />
  ),
};
