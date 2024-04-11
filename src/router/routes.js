import AllCourses from "~/pages/AllCourses.vue";
import CourseAttachedFiles from "~/pages/CourseAttachedFiles.vue";
import CourseComments from "~/pages/CourseComments.vue";
import CourseDescription from "~/pages/CourseDescription.vue";
import CourseLectureNotes from "~/pages/CourseLectureNotes.vue";
import MyCourses from "~/pages/MyCourses.vue";

export const routes = [
  { path: "/", component: AllCourses },
  { path: "/my-courses", component: MyCourses },
  { path: "/course-description", component: CourseDescription },
  { path: "/course-attached-files", component: CourseAttachedFiles },
  { path: "/course-comments", component: CourseComments },
  { path: "/course-lecture-notes", component: CourseLectureNotes },
];
