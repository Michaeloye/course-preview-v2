import AllCourses from '~/pages/AllCourses.vue';
import CourseDetails from '~/pages/CourseDetails.vue';
import MyCourses from '~/pages/MyCourses.vue';

export const routes = [
  { path: '/', component: AllCourses },
  { path: '/my-courses', component: MyCourses },
  { path: '/course-details', component: CourseDetails },
];
