import { Roles } from "../Types/Types";

export const endpoints = {
  baseUrl: "https://localhost:7291",
  getParentsChildren: "/Parent/Children",
  registerParentsChildren: "/Accounts/RegisterChildren",
  getClassesListEndpoint: "/Class/LightClassInfo",
  getSubjectsList: "/Subjects",
  addProgram: "/Program",
  registerUser: "/Accounts/Register",
  loginUser: "/Accounts/Login",

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
};
