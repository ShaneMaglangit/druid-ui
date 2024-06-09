import { Meta, StoryObj } from "@storybook/react";
import Menu, { MenuHeader, MenuItem, MenuList } from "./Menu.tsx";
import Button from "@druid-ui/button";
import { Divider } from "@druid-ui/divider";

const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu className="w-64">
      <MenuList>
        {["Home", "Blog", "Shop"].map((item) => (
          <MenuItem key={item}>
            <Button as="link" href="#" fullWidth className="justify-start">
              {item}
            </Button>
          </MenuItem>
        ))}
        <MenuItem>
          <Button as="link" href="#" active fullWidth className="justify-start">
            Contact
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Menu className="w-64">
      <MenuHeader component="h5">Social</MenuHeader>
      <MenuList>
        {["Facebook", "Twitter", "Instagram"].map((item) => (
          <MenuItem key={item}>
            <Button as="link" href="#" fullWidth className="justify-start">
              {item}
            </Button>
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
      <MenuHeader component="h5">Account</MenuHeader>
      <MenuList>
        {["Profile", "Settings"].map((item) => (
          <MenuItem key={item}>
            <Button as="link" href="#" fullWidth className="justify-start">
              {item}
            </Button>
          </MenuItem>
        ))}
        <MenuItem>
          <Button
            as="link"
            href="#"
            color="danger"
            variant="text"
            fullWidth
            className="justify-start"
          >
            Logout
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  ),
};

export default meta;
