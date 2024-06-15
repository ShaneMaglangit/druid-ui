import { Meta, StoryObj } from "@storybook/react";
import { Pill } from "@druid-ui/pill";
import { pillColors, pillSizes } from "@druid-ui/pill/types.ts";
import { hideArg } from "@druid-ui/storybook/util.ts";
import { ComponentProps } from "react";

const meta = {
  title: "Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { color: "default", size: "default" },
  argTypes: {
    children: { table: { type: { summary: "ReactNode" } }, control: false },
    color: {
      table: { type: { summary: pillColors.join("|") } },
      options: pillColors,
      control: { type: "select" },
    },
    size: {
      table: { type: { summary: pillSizes.join("|") } },
      options: pillSizes,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Pill>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "memory" },
};

export const Colors: Story = {
  argTypes: { color: hideArg, children: hideArg },
  render: (args: ComponentProps<typeof Pill>) => (
    <div className="flex gap-1">
      {pillColors.map((color) => (
        <Pill {...args} color={color}>
          {color}
        </Pill>
      ))}
    </div>
  ),
};

export default meta;
