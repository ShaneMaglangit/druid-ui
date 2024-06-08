import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@druid-ui/components/Button.tsx";
import { Spinner } from "@druid-ui/components/Spinner.tsx";
import { buttonColors, spinnerColors } from "@druid-ui/constants.ts";
import { ComponentProps } from "react";

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
    iconOrientation: "left",
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
    iconOrientation: {
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
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
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
