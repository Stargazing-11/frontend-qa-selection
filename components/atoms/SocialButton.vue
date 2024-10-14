<template>
  <button
    class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 transition-all hover:bg-white/20 active:scale-95"
    :class="buttonClass" @click="$emit('clicked')">
    <img :src="icon" class="h-6" :alt="`${label} logo`">
    <span class="w-60">{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: String,
  icon: String,
  buttonClass: {
    type: String,
    default: ''
  }
});

defineEmits(['clicked']);
</script>
