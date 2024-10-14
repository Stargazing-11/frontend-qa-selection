import Button from "./Button.vue"; // Update the path to where your button component file is located

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    isLoading: { control: "boolean" },
    isDisabled: { control: "boolean" },
    buttonClass: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Enter",
  isLoading: false,
  isDisabled: false,
  buttonClass: "",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  label: "Loading...",
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
