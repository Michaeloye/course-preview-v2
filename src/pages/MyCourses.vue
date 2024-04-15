<script setup>
import ShareIcon from '~/components/icons/ShareIcon.vue';

const FeaturedCourses = [
  {
    id: 1,
    image: './src/components/images/Mask group (1).png',
    time: 15,
    title: 'True love, Good Sex & Freedom from Porn Addiction',
  },

  {
    id: 1,
    image: './src/components/images/Mask group (1).png',
    time: 26,
    title: 'True love, Good Sex & Freedom from Porn Addiction',
  },

  {
    id: 1,
    image: './src/components/images/Mask group (1).png',
    time: 30,
    title: 'True love, Good Sex & Freedom from Porn Addiction',
  },
];
</script>

<template>
  <div class="p-6">
    <div class="text-center">
      <h1>YOUR CHANNEL/ACADEMY NAME</h1>
    </div>
    <div class="py-4">
      <h1 class="font-semibold">Your Course</h1>
    </div>
    <div class="grid grid-cols-2 mb-4">
      <div class="w-full rounded-lg">
        <img class="w-full object-cover rounded-md" src="../components/images/Mask group.png" alt="" />
      </div>
      <div class="bg-[#e1defe] rounded-md p-8">
        <div>
          <h1 class="text-4xl pb-1">Crypto Investing 101</h1>
          <p class="text-sm">The Necessary Foundation for Profitable Trading.</p>
        </div>
        <div class="flex items-center justify-between mt-12">
          <p>1:12:03</p>
          <button class="p-2 bg-primary-purple rounded-md text-white">Start Now</button>
        </div>
      </div>
    </div>
    <div class="py-4">
      <h1 class="font-semibold">My Featured Courses</h1>
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
      <div v-for="course in FeaturedCourses" :key="course.id" class="relative border border-gray-200 rounded-md">
        <div class="absolute left-0 bottom-[30%] p-3 ml-3">
          <button class="text-sm bg-white backdrop-blur-lg rounded-md p-2">{{ course.time }}hrs</button>
        </div>
        <div class="w-full bg-[#f2f4f7] rounded-lg p-3">
          <div>
            <img class="h-40 w-full object-cover rounded-md" :src="course.image" alt="" />
          </div>
          <div class="flex justify-between items-start gap-20 py-3">
            <h3 class="font-semibold text-sm">{{ course.title }}</h3>
            <div class="flex items-center justify-center rounded-md bg-[#e4e7ec] p-2">
              <ShareIcon class="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
