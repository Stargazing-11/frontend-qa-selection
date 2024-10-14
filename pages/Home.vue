<!-- pages/DummyScreen.vue -->
<template>
    <div class="h-screen flex flex-col items-center justify-center bg-green-100 text-black">
      <h1 class="text-4xl font-bold">Welcome!</h1>
      <p class="mt-4 text-lg">You have successfully logged in.</p>
      <nuxt-link to="/" class="mt-6 text-blue-500 underline">Go back to Home</nuxt-link>
    </div>
  </template>
  
  <script setup>
  // No script is necessary for this simple page
  </script>
  
  <style scoped>
  /* You can add any additional styling here */
  </style>
  