<script setup>
import { ref } from 'vue';
import CourseDescription from '~/components/CourseDescription.vue';
import CourseLectureNotes from '~/components/CourseLectureNotes.vue';
import CourseAttachedFiles from '~/components/CourseAttachedFiles.vue';
import CourseComments from '~/components/CourseComments.vue';
import PlayIcon from '~/components/icons/PlayIcon.vue';
import TimeIcon from '~/components/icons/TimeIcon.vue';
import DropdownIcon from '~/components/icons/DropdownIcon.vue';

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

const chapters = [
  {
    id: 1,
    title: 'Chapter 1: Course Overview',
  },
  {
    id: 2,
    title: 'Chapter 2: Curriculum',
  },
  {
    id: 3,
    title: 'Chapter 3: Components',
  },
];

const activeTab = ref(1);

const openedChapters = ref(new Set([]));

const switchTab = (tabId) => {
  activeTab.value = tabId;
};

const handleOpenedChapters = (chapterId) => {
  // create a set add chapterId to it
  if (!openedChapters.value) {
    openedChapters.value = new Set([chapterId]);
  } else {
    // if chapterId is already in the set, remove it
    if (openedChapters.value.has(chapterId)) {
      openedChapters.value.delete(chapterId);
    } else {
      // add chapterId to the set
      openedChapters.value.add(chapterId);
    }
  }
};
</script>

<template>
  <div class="flex flex-col md:flex-row gap-7 p-7">
    <div class="w-full md:w-[70%]">
      <div>
        <!-- video -->
        <div class="rounded-xl bg-yellow-900 w-full pb-[50%]"></div>

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

    <div class="w-full md:w-[30%]">
      <div class="relative flex justify-between items-center border-b">
        <div class="flex-shrink-0 p-1 pb-2 flex justify-center items-center">
          <p class="font-semibold">Course Contents</p>
        </div>

        <div class="w-[15%] bg-primary-purple h-[2px] absolute bottom-0 left-0"></div>

        <p class="text-primary-purple text-sm">15% Completed</p>
      </div>

      <!-- chapters -->
      <div class="mt-5 flex flex-col items-start rounded-md overflow-hidden">
        <!-- Chapter 1 -->
        <div v-for="chapter in chapters" :key="chapter.id" class="w-full">
          <div class="p-3 flex w-full justify-between items-center cursor-pointer bg-[#f2f4f7]">
            <div @click="handleOpenedChapters(chapter.id)">
              <h3 class="font-semibold">{{ chapter.title }}</h3>
              <div class="flex gap-2 text-[#667085]">
                <div class="flex items-center">
                  <PlayIcon class="w-5 h-5" />
                  <p class="text-sm">12 Videos</p>
                </div>

                <div class="flex items-center">
                  <TimeIcon class="w-5 h-5" />
                  <p class="text-sm">28m</p>
                </div>
              </div>
            </div>

            <DropdownIcon class="w-5 h-5" />
          </div>

          <!-- subchapters -->
          <div v-if="openedChapters.has(chapter.id)">
            <div class="p-3 flex w-full justify-between items-center cursor-pointer bg-[#fcfcfd]">
              <div>
                <h4 class="">Installing Vue JS</h4>
                <div class="flex gap-2 text-[#667085]">
                  <div class="flex items-center text-[#32d583]">
                    <PlayIcon class="w-5 h-5" />
                    <p class="text-sm">12m</p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-2 bg-[#32d583] text-sm rounded-md">
                <p class="text-white">Completed</p>
              </div>
            </div>

            <div class="p-3 flex w-full justify-between items-center cursor-pointer bg-[#fcfcfd]">
              <div>
                <h4 class="">Understand Vue Components
                </h4>
                <div class="flex gap-2 text-[#667085]">
                  <div class="flex items-center text-primary-purple">
                    <PlayIcon class="w-5 h-5" />
                    <p class="text-sm">16m</p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-2 bg-primary-purple text-sm rounded-md">
                <p class="text-white">Playing</p>
              </div>
            </div>

            <div class="p-3 flex w-full justify-between items-center cursor-pointer bg-[#fcfcfd]">
              <div>
                <h4 class="">Vue Templating</h4>
                <div class="flex gap-2 text-[#667085]">
                  <div class="flex items-center text-[#667085]">
                    <PlayIcon class="w-5 h-5" />
                    <p class="text-sm">16m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>