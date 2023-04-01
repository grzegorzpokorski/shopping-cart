import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  name: "default",
  args: {
    as: "h1",
    children: "Title content",
  },
  render: (args) => <Title {...args} />,
};
