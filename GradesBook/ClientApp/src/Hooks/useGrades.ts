import { endpoints } from "../Api/Endpoints";
import { StudentRateDto } from "../Types/Types";
import useAxiosPrivate from "./useAxiosPrivate";

const useGrades = () => {
  const axiosPrivate = useAxiosPrivate();
  const { getPossibleGrades, rateStudent } = endpoints;
  const handleGetPossibleGrades = () => {
    return axiosPrivate.get(getPossibleGrades);
  };

  const handleRateStudent = (studentId: number, rate: StudentRateDto) => {
    return axiosPrivate.post(rateStudent(studentId), rate);
  };
  return {
    handleGetPossibleGrades,
    handleRateStudent,
  };
};

export default useGrades;
