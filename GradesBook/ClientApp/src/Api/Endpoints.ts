import { Roles } from "../Types/Types";

export const endpoints = {
  baseUrl: "https://localhost:7291",
  getParentsChildren: "/Parent/Children",
  registerParentsChildren: "/Accounts/RegisterChildren",
  getClassesList: "/Class/LightClassInfo",
  getSubjectsList: "/Subjects",
  addProgram: "/Program",
  registerUser: "/Accounts/Register",
  loginUser: "/Accounts/Login",

  getUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/Settings/${id}`;
  },
  setUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/SetSettings/${id}`;
  },

  getUserSubjectsList: (id: number) => {
    return `/Subjects/${id}`;
  },

  getClassSettings: (id: number) => {
    return `/Class/Settings${id}`;
  },
};
