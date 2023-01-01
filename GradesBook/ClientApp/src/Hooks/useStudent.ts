import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";

const useStudent = () => {
  const {
    getFreeStudentsList,
    getClassStudentsList,
    addStudentsToClass,
    removeStudentsFromClass,
  } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  const handleGetFreeStudentsList = () => {
    return axiosPrivate.get(getFreeStudentsList);
  };
  const handleGetClassStudentsList = (id: number) => {
    return axiosPrivate.get(getClassStudentsList(id));
  };

  const handleAddStudentsToClass = (id: number, students: number[]) => {
    return axiosPrivate.post(addStudentsToClass(id), students);
  };

  const handleRemoveStudentsFromClass = (id: number, students: number[]) => {
    return axiosPrivate.post(removeStudentsFromClass(id), students);
  };
  return {
    handleGetClassStudentsList,
    handleGetFreeStudentsList,
    handleAddStudentsToClass,
    handleRemoveStudentsFromClass,
  };
};

export default useStudent;
