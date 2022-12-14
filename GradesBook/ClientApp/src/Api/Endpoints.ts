import { Roles } from "../Types/Types";

export const endpoints = {
  baseUrl: "https://localhost:7291",
  getParentsChildren: "/Parent/Children",
  registerParentsChildren: "/Accounts/RegisterChildren",
  getClassesListEndpoint: "/Class/LightClassInfo",
  getSubjectsList: "/Subjects",
  addProgram: "/Program",
  addNewClass: "/Class",
  getAllPrograms: "/Program",
  getAllTeachers: "/Teacher",
  getPossibleGrades: "/Grades/PossibleGrades",
  registerUser: "/Accounts/Register",
  loginUser: "/Accounts/Login",
  getFreeStudentsList: "/Student/FreeStudents",
  postAnnouncementToMainPage: "/Announcement/Main",
  getMainPageAnnouncements: "/Announcement/Main",

  getUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/Settings/${id}`;
  },
  setUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/Settings/${id}`;
  },

  getTeacherSubject: (id: number) => {
    return `/Teacher/Subject/${id}`;
  },

  setTeacherSubject: (id: number) => {
    return `/Teacher/Subject/${id}`;
  },

  getClassSettingsEndpoint: (id: number) => {
    return `/Class/ClassStudentsInfo/${id}`;
  },

  getClassStudentsList: (id: number) => {
    return `/Student/ClassStudents/${id}`;
  },

  addStudentsToClass: (id: number) => {
    return `/Class/AddStudents/${id}`;
  },
  removeStudentsFromClass: (id: number) => {
    return `/Class/RemoveStudents/${id}`;
  },

  getStudentsSubjects: (id: number) => {
    return `/Subjects/StudentsSubjects/${id}`;
  },

  rateStudent: (id: number) => {
    return `/Grades/Rate/${id}`;
  },

  getStudentGradesFromPeriod: (id: number) => {
    return `/Grades/StudentGrades/${id}`;
  },
  postAnnouncementToClass: (id: number) => {
    return `/Announcement/Class/${id}`;
  },
  getClassAnnouncements: (id: number) => {
    return `/Announcement/Class/${id}`;
  },
};
