import type { Meta, StoryObj } from "@storybook/react";
import { ProductListItem } from "./ProductListItem";
import { AppProviders } from "../../../providers/AppProviders";

const meta: Meta<typeof ProductListItem> = {
  title: "Molecules/ProductListItem",
  component: ProductListItem,
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductListItem>;

export const Available: Story = {
  name: "available",
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
    availableAmount: 1,
  },
  render: (args) => <ProductListItem {...args} />,
};

export const Unavailable: Story = {
  name: "unavailable",
  args: { ...Available.args, availableAmount: 0 },
};
