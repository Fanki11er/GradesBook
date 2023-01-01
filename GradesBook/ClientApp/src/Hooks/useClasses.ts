import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import { CreateNewClassDto } from "../Types/Types";

const useClasses = () => {
  const { addNewClass, getClassesList } = endpoints;
  const handleAddNewClass = (dto: CreateNewClassDto) => {
    return axios.post(addNewClass, dto);
  };

  const handleGetAllClasses = () => {
    return axios.get(getClassesList);
  };
  return { handleAddNewClass, handleGetAllClasses };
};

export default useClasses;
