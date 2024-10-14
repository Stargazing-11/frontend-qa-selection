<template>
  <button
    class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border text-center border-black text-sm mb-6 transition-all duration-300"
    :class="buttonClass" data-cy="submit-button" :disabled="isDisabled || isLoading" @click="onClick">
    <div class="absolute inset-0 opacity-50"
      style="background: linear-gradient(15deg, #fff0 9.55%, #fff0 30.28%, #fff6, #fff0 41.58%, #fff0 59.02%, #fff 67.97%, #fff0 74.56%, #fff);">
    </div>
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
      <i class="fa fa-solid fa-spinner animate-spin text-xs"></i>
    </div>
    <div v-else class="relative z-10">
      <slot>{{ label }}</slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Enter'
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  buttonClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

function onClick() {
  if (!props.isDisabled && !props.isLoading) {
    emit('click');
  }
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
