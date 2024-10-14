<template>
    <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur text-white"
        @click="$emit('close')">
        <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300"
            @click.stop>
            <div class="pointer-events-none absolute inset-0 opacity-70">
                <div
                    class="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent">
                </div>
                <div
                    class="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent">
                </div>
                <div
                    class="absolute -left-px bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white to-transparent">
                </div>
                <div
                    class="absolute -right-px bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white to-transparent">
                </div>
            </div>
            <div class="relative z-10 h-full p-5 text-13">
                <div>
                    <!-- Back to Log in button -->
                    <div class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95"
                        @click="$emit('updateState', true, false)">
                        <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16"
                                height="16" viewBox="0 0 16 16" fill="none">
                                <path fill="currentColor"
                                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z">
                                </path>
                                <path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11"
                                    stroke-width="1.5" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        Back to Log in
                    </div>
                    <div class="flex flex-col items-center px-4">
                        <!-- Profile Image Upload Section -->
                        <div class="mb-4 flex w-full items-end gap-6 px-4">
                            <div
                                class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white">
                                <div class="gradient absolute inset-0 opacity-20"
                                    style="background: linear-gradient(15deg, #fff0 9.55%, #fff0 30.28%, #fff6, #fff0 41.58%, #fff0 59.02%, #fff 67.97%, #fff0 74.56%, #fff);">
                                </div>
                                <!-- Show default image or uploaded image -->
                                <img :src="profileImage || defaultProfileImage"
                                    class="absolute inset-0 h-full w-full rounded object-cover" />
                                <div class="absolute inset-0 flex items-center justify-center text-gray-500"
                                    v-if="!profileImage"></div>
                                <input type="file" accept="image/*" class="absolute inset-0 opacity-0"
                                    @change="handleImageUpload" />
                            </div>
                            <div>
                                <div class="mb-1 text-sm font-semibold">
                                    Nice to meet you,
                                </div>
                                <div class="text-xs text-white/70">
                                    Upload a profile picture <br /> and complete your <br /> presentation
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <Checkbox data-cy="terms-checkbox" v-model="checked"
                                label="I accept Terms & Conditions and Privacy Policy"
                                @update:modelValue="handleCheckboxChange" />
                        </div>

                        <div v-if="showError && !checked" class="text-xs text-red-500">
                            You must accept the terms and conditions.
                        </div>

                        <!-- Input Fields -->
                        <div class="mb-4 text-center text-xs">Enter your details</div>
                        <!-- Name Field -->
                        <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
                            <InputField v-model="name" placeholder="Name" type="text" autocomplete="off"
                                :error="v$.name.$error" :errorMessage="v$.name.$error ? 'Name is Required' : ''">
                                <template #icon>
                                    <i class="fa fa-solid fa-user text-base text-black/70"
                                        :class="{ 'text-red-500': v$.name.$error, 'text-black/70': !v$.name.$error }"></i>
                                </template>
                            </InputField>
                        </div>
                        <!-- Name Field -->
                        <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
                            <InputField v-model="surname" placeholder="Surname" type="text" autocomplete="off"
                                :error="v$.surname.$error"
                                :errorMessage="v$.surname.$error ? 'Surname is Required' : ''">
                                <template #icon>
                                    <i class="fa fa-solid fa-user text-base text-black/70"
                                        :class="{ 'text-red-500': v$.surname.$error, 'text-black/70': !v$.surname.$error }">
                                    </i>
                                </template>
                            </InputField>
                        </div>
                        <div class="group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]">
                            <div class="flex w-10 items-center justify-center text-xl">
                                <i class="fa fa-solid fa-envelope text-base text-black/70"></i>
                            </div>
                            <input :value="email" disabled placeholder="Email" maxlength="100"
                                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
                                autocomplete="new-password" type="text" />
                        </div>

                        <!-- Password Field with Strength Indicator and Eye Toggle -->
                        <div class="group relative flex h-10 w-full rounded bg-white border"
                            :class="passwordError ? 'border-red-500' : 'border-gray-300'">
                            <div class="flex w-10 items-center justify-center text-xl">
                                <i class="fa fa-solid fa-key text-base text-black/70"></i>
                            </div>
                            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password"
                                maxlength="100"
                                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none"
                                autocomplete="new-password" @input="checkPasswordStrength" />
                            <i :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'" @click="togglePasswordVisibility"
                                class="absolute right-3 top-[0.7rem] cursor-pointer text-base text-black/50 transition-all"></i>
                        </div>

                        <div class="flex items-center justify-between mb-2 mt-2 w-full">
                            <!-- Error Messages for Password Requirements -->
                            <div v-if="passwordError" class="text-xs text-red-500 mr-2">
                                {{ passwordError }}
                            </div>

                            <!-- Placeholder for alignment if error is missing -->
                            <div v-else class="w-36"></div>

                            <!-- Password Strength Progress Bar -->
                            <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
                                <div class="h-full rounded transition-all duration-300" :class="progressBarColor"
                                    :style="{ width: passwordStrength + '%' }"></div>
                            </div>
                        </div>

                        <!-- Confirm Password Field with Eye Toggle -->
                        <div class="group relative flex h-10 w-full rounded bg-white"
                            :class="passwordError ? 'border-red-500' : 'border-gray-300 mb-6'">
                            <div class="flex w-10 items-center justify-center text-xl">
                                <i class="fa fa-solid fa-key text-base text-black/70"></i>
                            </div>
                            <input v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
                                placeholder="Confirm Password" maxlength="100"
                                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none"
                                autocomplete="new-password" @input="validateConfirmPassword" />
                            <i :class="showConfirmPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"
                                @click="toggleConfirmPasswordVisibility"
                                class="absolute right-3 top-[0.7rem] cursor-pointer text-base text-black/50 transition-all"></i>
                        </div>
                        <div class="flex items-center justify-between mb-2 w-full">
                            <div v-if="confirmPasswordError" class="text-xs text-red-500 mt-1">
                                {{ confirmPasswordError }}
                            </div>
                        </div>
                        <Button :is-loading="loading"
                            :is-disabled="name.trim() === '' || surname.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || confirmPasswordError !== '' || passwordError !== ''"
                            @click="handleSubmit">
                            Enter
                        </Button>
                        <TermsAndConditions />
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useRouter } from 'vue-router';

import TermsAndConditions from '@/components/atoms/TermsAndConditions.vue';
import InputField from '@/components/atoms/InputField.vue';
import Checkbox from '@/components/atoms/CheckBox.vue';
import Button from '@/components/atoms/Button.vue';
import { setItem } from '~/services/storage';

// Router instance
const router = useRouter();  // Get access to the router instance
const name = ref('');
const surname = ref('');
const password = ref('');

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const confirmPassword = ref('');
const passwordStrength = ref(0);
const passwordError = ref('');
const progressBarColor = ref('bg-red-500');
const loading = ref(false);


const rules = {
    name: {
        required: true,
        min: 3,
        max: 30
    },
    surname: {
        required: true,
        min: 3,
        max: 30
    },
}

const v$ = useVuelidate(rules, { name, surname: surname, password, confirmPassword });

const isButtonDisabled = computed(() => {
});


const emit = defineEmits(['updateState']);

const checked = ref(false)
const confirmPasswordError = ref('')

const props = defineProps({
    email: {
        type: String,
        required: true
    }
});

const email = ref(props.email || '');

const showError = ref(false);

const handleSubmit = async () => {
    console.log(email.value);
    const isValid = await v$.value.$validate();
    if (isValid && checked.value) {
        const userData = {
            name: name.value,
            surname: surname.value,
            password: password.value,
            email: email.value  // Ensure to use .value to access the reactive value
        };
        console.log('registering user', userData);
        setItem(email.value, userData); // Store user data
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            router.push('/Home'); // Navigate to Home after registration
        }, 1000);
    } else {
        showError.value = true;
    }
};

// Toggle password visibility
function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
}

function toggleConfirmPasswordVisibility() {
    showConfirmPassword.value = !showConfirmPassword.value;
}

// Check password strength and set error message
function checkPasswordStrength() {
    const lengthRequirement = password.value.length > 8;
    const hasUpper = /[A-Z]/.test(password.value);
    const hasLower = /[a-z]/.test(password.value);
    const hasNumber = /\d/.test(password.value);
    const hasSpecial = /[^\w#]/.test(password.value); // Exclude '#'

    let strength = 0;
    let error = [];

    if (lengthRequirement) strength += 20;
    else error.push('Minimum 8 characters');

    if (hasUpper) strength += 20;
    else error.push('Upper case letter required');

    if (hasLower) strength += 20;
    else error.push('Lower case letter required');

    if (hasNumber) strength += 20;
    else error.push('Number required');

    if (hasSpecial) strength += 20;
    else error.push('Special character required (excluding #)');

    passwordStrength.value = strength;
    passwordError.value = error.length ? error[0] : '';

    // Set progress bar color based on strength
    if (strength <= 40) {
        progressBarColor.value = 'bg-red-500';
    } else if (strength <= 80) {
        progressBarColor.value = 'bg-yellow-500';
    } else {
        progressBarColor.value = 'bg-green-500';
    }
}

const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.value = 'Passwords do not match';
    } else {
        confirmPasswordError.value = '';
    }
};

// Default image URL and profileImage ref
const defaultProfileImage = 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png';
const profileImage = ref('');

// Handle Image Upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        profileImage.value = URL.createObjectURL(file);
        emit('profileImageSelected', file);
    }
}


</script>

<style scoped>
/* Custom styles for the strength indicator */
</style>