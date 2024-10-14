import SearchField from "./SearchField.vue";

export default {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: "Search courses...",
    },
    searchValue: {
      control: "text",
      defaultValue: "",
    },
  },
};

const Template = (args) => ({
  components: { SearchField },
  setup() {
    return { args };
  },
  template: '<SearchField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search courses...",
  searchValue: "",
};

export const WithInput = Template.bind({});
WithInput.args = {
  placeholder: "Search courses...",
  searchValue: "Machine Learning",
};
