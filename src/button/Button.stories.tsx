import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Box } from "lucide-react";
import {
  ButtonColor,
  buttonColors,
  ButtonVariant,
  buttonVariants,
} from "@druid-ui/button/types.ts";
import { Spinner } from "@druid-ui/spinner";
import { SpinnerColor } from "@druid-ui/spinner/types.ts";
import { hideArg } from "@druid-ui/storybook/util.ts";
import { Button } from "@druid-ui/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    color: "default",
    disabled: false,
    children: "Click me",
    active: false,
  },
  argTypes: {
    as: {
      table: { type: { summary: "button | link" } },
      options: ["button", "link"],
      control: { type: "select" },
    },
    color: {
      table: { type: { summary: buttonColors.join("|") } },
      options: buttonColors,
      control: { type: "select" },
    },
    variant: {
      table: { type: { summary: "default | text" } },
      options: buttonVariants,
      control: { type: "select" },
    },
    active: {
      table: { type: { summary: "boolean" } },
      control: { type: "boolean" },
    },
    children: { table: { type: { summary: "ReactNode" } }, control: false },
    startIcon: { table: { type: { summary: "ReactNode" } }, control: false },
    endIcon: { table: { type: { summary: "ReactNode" } }, control: false },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Link: Story = {
  argTypes: { children: hideArg, startIcon: hideArg, endIcon: hideArg },
  args: { as: "link", href: "#", children: "Go to page" },
};

export const Variants: Story = {
  argTypes: {
    color: hideArg,
    disabled: hideArg,
    as: hideArg,
    variant: hideArg,
    children: hideArg,
    startIcon: hideArg,
    endIcon: hideArg,
  },
  render: () => (
    <div className="flex flex-wrap gap-1">
      {buttonColors.map((color) => (
        <div className="flex flex-col gap-1" key={color}>
          {buttonVariants.map((variant) => (
            <>
              <Button
                key={`${color}-${variant}`}
                color={color}
                variant={variant}
              >
                Normal
              </Button>
              <Button
                key={`${color}-${variant}-disabled`}
                color={color}
                variant={variant}
                disabled
              >
                Disabled
              </Button>
              <Button
                key={`${color}-${variant}-active`}
                as="link"
                active
                color={color}
                variant={variant}
              >
                Active
              </Button>
            </>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  argTypes: { children: hideArg, startIcon: hideArg, endIcon: hideArg },
  args: { startIcon: <Box size={18} /> },
};

export const WithSpinner: Story = {
  argTypes: { children: hideArg, startIcon: hideArg, endIcon: hideArg },
  render: ({
    color = "default",
    variant = "default",
    ...args
  }: ComponentProps<typeof Button>) => {
    const buttonSpinnerColor = {
      default: { default: "default", text: "default" },
      primary: { default: "light", text: "primary" },
      danger: { default: "light", text: "danger" },
    } satisfies Record<ButtonColor, Record<ButtonVariant, SpinnerColor>>;

    return (
      <Button
        {...args}
        color={color}
        variant={variant}
        startIcon={
          <Spinner color={buttonSpinnerColor[color][variant]} size="small" />
        }
      >
        Loading
      </Button>
    );
  },
};

export default meta;
