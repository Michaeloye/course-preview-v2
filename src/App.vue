<script setup>
import Navbar from '~/components/Navbar.vue';

</script>

<template>
  <Navbar />
  <div class="h-[calc(100vh_-_70px)] py-2 px-1 rounded-t-xl bg-white overflow-auto">
    <RouterView />
  </div>
</template>
