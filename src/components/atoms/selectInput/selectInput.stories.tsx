import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Atoms/SelectInput",
  component: SelectInput,
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  name: "default",
  args: {
    label: "Select label",
    name: "inputName",
    options: [
      { label: "Od najstarszego", value: "1" },
      { label: "Od najnowszego", value: "2" },
    ],
    currentValue: "1",
  },
  render: (args) => <SelectInput {...args} />,
};
