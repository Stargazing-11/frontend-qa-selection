<template>
  <div class="group relative flex h-10 w-full rounded transition-all bg-white border border-black"
    :class="{ 'border border-red-500 bg-red-100': error }">

    <div class="flex w-10 items-center justify-center text-xl">
      <slot name="icon"></slot>
    </div>
    <input class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all pl-2"
      :placeholder="placeholder" :type="type" :autocomplete="autocomplete" @input="handleInput" />
  </div>
  <div v-if="error" class="text-red-500 text-xs mt-1 self-start">{{ errorMessage }}</div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>
