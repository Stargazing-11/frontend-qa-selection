// LoginForm.stories.js
import LoginForm from "./LoginForm.vue";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  argTypes: {
    setEmail: { action: "setEmail", description: "Emits the entered email" },
    email: { control: "text", defaultValue: "user@example.com" },
    loading: { control: "boolean", defaultValue: false },
    emailError: { control: "boolean", defaultValue: false },
  },
};

export const Default = {
  render: (args) => ({
    components: { LoginForm },
    setup() {
      return { args };
    },
    template: '<LoginForm v-bind="args" />',
  }),
};

export const Loading = {
  ...Default,
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for DOM to load

    const emailInput = canvasElement.querySelector("input[type='email']");
    emailInput.value = "user@example.com";
    emailInput.dispatchEvent(new Event("input", { bubbles: true }));

    const submitButton = canvasElement.querySelector("button");
    await new Promise((resolve) =>
      setTimeout(() => {
        submitButton.click();
        resolve();
      }, 500)
    );
  },
  args: {
    loading: true,
  },
};

export const InvalidEmail = {
  ...Default,
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for DOM to load

    const emailInput = canvasElement.querySelector("input[type='email']");
    emailInput.value = "invalid-email";
    emailInput.dispatchEvent(new Event("input", { bubbles: true }));

    const submitButton = canvasElement.querySelector("button");
    await new Promise((resolve) =>
      setTimeout(() => {
        submitButton.click();
        resolve();
      }, 500)
    );
  },
  args: {
    emailError: true,
  },
};
