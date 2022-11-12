export type ClassStudentsSettings = {
  id: number;
  name: string;
  students: LightStudent[];
  freeStudent: LightStudent[];
  supervisingTeacherName: string;
};

export type LightStudent = {
  classId: number | null;
  name: string;
  studentId: number;
};

export type ClassNameWithSupervisor = {
  name: string;
  supervisorName: string | null;
  studentsNumber: number;
};

export type StudentsWithGradesAverage = {
  studentName: string;
  studentId: number;
  gradesAverage: number;
};

export type ClassWithStudentsAndProgram = {
  className: string;
  classId: number;
  supervisingTeacher: string | null;
  programName: string | null;
  studentsList: StudentsWithGradesAverage[];
};
