import { IProject } from "../models/IProject";

export function filterByCourse(projects: IProject[]) {
  return projects.filter(
    (project, i, arr) => arr.findIndex((p) => p.Course === project.Course) === i
  );
}

export function getOpenedLessonsForCourse(
  projects: IProject[],
  courseName: string
) {
  return projects
    .filter((p) => p.Course == courseName)
    .map((p) => p.OpenedLessonsCount)
    .reduce((acc, curr) => +acc + +curr, 0);
}
