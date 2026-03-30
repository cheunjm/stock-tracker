import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerAccountsDetailViews } from "./tracker-accounts-detail.views";

const meta: Meta<typeof TrackerAccountsDetailViews> = {
  title: "tracker/accounts/detail",
  component: TrackerAccountsDetailViews,
  parameters: { layout: "fullscreen" },
  argTypes: {
    screenState: {
      control: { type: "select" },
      options: ["default", "loading", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrackerAccountsDetailViews>;

export const Default: Story = { args: { screenState: "default" } };
export const Loading: Story = { args: { screenState: "loading" } };
export const Error: Story = { args: { screenState: "error" } };
