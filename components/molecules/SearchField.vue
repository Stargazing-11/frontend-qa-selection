<template>
  <div class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center">
    <div class="pointer-events-auto relative h-full w-3/5 rounded-md pt-2 transition-all sm:w-1/3">
      <div class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm">
        <div class="shrink-0 cursor-pointer text-lg transition-all hover:scale-110">
          <i class="fa fa-solid fa-search"></i>
        </div>
        <input maxlength="100" role="presentation" autocomplete="new-password"
          class="h-full w-0 flex-1 bg-transparent text-white outline-none" placeholder="Search courses...">
        <div class="relative z-20 shrink-0 cursor-pointer text-sm text-gray-400 hover:text-white">
          <i class="fa fa-solid fa-circle-xmark hidden"></i>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>