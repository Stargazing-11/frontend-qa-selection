<template>
    <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur"
        @click="$emit('close')">
        <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300"
            @click.stop data-cy="auth-modal">
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
            <Login v-if="showLoginPart" @setEmail="setEmail" @updateState="updateState" data-cy="login-part" />

            <Register v-if="showRegisterPart" @updateState="updateState" :email="email" data-cy="register-part" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './Login.vue';
import Register from './Register.vue';

const email = ref('')
const showLoginPart = ref(true)
const showRegisterPart = ref(false)

const updateState = (newShowLoginPart, newShowRegisterPart) => {
    // Show loading animation by setting it to true before switching
    setTimeout(() => {
        showLoginPart.value = newShowLoginPart;
        showRegisterPart.value = newShowRegisterPart;
    }, 500); // 500ms delay before changing the modal
};

const setEmail = (newEmail) => {
    email.value = newEmail
}

defineEmits(['close'])
</script>