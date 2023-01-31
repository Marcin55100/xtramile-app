export interface IProject {
  Project: string;
  ProjectId: string;
  Course: string;
  CourseId: string;
  Person: string;
  Email: string;
  Upn: string;
  Department: string;
  Location: string;
  ImportTag: string;
  CourseStartedDate: string;
  OpenedLessonsCount: string;
  CompletedDate: string;
  CompletedLessonsCount: number;
  TotalLessonsCount: number;
  HaveNotStarted: string;
  NotOnSchedule: string;
  HaveStarted: string;
  QuizScore: number;
  QuizScoreTotal: number;
  CertificateTitle?: any;
  Mobile?: any;
  IsPassed: boolean;
  CertificateBlobUri: string;
}
