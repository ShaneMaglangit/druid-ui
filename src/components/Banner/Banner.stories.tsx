import { Meta, StoryObj } from "@storybook/react";
import { InfoIcon, TriangleAlert } from "lucide-react";
import { bannerVariants } from "@druid-ui/components/Banner/types.ts";
import Banner from "@druid-ui/components/Banner";

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
    icon: <InfoIcon className="my-0.5 ml-0.5" />,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: <TriangleAlert className="my-0.5 ml-0.5" />,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    icon: <TriangleAlert className="my-0.5 ml-0.5" />,
  },
};

export default meta;
