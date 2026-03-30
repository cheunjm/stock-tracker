import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerAccountsListSkeletonCardView } from "./tracker-accounts-list-skeletonCard.view";
import { FigmaDocLayout } from "@/shared/storybook/FigmaDocLayout";

const meta: Meta<typeof TrackerAccountsListSkeletonCardView> = {
  title: "tracker/accounts/list/skeletonCard.view",
  component: TrackerAccountsListSkeletonCardView,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TrackerAccountsListSkeletonCardView>;

export const Default: Story = {};

export const FigmaMirror: Story = {
  render: () => (
    <FigmaDocLayout
      viewName="tracker-accounts-list-skeletonCard.view"
      variants={[
        {
          name: "default",
          render: () => <TrackerAccountsListSkeletonCardView />,
        },
      ]}
    />
  ),
};
