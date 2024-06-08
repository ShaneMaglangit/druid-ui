import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@druid-ui/Button.tsx";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Click me" },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { variant: "default" },
  render: (args: Story) => (
    <div className="flex gap-1">
      <Button {...args} />
      <Button disabled {...args} />
    </div>
  ),
};

export const Primary = {
  args: { variant: "primary" },
  render: (args: Story) => (
    <div className="flex gap-1">
      <Button {...args} />
      <Button disabled {...args} />
    </div>
  ),
};

export const Danger = {
  args: { variant: "danger" },
  render: (args: Story) => (
    <div className="flex gap-1">
      <Button {...args} />
      <Button disabled {...args} />
    </div>
  ),
};

export const WithIcon = {
  args: {
    children: (
      <>
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
        Click me
      </>
    ),
  },
  render: (args: Story) => (
    <div className="flex gap-1">
      <Button {...args} />
      <Button {...args} variant="primary" />
      <Button {...args} variant="danger" />
    </div>
  ),
};

export default meta;
