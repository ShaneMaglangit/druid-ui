import { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuHeader, MenuListItem, MenuList } from "@druid-ui/menu";
import { Button } from "@druid-ui/button";
import { Divider } from "@druid-ui/divider";
import { LogOut } from "lucide-react";

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
          <MenuListItem key={item}>
            <Button as="link" href="#" className="w-full justify-start">
              {item}
            </Button>
          </MenuListItem>
        ))}
        <MenuListItem>
          <Button as="link" href="#" active className="w-full justify-start">
            Contact
          </Button>
        </MenuListItem>
      </MenuList>
    </Menu>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Menu className="w-64">
      <MenuHeader component="h5">Social</MenuHeader>
      <MenuList>
        {["Facebook", "Twitter", "Instagram"].map((item) => (
          <MenuListItem key={item}>
            <Button as="link" href="#" className="w-full justify-start">
              {item}
            </Button>
          </MenuListItem>
        ))}
      </MenuList>
      <Divider />
      <MenuHeader component="h5">Account</MenuHeader>
      <MenuList>
        {["Profile", "Settings"].map((item) => (
          <MenuListItem key={item}>
            <Button as="link" href="#" className="w-full justify-start">
              {item}
            </Button>
          </MenuListItem>
        ))}
      </MenuList>
      <Divider />
      <Button
        as="link"
        href="#"
        color="danger"
        variant="text"
        className="w-full justify-between"
        endIcon={<LogOut size={18} />}
      >
        Logout
      </Button>
    </Menu>
  ),
};

export default meta;
