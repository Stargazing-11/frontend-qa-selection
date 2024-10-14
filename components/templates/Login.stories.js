// Login.stories.js
import Login from "./Login.vue";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    setEmail: { action: "setEmail", description: "Emits the entered email" },
    updateState: {
      action: "updateState",
      description: "Switches the state of the component",
    },
  },
};

// Default view with empty email input
export const Default = {
  render: (args) => ({
    components: { Login },
    setup() {
      return { args };
    },
    template: '<Login v-bind="args" />',
  }),
  args: {},
};

// Invalid Email Entry - Triggers validation error
export const InvalidEmail = {
  ...Default,
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for DOM to load

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
};

// Loading State - Displays loading spinner after submitting valid email
export const LoadingState = {
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
      }, 1000)
    );
  },
  args: {
    loading: true,
  },
};

// User Exists - Simulates user existing scenario
export const UserExists = {
  ...Default,
  play: async ({ canvasElement, args }) => {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for DOM to load

    const emailInput = canvasElement.querySelector("input[type='email']");
    emailInput.value = "test@gmail.com";
    emailInput.dispatchEvent(new Event("input", { bubbles: true }));

    const submitButton = canvasElement.querySelector("button");
    await new Promise((resolve) =>
      setTimeout(() => {
        submitButton.click();
        resolve();
      }, 500)
    );
    args.updateState("updateState", true, false); // Emulate closing the login modal
  },
};

// Interactive - Emulates form submission and state change
export const Interactive = {
  ...Default,
  play: async ({ canvasElement, args }) => {
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

    // Emit events after submission
    setTimeout(() => {
      args.setEmail(emailInput.value);
      args.updateState(false, true);
    }, 1000);
  },
};
