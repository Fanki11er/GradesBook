import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import LoginView from "./View/LoginView/LoginView";
import LandingPage from "./View/LandingPage/LandingPage";
import ParentView from "./View/ParentView/ParentView";
import ProgramsView from "./View/ProgramsView/ProgramsView";
import RegistrationView from "./View/RegistrationView/RegistrationView";
import Template from "./View/Template/Template";
import AuthenticatedTemplate from "./View/Template/AuthenticatedTemplate/AuthenticatedTemplate";
import SettingsView from "./View/SettingsView/SettingsView";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyle";
import StudentGradesView from "./View/StudentGradesView/StudentGradesView";
import TeacherView from "./View/TeacherView/TeacherView";
import ClassesView from "./View/ClassesView/ClassesView";
import ClassSettings from "./View/ClassSettings/ClassSettings";
import ClassCreationView from "./View/ClassCreationView/ClassCreationView";
import StudentView from "./View/StudentView/StudentView";
import useColorScheme from "./Hooks/useColorScheme";
import TeachersSubjectsView from "./View/TeachersSubjectsView/TeachersSubjectsView";
import ClassAddStudentsView from "./View/ClassAddStudentsView/ClassAddStudentsView";
import ClassRemoveStudentView from "./View/ClassRemoveStudentView/ClassRemoveStudentView";
import RateStudentView from "./View/RateStuentView/RateStudentView";

const App = () => {
  const {
    baseRoute,
    programs,
    setting,
    register,
    login,
    parentView,
    grades,
    teacherView,
    addClass,
    studentView,
    classSettings,
    teacherSubjects,
    classAddStudents,
    classRemoveStudents,
    rateStudent,
  } = routes;
  const { theme } = useColorScheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route element={<Template />}>
          <Route index path={baseRoute} element={<LandingPage />} />
          <Route path={login} element={<LoginView />} />
          <Route path={register} element={<RegistrationView />} />
          <Route element={<AuthenticatedTemplate />}>
            <Route path={setting} element={<SettingsView />} />
            <Route path={parentView} element={<ParentView />} />
            <Route path={studentView} element={<StudentView />} />
            <Route element={<TeacherView />}>
              <Route path={teacherView} element={<ClassesView />} />
              <Route
                path={`${classSettings}/:classId`}
                element={<ClassSettings />}
              />
              <Route path={programs} element={<ProgramsView />} />
              <Route
                path={teacherSubjects}
                element={<TeachersSubjectsView />}
              />
              <Route
                path={`${classAddStudents}/:classId`}
                element={<ClassAddStudentsView />}
              />
              <Route
                path={`${classRemoveStudents}/:classId`}
                element={<ClassRemoveStudentView />}
              />
              <Route path={addClass} element={<ClassCreationView />} />
              <Route
                path={`${rateStudent}/:studentId`}
                element={<RateStudentView />}
              />
            </Route>
            <Route
              path={`${grades}/:studentId`}
              element={<StudentGradesView />}
            />
          </Route>
          <Route path={"*"} element={<LandingPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
