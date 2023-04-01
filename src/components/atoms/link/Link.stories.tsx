import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: "default",
  args: {
    variant: "default",
    children: "link content",
  },
  render: (args) => <Link {...args} />,
};

export const Indigo: Story = {
  name: "indigo",
  args: {
    ...Default.args,
    variant: "indigo",
  },
};
