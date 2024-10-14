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
            <div class="relative z-10 h-full p-5 text-sm">
                <div class="pt-8">
                    <div
                        class="relative mb-6 mt-0 flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300">
                        <div class="absolute inset-0 opacity-15"
                            style="background-image: linear-gradient(15deg, #fff0 8.33%, #fff0 27.43%, #fff6, #fff0 37.85%, #fff0 53.91%, #fff 62.15%, #fff0 68.23%, #fff 91.67%);">
                        </div>
                        <div class="relative flex w-full justify-between transition-all duration-300 opacity-100">
                            <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-20 w-20 object-cover"
                                alt="Aladia logo">
                            <div>
                                <div class="mb-2 text-base font-semibold">Welcome to Aladia,</div>
                                <div class="text-white/70">Create or access your <br> account from here</div>
                            </div>
                        </div>
                        <div
                            class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0">
                            <i class="fa fa-solid fa-spinner animate-spin text-xs bg-white"></i>
                        </div>

                    </div>
                    <div class="mb-6 text-center">Enter your email</div>
                    <LoginForm v-if="isLoginModalOpen" @setEmail="handleSetEmail" @updateState="handleUpdateState" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from '~/components/organisms/LoginForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['setEmail', 'updateState']);


// Define state that might be affected by LoginForm events
const isLoginModalOpen = ref(true);

// Emit from LoginForm might trigger these handlers
function handleSetEmail(email) {
    emit('setEmail', email);
}

function handleUpdateState(closeModal, showRegisterModal) {
    if (closeModal) {
        isLoginModalOpen.value = false;
    }
    if (showRegisterModal) {
        setTimeout(() => {
            emit('updateState', false, true);
        }, 2000);
    }
}
</script>