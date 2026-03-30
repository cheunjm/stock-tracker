import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TrackerHistoryBrowseViews } from "./tracker-history-browse.views";

const meta: Meta<typeof TrackerHistoryBrowseViews> = {
  title: "tracker/history/browse",
  component: TrackerHistoryBrowseViews,
  parameters: { layout: "fullscreen" },
  argTypes: {
    screenState: {
      control: { type: "select" },
      options: ["default", "empty", "loading", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrackerHistoryBrowseViews>;

export const Default: Story = { args: { screenState: "default" } };
export const Empty: Story = { args: { screenState: "empty" } };
export const Loading: Story = { args: { screenState: "loading" } };
export const Error: Story = { args: { screenState: "error" } };
