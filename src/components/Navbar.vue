<script setup>
import AlarmIcon from "~/components/icons/AlarmIcon.vue";
import MagicIcon from "~/components/icons/MagicIcon.vue";
</script>

<template>
  <div class="navbar flex items-center select-none py-2">
    <a href="https://app.marketingblocks.ai">
      <img src="https://app.marketingblocks.ai/image/logo.svg" class="h-8" />
    </a>

    <div class="flex items-center ml-auto gap-4">
      <div>
        <!-- <Badge /> -->
      </div>
      <div class="flex items-center justify-center relative w-10 h-10 rounded-full bg-white cursor-pointer">
        <AlarmIcon class="h-5 w-5" />
      </div>

      <button
        class="flex items-center justify-center gap-2 bg-primary-purple text-white border-0 rounded-xl px-4 py-2 text-sm font-medium">
        <MagicIcon class="w-4 h-4" />
        <span>Create With Ai</span>
      </button>

      <img src="https://app.marketingblocks.ai/upload/man.png" />
    </div>
  </div>

</template>


<style scoped>
.navbar {
  position: relative;
  z-index: 999;
  flex-shrink: 0;
  padding-inline: 1rem;
  height: 70px;
}
</style>