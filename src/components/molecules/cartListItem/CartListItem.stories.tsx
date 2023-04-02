import type { Meta, StoryObj } from "@storybook/react";
import { CartListItem } from "./CartListItem";
import { AppProviders } from "../../../providers/AppProviders";

const meta: Meta<typeof CartListItem> = {
  title: "Molecules/CartListItem",
  component: CartListItem,
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CartListItem>;

export const Default: Story = {
  name: "default",
  args: {
    name: "Logitech M330 silent",
    category: "mysz",
    price: 149.99,
    image: {
      url: "/public/images/logitech-m330-silent.jpg",
      height: 532,
      width: 600,
      alt: "czarna myszka logitech m330 silent ukazana z góry",
    },
    availableAmount: 10,
    id: 0,
    qty: 2,
  },
  render: (args) => <CartListItem {...args} />,
};
