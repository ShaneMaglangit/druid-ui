import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "@druid-ui/dialog";
import { Button } from "@druid-ui/button";
import { ComponentProps, useState } from "react";
import { Divider } from "@druid-ui/divider";
import { XIcon } from "lucide-react";
import { hideArg } from "@druid-ui/storybook/util.ts";

const meta = {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: false },
  argTypes: { isOpen: hideArg },
  render: ({ isOpen: initialState }: ComponentProps<typeof Dialog>) => {
    const [isOpen, setIsOpen] = useState(initialState);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog isOpen={isOpen} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-1">
            <h5 className="text-lg font-bold">Do you want to continue?</h5>
            <XIcon
              className="cursor-pointer"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <p>
            Some important information about the action you are about to take.
            Are you sure you want to continue?
          </p>
          <Divider />
          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)} color="danger">
              Continue
            </Button>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const Dismissible: Story = {
  args: { isOpen: false },
  argTypes: { isOpen: hideArg },
  render: ({ isOpen: initialState }: ComponentProps<typeof Dialog>) => {
    const [isOpen, setIsOpen] = useState(initialState);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog
          isOpen={isOpen}
          className="flex flex-col gap-2"
          backdropProps={{ onClick: () => setIsOpen(false) }}
        >
          <div className="flex items-center justify-between gap-1">
            <h5 className="text-lg font-bold">Do you want to continue?</h5>
            <XIcon
              className="cursor-pointer"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <p>
            Some important information about the action you are about to take.
            Are you sure you want to continue?
          </p>
          <Divider />
          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)} color="danger">
              Continue
            </Button>
          </div>
        </Dialog>
      </div>
    );
  },
};
export default meta;
