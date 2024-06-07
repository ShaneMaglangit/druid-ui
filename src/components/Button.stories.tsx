import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@druid-ui/components/Button.tsx";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Click me" },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default = {
  render: (args: Story) => (
    <>
      <Button {...args} />
      <Button disabled {...args} />
    </>
  ),
};

export default meta;
