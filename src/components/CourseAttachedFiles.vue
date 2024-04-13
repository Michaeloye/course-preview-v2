<script setup>
import FileIcon from '~/components/icons/FileIcon.vue';

</script>

<template>
  <div>
    <h4 class="font-semibold">Attached Files (2)</h4>

    <div
      class="mt-3 bg-[#f9fAfb] p-4 rounded-md flex flex-col md:flex-row items-start md:justify-between md:items-center gap-2">
      <div class="flex items-start gap-2">
        <div class="text-primary-purple">
          <FileIcon class="w-9 h-9" />
        </div>

        <div>
          <p class="font-semibold">Create account on webflow.pdf</p>
          <p class="mt-1 text-[#6e7485] text-sm">12.6 MB</p>
        </div>
      </div>
      <button class="py-2 px-4 text-sm bg-primary-purple rounded-lg text-white">
        Download File
      </button>
    </div>
  </div>
</template>