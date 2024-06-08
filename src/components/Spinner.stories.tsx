import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@druid-ui/components/Spinner.tsx";
import { spinnerColors } from "@druid-ui/constants.ts";

const meta = {
  title: "Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { size: "default" },
  argTypes: {
    color: {
      options: spinnerColors,
      control: { type: "select" },
    },
    size: {
      options: ["default", "small"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
