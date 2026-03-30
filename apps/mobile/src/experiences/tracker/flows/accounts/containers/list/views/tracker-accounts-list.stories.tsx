import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerAccountsListViews } from "./tracker-accounts-list.views";

const meta: Meta<typeof TrackerAccountsListViews> = {
  title: "tracker/accounts/list",
  component: TrackerAccountsListViews,
  parameters: { layout: "fullscreen" },
  argTypes: {
    screenState: {
      control: { type: "select" },
      options: ["default", "empty", "loading", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrackerAccountsListViews>;

export const Default: Story = { args: { screenState: "default" } };
export const Empty: Story = { args: { screenState: "empty" } };
export const Loading: Story = { args: { screenState: "loading" } };
export const Error: Story = { args: { screenState: "error" } };
