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
      <h5 className="text-md font-medium">Replication Lag</h5>
      <Divider />
      <p>
        Creating copies of a database is a common strategy to improve the
        availability of data storage.
      </p>
    </div>
  ),
};

export default meta;
