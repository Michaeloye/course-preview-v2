<script setup>
import UserIcon from '~/components/icons/UserIcon.vue';
import { RouterLink } from 'vue-router';

const courses = [
  {
    id: 1,
    image: './src/components/images/Placeholder 1.png',
    title: 'Java Programming Beginner',
    name: 'Kitani Studio',
    status: 'Not yet started',
  },

  {
    id: 2,
    image: './src/components/images/Placeholder 1.png',
    title: 'Java Programming Beginner',
    name: 'Kitani Studio',
    status: 'Not yet started',
  },

  {
    id: 3,
    image: './src/components/images/Placeholder 1.png',
    title: 'Java Programming Beginner',
    name: 'Kitani Studio',
    status: '4/10 Completed',
  },
  {
    id: 4,
    image: './src/components/images/Placeholder 1.png',
    title: 'Java Programming Beginner',
    name: 'Kitani Studio',
    status: 'Completed',
  },
];
</script>

<template>
  <div class="px-[5rem]">
    <div class="text-center py-4">
      <h1 class="font-bold text-lg">My course</h1>
      <div class="flex items-center justify-center gap-6 font-medium cursor-pointer">
        <RouterLink to="/" active-class="active">All Courses</RouterLink>
        <RouterLink to="/my-courses">Courses</RouterLink>
        <RouterLink to="/">Wishlist</RouterLink>
        <RouterLink to="/">Completed</RouterLink>
      </div>
    </div>
    <div class="py-4">
      <h1 class="font-bold text-lg">My course</h1>
      <p>List of your Courses</p>
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
      <div v-for="course in courses" :key="course.id" class="relative py-2">
        <div class="absolute right-0 p-2">
          <div
            class="w-5 h-5 rounded-full flex items-center justify-center bg-gray-400 backdrop-blur-lg cursor-pointer"
          >
            <svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.99996 3.33341C2.73329 3.33341 3.33329 2.73341 3.33329 2.00008C3.33329 1.26675 2.73329 0.666748 1.99996 0.666748C1.26663 0.666748 0.666626 1.26675 0.666626 2.00008C0.666626 2.73341 1.26663 3.33341 1.99996 3.33341ZM1.99996 4.66675C1.26663 4.66675 0.666626 5.26675 0.666626 6.00008C0.666626 6.73341 1.26663 7.33341 1.99996 7.33341C2.73329 7.33341 3.33329 6.73341 3.33329 6.00008C3.33329 5.26675 2.73329 4.66675 1.99996 4.66675ZM0.666626 10.0001C0.666626 9.26675 1.26663 8.66675 1.99996 8.66675C2.73329 8.66675 3.33329 9.26675 3.33329 10.0001C3.33329 10.7334 2.73329 11.3334 1.99996 11.3334C1.26663 11.3334 0.666626 10.7334 0.666626 10.0001Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>
          </div>
        </div>
        <div class="w-full rounded-lg">
          <img class="w-full object-cover rounded-lg" :src="course.image" alt="" />
          <div class="flex flex-col gap-1">
            <h3 class="font-bold">{{ course.title }}</h3>
            <div class="flex items-center gap-2 text-primary-purple text-sm">
              <UserIcon class="h-5 w-5" />
              <p>{{ course.name }}</p>
            </div>
            <p class="text-sm font-medium">{{ course.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  border-bottom: 2px solid #623ceb;
  padding: 4px;
}
</style>
