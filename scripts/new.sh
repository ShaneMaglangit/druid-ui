#!/usr/bin/zsh

# How to use
# ./scripts/new.sh <component_name>

DIR=$(echo $1 | tr '[:upper:]' '[:lower:]')
COMPONENT_PATH="src/$DIR/$1.tsx"
STORY_PATH="src/$DIR/$1.stories.tsx"
INDEX_PATH="src/$DIR/index.ts"

if [ -d "src/$DIR" ]; then
  echo "Directory already exists"
  exit 1
fi

mkdir "src/$DIR"

# Create a new component
cat <<EOF > $COMPONENT_PATH
import { forwardRef } from "react";

export const $1 = forwardRef<HTMLDivElement>(function $1(props, ref) {
  return <div ref={ref} {...props}></div>;
});
EOF

# Create a new story
cat <<EOF > $STORY_PATH
import { Meta, StoryObj } from "@storybook/react";
import { $1 } from "@druid-ui/$DIR";

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

# Create index file
cat <<EOF > $INDEX_PATH
export * from "./$1";
EOF
