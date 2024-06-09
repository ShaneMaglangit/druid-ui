import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
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
    onClick: fn(),
    color: "default",
    iconPlacement: "left",
    disabled: false,
  },
  argTypes: {
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
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Click me" },
};

export const WithIcon: Story = {
  args: {
    icon: <Box />,
    children: "Click me",
  },
};

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
