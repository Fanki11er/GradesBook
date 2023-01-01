import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";

const useTeacher = () => {
  const { getAllTeachers } = endpoints;
  const handleGetAllTeachers = () => {
    return axios.get(getAllTeachers);
  };
  return { handleGetAllTeachers };
};

export default useTeacher;
