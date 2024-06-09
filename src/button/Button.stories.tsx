import type { Meta, StoryObj } from "@storybook/react";
import Button from "@druid-ui/button/index.ts";
import { ComponentProps } from "react";
import { Box } from "lucide-react";
import {
  ButtonColor,
  buttonColors,
  ButtonVariant,
  buttonVariants,
} from "@druid-ui/button/types.ts";
import Spinner from "@druid-ui/spinner/Spinner.tsx";
import { SpinnerColor } from "@druid-ui/spinner/types.ts";
import { hideArg } from "@druid-ui/storybook/util.ts";

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
    variant: {
      table: { type: { summary: "default | text" } },
      options: buttonVariants,
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

export const Variants: Story = {
  argTypes: {
    color: hideArg,
    iconPlacement: hideArg,
    disabled: hideArg,
    as: hideArg,
    variant: hideArg,
    children: hideArg,
    icon: hideArg,
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

export const WithIcon: Story = { args: { icon: <Box size={18} /> } };

export const WithSpinner: Story = {
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
        icon={
          <Spinner
            color={buttonSpinnerColor[color][variant]}
            className="h-6 w-6"
          />
        }
      >
        Loading
      </Button>
    );
  },
};

export default meta;
