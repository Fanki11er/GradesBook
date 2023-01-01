import { Roles } from "../Types/Types";

export const endpoints = {
  baseUrl: "https://localhost:7291",
  getParentsChildren: "/Parent/Children",
  registerParentsChildren: "/Parent/RegisterChildren",
  getClassesList: "/Class/LightClassInfo",
  getSubjectsList: "/Subjects",
  addProgram: "/Program",
  addNewClass: "/Class",
  getAllPrograms: "/Program",
  getAllTeachers: "/Teacher",

  getUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/Settings/${id}`;
  },
  setUserCurrentSettings: (role: Roles, id: number) => {
    return `/${role}/SetSettings/${id}`;
  },

  getUserSubjectsList: (id: number) => {
    return `/Subjects/${id}`;
  },
};
