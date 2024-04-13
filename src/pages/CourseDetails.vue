<script setup>
import { ref } from 'vue';
import CourseDescription from '~/components/CourseDescription.vue';
import CourseLectureNotes from '~/components/CourseLectureNotes.vue';
import CourseAttachedFiles from '~/components/CourseAttachedFiles.vue';
import CourseComments from '~/components/CourseComments.vue';

const tabs = [
  {
    id: 1,
    title: 'Description',
  },
  {
    id: 2,
    title: 'Lectures Notes',
  },
  {
    id: 3,
    title: 'Attached Files',
  },
  {
    id: 4,
    title: 'Comments',
  },
];

const activeTab = ref(1);

const switchTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<template>
  <div class="flex flex-col md:flex-row gap-7 p-7">
    <div class="w-full md:w-[70%]">
      <div>
        <!-- video -->
        <div class="rounded-xl bg-yellow-900 w-full pb-[40%]"></div>

        <!-- title -->
        <h3 class="mt-3 font-bold text-xl">VUE JS SCRATCH COURSE</h3>
      </div>

      <!-- course details -->
      <div class="mt-5 pb-8">
        <!-- tabs -->
        <div class="flex gap-3 border-b overflow-x-auto">
          <div v-for="tab in tabs" :key="tab.id"
            class="flex-shrink-0 p-1 pb-2 flex justify-center items-center cursor-pointer gap-2 border-b-2 border-transparent "
            :class="[tab.id == activeTab ? 'border-b-primary-purple' : '']" @click="switchTab(tab.id)">
            <p>{{ tab.title }}</p>

            <!-- show number of attachments -->
            <div v-if="tab.id == 3"
              class="w-3 h-3 p-3 rounded-md text-xs font-medium bg-[#e1defe] text-primary-purple flex justify-center items-center">
              2
            </div>
          </div>
        </div>

        <!-- tab content -->
        <div class="mt-5">
          <CourseDescription v-if="activeTab === 1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem
            Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </CourseDescription>

          <CourseLectureNotes v-if="activeTab === 2">
            <p>In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi
              in mi maximus egestas. Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu ullamcorper
              eleifend condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu
              egestas augue lectus sit amet sapien. Maecenas tristique aliquet massa, a venenatis augue tempor in.
              Aliquam turpis urna, imperdiet in lacus a, posuere suscipit augue.</p>

            <p>
              Nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem cursus elit efficitur lacinia
            </p>

            <ul class="list-disc list-inside">
              <li>Morbi sit amet pretium tellus. Donec blandit fermentum tincidunt.</li>
              <li>Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales. Donec iaculis interdum
                mattis.</li>
              <li>Curabitur posuere ultricies diam in egestas.</li>
              <li>Donec id diam et lacus pharetra vestibulum a id est. Mauris vestibulum massa quis elit feugiat, dictum
              </li>
              <li>maximus ipsum pellentesque.</li>
              <li>Sed elementum, libero id lacinia aliquet, purus nibh consectetur mauris, eget interdum mi lacus vitae
                sem.</li>
            </ul>
          </CourseLectureNotes>

          <CourseAttachedFiles v-if="activeTab === 3" />

          <CourseComments v-if="activeTab === 4" />
        </div>
      </div>
    </div>

    <div class="bg-yellow-900 w-full md:w-[30%]">
    </div>
  </div>
</template>