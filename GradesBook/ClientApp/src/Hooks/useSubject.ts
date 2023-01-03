import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";

const useSubject = () => {
  const { getSubjectsList, getStudentsSubjects } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  const handleGetAllSubjects = () => {
    return axiosPrivate.get(getSubjectsList);
  };

  const handleGetStudentSubjectsList = (id: number) => {
    return axiosPrivate.get(getStudentsSubjects(id));
  };
  return {
    handleGetAllSubjects,
    handleGetStudentSubjectsList,
  };
};

export default useSubject;
