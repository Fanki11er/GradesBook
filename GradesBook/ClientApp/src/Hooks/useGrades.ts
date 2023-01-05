import { endpoints } from "../Api/Endpoints";
import { GetStudentGradesFromPeriodDto, StudentRateDto } from "../Types/Types";
import useAxiosPrivate from "./useAxiosPrivate";

const useGrades = () => {
  const axiosPrivate = useAxiosPrivate();
  const { getPossibleGrades, rateStudent, getStudentGradesFromPeriod } =
    endpoints;
  const handleGetPossibleGrades = () => {
    return axiosPrivate.get(getPossibleGrades);
  };

  const handleRateStudent = (studentId: number, rate: StudentRateDto) => {
    return axiosPrivate.post(rateStudent(studentId), rate);
  };

  const handleGetStudentGradesFromPeriod = (
    studentId: number,
    dto: GetStudentGradesFromPeriodDto
  ) => {
    return axiosPrivate.post(getStudentGradesFromPeriod(studentId), dto);
  };
  return {
    handleGetPossibleGrades,
    handleRateStudent,
    handleGetStudentGradesFromPeriod,
  };
};

export default useGrades;
