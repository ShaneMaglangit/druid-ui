import { Meta, StoryObj } from "@storybook/react";
import { bannerVariants } from "@druid-ui/banner/types.ts";
import Banner from "@druid-ui/banner/index.ts";

const meta = {
  title: "Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "info",
    children:
      "This is a long banner used to display important information to the user.",
  },
  argTypes: {
    children: { table: { type: { summary: "ReactNode" } }, control: false },
    variant: {
      table: { type: { summary: "info" } },
      options: bannerVariants,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Banner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export default meta;
