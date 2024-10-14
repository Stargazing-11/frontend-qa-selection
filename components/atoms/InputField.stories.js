// InputField.stories.js
import InputField from "./InputField.vue";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: "Enter text here",
    },
    type: {
      control: "text",
      defaultValue: "text",
    },
    autocomplete: {
      control: "text",
      defaultValue: "off",
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    errorMessage: {
      control: "text",
      defaultValue: "Error message",
    },
    modelValue: {
      control: "text",
      defaultValue: "",
    },
  },
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: `
  <InputField v-bind="args">
    <template #icon>
      <i class="fa fa-solid fa-envelope text-base">
      </i>
    </template>
  </InputField>
`,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here",
  modelValue: "",
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Enter text here",
  modelValue: "",
  error: true,
  errorMessage: "Invalid input",
};
