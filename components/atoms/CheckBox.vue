<template>
    <div class="flex items-center gap-2 cursor-pointer" @click="toggleCheck">
        <div class="relative h-4 w-4 rounded border transition-all border-white/50 hover:border-white bg-black">
            <i v-show="isChecked"
                class="fa fa-check absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-sm"></i>
        </div>
        <label :class="labelClass">{{ label }}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: Boolean,
    label: String,
    labelClass: {
        type: String,
        default: 'text-xs text-white/70'
    }
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});

function toggleCheck() {
    isChecked.value = !isChecked.value;
}
</script>

<style scoped>
/* Additional styles can be added if needed */
</style>