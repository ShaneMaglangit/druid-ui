#!/usr/bin/zsh

# How to use
# ./scripts/new.sh <component_name>

COMPONENT_PATH="src/components/$1.tsx"
STORY_PATH="src/components/$1.stories.tsx"

# Create a new component
cat <<EOF > $COMPONENT_PATH
import { forwardRef } from "react";

const $1 = forwardRef<HTMLDivElement>(function $1(props, ref) {
  return <div ref={ref} {...props}></div>;
});

export default $1;
EOF

# Create a new story
cat <<EOF > $STORY_PATH
import { Meta, StoryObj } from "@storybook/react";
import $1 from "@druid-ui/components/$1.tsx";

const meta = {
  title: "$1",
  component: $1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof $1>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
EOF
