import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "@druid-ui/spinner/Spinner.tsx";
import { spinnerColors, spinnerSizes } from "@druid-ui/spinner/types.ts";

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
      options: spinnerSizes,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
