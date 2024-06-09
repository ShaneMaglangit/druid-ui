import type { Meta, StoryObj } from "@storybook/react";
import Button from "@druid-ui/button/index.ts";
import { ComponentProps } from "react";
import { Box } from "lucide-react";
import { ButtonColor, buttonColors } from "@druid-ui/button/types.ts";
import Spinner from "@druid-ui/spinner/Spinner.tsx";
import { SpinnerColor } from "@druid-ui/spinner/types.ts";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    color: "default",
    iconPlacement: "left",
    disabled: false,
    children: "Click me",
  },
  argTypes: {
    as: {
      table: { type: { summary: "button | link" } },
      options: ["button", "link"],
      control: { type: "select" },
    },
    children: { table: { type: { summary: "ReactNode" } }, control: false },
    color: {
      table: { type: { summary: buttonColors.join("|") } },
      options: buttonColors,
      control: { type: "select" },
    },
    icon: { table: { type: { summary: "ReactNode" } }, control: false },
    iconPlacement: {
      table: { type: { summary: "left | right" } },
      options: ["left", "right"],
      control: { type: "select" },
    },
    disabled: {
      table: { type: { summary: "boolean" } },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Link: Story = {
  args: { as: "link", href: "#", children: "Go to page" },
};
export const WithIcon: Story = { args: { icon: <Box /> } };
export const WithSpinner: Story = {
  render: ({ color = "default", ...args }: ComponentProps<typeof Button>) => {
    const buttonSpinnerColor = {
      default: "default",
      primary: "light",
      danger: "light",
    } satisfies Record<ButtonColor, SpinnerColor>;

    return (
      <Button
        {...args}
        color={color}
        icon={<Spinner color={buttonSpinnerColor[color]} className="h-6 w-6" />}
      >
        Loading
      </Button>
    );
  },
};

export default meta;
