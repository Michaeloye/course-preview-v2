<script setup>
import ReplyIcon from '~/components/icons/ReplyIcon.vue';

</script>

<template>
  <div>
    <h4 class="font-semibold">Comments (154)</h4>
    <div class="mt-5">
      <div class="relative ">
        <div class="w-[2px] h-[calc(100%_-_100px)] bg-[#e9eaf0] absolute left-4 top-10"></div>

        <!-- Comment -->
        <div class="flex items-start gap-3">
          <div class="bg-gray-900 rounded-full w-10 h-10 flex-shrink-0">
            <!-- <img -->
          </div>

          <div class="flex flex-col items-start gap-1">
            <div class="flex gap-2 items-center">
              <p class="font-semibold">Ronald Richards</p>
              <p class="text-[#6e7485] text-sm">• 1 week ago</p>
            </div>

            <p class="text-[#4e5566]">Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor. </p>
            <button class="flex items-center text-[#8c94a3]">
              <ReplyIcon class="w-6 h-6" />
              Reply
            </button>
          </div>
        </div>

        <!-- sub comment -->
        <div class="relative mt-3 ml-10 flex items-start gap-3">
          <div class="w-6 h-[2px] bg-[#e9eaf0] absolute -left-6 top-4"></div>
          <div class="bg-gray-900 rounded-full w-10 h-10 flex-shrink-0">
            <!-- <img -->
          </div>

          <div class="flex flex-col items-start gap-1">
            <div class="flex gap-2 items-center">
              <p class="font-semibold">Kristin Watson</p>
              <p class="bg-primary-purple p-1 rounded text-white text-sm">Admin</p>
              <p class="text-[#6e7485] text-sm">• 1 week ago</p>
            </div>

            <p class="text-[#4e5566]">Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor. </p>
            <button class="flex items-center text-[#8c94a3]">
              <ReplyIcon class="w-6 h-6" />
              Reply
            </button>
          </div>
        </div>

        <!-- sub comment -->
        <div class="relative mt-3 ml-10 flex items-start gap-3">
          <div class="w-6 h-[2px] bg-[#e9eaf0] absolute -left-6 top-4"></div>

          <div class="bg-gray-900 rounded-full w-10 h-10 flex-shrink-0">
            <!-- <img -->
          </div>

          <div class="flex flex-col items-start gap-1">
            <div class="flex gap-2 items-center">
              <p class="font-semibold">Cody Fisher</p>
              <p class="text-[#6e7485] text-sm">• 1 week ago</p>
            </div>

            <p class="text-[#4e5566]">Thank You so much sir, you're a great mentor.</p>
            <button class="flex items-center text-[#8c94a3]">
              <ReplyIcon class="w-6 h-6" />
              Reply
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>