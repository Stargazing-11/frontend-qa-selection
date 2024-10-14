import TermsAndConditions from "./TermsAndConditions.vue";

export default {
  title: "Components/TermsAndConditions",
  component: TermsAndConditions,
};

const Template = (args) => ({
  components: { TermsAndConditions },
  setup() {
    return { args };
  },
  template: '<TermsAndConditions v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

// Add more states if necessary
