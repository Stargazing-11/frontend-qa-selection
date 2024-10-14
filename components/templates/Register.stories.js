// Register.stories.js
import Register from "./Register.vue";

export default {
  title: "Components/Register",
  component: Register,
  argTypes: {
    close: { action: "close", description: "Closes the modal" },
    showLogin: { action: "showLogin", description: "Navigates back to login" },
  },
};

// Default views
export const Default = {
  render: (args) => ({
    components: { Register },
    setup() {
      return { args };
    },
    template: '<Register v-bind="args" />',
  }),
  args: {
    email: "test@example.com", // You can specify an email here if needed
  },
};

export const PasswordMismatch = {
  ...Default,
  play: async ({ canvasElement }) => {
    const passwordInput = canvasElement.querySelector(
      "input[placeholder='Password']"
    );
    const confirmPasswordInput = canvasElement.querySelector(
      "input[placeholder='Confirm Password']"
    );

    if (passwordInput && confirmPasswordInput) {
      passwordInput.value = "Password123";
      confirmPasswordInput.value = "DifferentPassword";

      passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
      confirmPasswordInput.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      throw new Error("Password or Confirm Password input not found.");
    }

    const submitButton = canvasElement.querySelector(
      "[data-cy='submit-button']"
    );
    if (submitButton) {
      submitButton.click(); // Simulate form submission
    } else {
      throw new Error("Submit button not found.");
    }

    await new Promise((resolve) => setTimeout(resolve, 100)); // Give time for error message to appear
    const errorMessage = canvasElement.querySelector(".text-red-500");

    if (!errorMessage || errorMessage.textContent.trim() === "") {
      throw new Error("Error message for password mismatch not displayed.");
    }
  },
  args: {
    email: "test@example.com",
  },
};
export const TermsNotAccepted = {
  ...Default,
  play: async ({ canvasElement }) => {
    // Simulate filling out the form correctly
    const nameInput = canvasElement.querySelector("input[placeholder='Name']");
    const surnameInput = canvasElement.querySelector(
      "input[placeholder='Surname']"
    );
    const passwordInput = canvasElement.querySelector(
      "input[placeholder='Password']"
    );
    const confirmPasswordInput = canvasElement.querySelector(
      "input[placeholder='Confirm Password']"
    );

    if (nameInput && surnameInput && passwordInput && confirmPasswordInput) {
      nameInput.value = "John";
      surnameInput.value = "Doe";
      passwordInput.value = "Password123!";
      confirmPasswordInput.value = "Password123!";

      nameInput.dispatchEvent(new Event("input", { bubbles: true }));
      surnameInput.dispatchEvent(new Event("input", { bubbles: true }));
      passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
      confirmPasswordInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    const submitButton = canvasElement.querySelector("button");
    if (submitButton) {
      submitButton.click(); // Simulate form submission

      await new Promise((resolve) => {
        setTimeout(() => {
          submitButton.click();
          resolve();
        }, 100); // Wait for potential re-render/update
      });
    }
  },
};

// Interactive - Simulate navigation back to login screen
export const BackToLogin = {
  ...Default,
  play: async ({ canvasElement, args }) => {
    const backButton = canvasElement.querySelector(".next-icon");
    backButton.click(); // Simulates clicking the back button
    args.showLogin(); // Emit the showLogin event
  },
  args: {
    email: "test@example.com",
  },
};
