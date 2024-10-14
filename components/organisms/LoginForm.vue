<template>
    <div class="mb-6 flex flex-col items-center px-4">
        <InputField v-model="email" placeholder="Email Address" type="email" autocomplete="off" :error="v$.email.$error"
            :errorMessage="v$.email.$error ? 'Invalid Email' : ''">
            <template #icon>
                <i class="fa fa-solid fa-envelope text-base"
                    :class="{ 'text-red-500': v$.email.$error, 'text-black/70': !v$.email.$error }"></i>
            </template>
        </InputField>
        <div class="mb-4"></div>
        <Button :is-loading="loading" :is-disabled="!email.trim()" @click="submitLogin">
            Enter
        </Button>

        <div class="w-full transition-all duration-300">
            <div class="mb-6 flex items-center justify-between gap-4">
                <div class="h-px w-40 bg-gradient-to-r from-transparent to-white"></div>
                <div>Or</div>
                <div class="h-px w-40 bg-gradient-to-r from-white to-transparent"></div>
            </div>
            <SocialLoginButtons />
            <TermsAndConditions />

        </div>
    </div>
</template>

<script setup>
import { ref, } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'
import InputField from '@/components/atoms/InputField.vue'
import Button from '@/components/atoms/Button.vue'
import TermsAndConditions from '@/components/atoms/TermsAndConditions.vue'
import SocialLoginButtons from '@/components/molecules/SocialLoginButtons.vue'
import { useRouter } from 'vue-router'
import { getItem } from '~/services/storage'

const router = useRouter()
const email = ref('')
const loading = ref(false)
const v$ = useVuelidate({
    email: { required, email: emailValidator }
}, { email })

const emit = defineEmits(['setEmail', 'updateState']);

function submitLogin() {
    v$.value.$validate().then((isValid) => {
        if (isValid) {
            const user = getItem(email.value);
            if (user) {
                loading.value = true;
                setTimeout(() => {
                    loading.value = false;
                    router.push('/Home'); // Navigate to Home if user exists
                }, 1000);
            } else {
                loading.value = true;
                setTimeout(() => {
                    loading.value = false;
                    emit('updateState', false, true); // This should trigger the parent to change the modal to registration
                }, 500);
            }
        }
    });
}

// Watch for changes in the email value
watch(email, (newEmail) => {
    emit('setEmail', newEmail); // Emit email whenever it changes
});

// Watch for state updates from the parent component
watch(() => emit('updateState'), () => {
    // Reset the email when switching to registration mode
    email.value = '';
});
</script>