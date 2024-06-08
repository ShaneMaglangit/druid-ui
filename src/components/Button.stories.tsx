import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@druid-ui/components/Button.tsx";
import { Spinner } from "@druid-ui/components/Spinner.tsx";
import { buttonColors, spinnerColors } from "@druid-ui/constants.ts";
import { ComponentProps } from "react";
import { Box } from "lucide-react";

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
    const buttonSpinnerColor: Record<
      (typeof buttonColors)[number],
      (typeof spinnerColors)[number]
    > = {
      default: "default",
      primary: "light",
      danger: "light",
    };

    return (
      <Button
        {...args}
        color={color}
        icon={<Spinner size="small" color={buttonSpinnerColor[color]} />}
      >
        Loading
      </Button>
    );
  },
};

export default meta;
