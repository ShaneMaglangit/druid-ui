import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@druid-ui/divider/index.ts";

const meta = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <p>First paragraph</p>
      <Divider />
      <p>Second paragraph</p>
    </div>
  ),
};

export default meta;
