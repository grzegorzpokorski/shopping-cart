import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { FaPlus } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "default",
  args: {
    children: "Button",
    variant: "default",
    disabled: false,
  },
  render: (args) => <Button {...args} />,
};

export const Indigo: Story = {
  name: "indigo",
  args: {
    ...Default.args,
    variant: "indigo",
  },
};

export const Red: Story = {
  name: "red",
  args: {
    ...Default.args,
    children: "Button",
    variant: "red",
  },
};

export const IndigoLink: Story = {
  name: "indigo_link",
  args: {
    ...Default.args,
    variant: "indigo_link",
  },
};

export const QuantityButton: Story = {
  name: "quantity_button",
  args: {
    ...Default.args,
    children: <FaPlus />,
    variant: "quantity_button",
  },
};
