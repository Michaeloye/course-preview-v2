<script setup>
import DownloadIcon from '~/components/icons/DownloadIcon.vue';

</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row justify-center items-start md:justify-between gap-2">
      <h4 class="font-semibold">Lectures Notes</h4>
      <button
        class="p-2 flex justify-center items-center gap-2 border border-primary-purple text-primary-purple rounded-lg">
        <DownloadIcon class="w-4 h-4" />
        <p>Download Notes</p>
      </button>
    </div>
    <p class="text-[#667085] mt-3">
      <slot />
    </p>
  </div>
</template>