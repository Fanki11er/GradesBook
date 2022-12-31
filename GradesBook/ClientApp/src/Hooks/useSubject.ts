import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";

const useSubject = () => {
  const { getSubjectsList } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  const handleGetAllSubjects = () => {
    return axiosPrivate.get(getSubjectsList);
  };

  const handleGetUserSubjectsList = (id: number) => {
    //!!!!!!!!!!!!!!!!
    return axiosPrivate.get(getSubjectsList);
  };
  return {
    handleGetAllSubjects,
    handleGetUserSubjectsList,
  };
};

export default useSubject;
