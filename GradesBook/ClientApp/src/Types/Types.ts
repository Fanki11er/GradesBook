export type ClassStudentsSettings = {
  id: number;
  name: string;
  students: SelectOption[];
  supervisingTeacherName: string;
};

export type LightStudent = {
  classId: number | null;
  name: string;
  studentId: number;
};

export type ClassNameWithSupervisor = {
  id: number;
  name: string;
  supervisorName: string | null;
  studentsNumber: number;
};

export type StudentsWithGradesAverage = {
  studentName: string;
  studentId: number;
  gradesAverage: number;
};

export type StudentsWithClassAndGradesAverage = {
  studentName: string;
  studentId: number;
  gradesAverage: number;
  className: string;
};

export type ClassWithStudentsAndProgram = {
  className: string;
  id: number;
  supervisingTeacher: string;
  programName: string;
  studentsList: SelectOption[];
};

export type Roles = "Teacher" | "Parent" | "Student";

export type UserWithToken = {
  id: number;
  name: string;
  token: string;
  role: Roles;
};

export type User = {
  id: number;
  name: string;
  role: Roles;
};

export type RegisterUserDto = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  RepeatedPassword: string;
};

export type LoginUserDto = {
  Email: string;
  Password: string;
};

export type UserCurrentSettingsDto = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type NewUserSettingsDto = {
  FirstName: string;
  LastName: string;
  Email: string;
  OldPassword: string;
  Password: string;
  RepeatedPassword: string;
};

export type SelectOption = {
  id: number;
  value: string;
};

export type NewProgramDto = {
  Name: string;
  SubjectsIds: number[];
};
