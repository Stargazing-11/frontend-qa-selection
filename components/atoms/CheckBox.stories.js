// Checkbox.stories.js
import Checkbox from "./CheckBox.vue";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Check me",
    },
    modelValue: {
      control: "boolean",
      defaultValue: false,
    },
    labelClass: {
      control: "text",
      defaultValue: "text-xs text-white/70",
    },
  },
};

const Template = (args) => ({
  components: { MyCheckbox: Checkbox },
  setup() {
    return { args };
  },
  template: '<MyCheckbox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Check me",
  modelValue: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "I am checked",
  modelValue: true,
};
