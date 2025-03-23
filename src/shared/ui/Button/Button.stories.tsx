import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["clear", "outlined", "filled"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "radio",
      options: ["primary", "secondary", "basic"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "clear",
    size: "medium",
    color: "primary",
    disabled: false,
    children: "Click me",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    color: "secondary",
    children: "Outlined Button",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    size: "large",
    color: "primary",
    children: "Filled Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "clear",
    size: "medium",
    color: "basic",
    disabled: true,
    children: "Disabled Button",
  },
};
