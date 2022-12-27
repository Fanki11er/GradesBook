import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";

const useSubject = () => {
  const { getUserSubjectsList, getSubjectsList } = endpoints;

  const handleGetUserSubjectsList = (userId: number) => {
    return axios.get(getUserSubjectsList(userId));
  };

  const handleGetAllSubjects = () => {
    return axios.get(getSubjectsList);
  };
  return {
    handleGetUserSubjectsList,
    handleGetAllSubjects,
  };
};

export default useSubject;
