import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import { NewProgramDto } from "../Types/Types";

const useProgram = () => {
  const { addProgram, getAllPrograms } = endpoints;
  const handleAddNewProgram = (newProgram: NewProgramDto) => {
    return axios.post(addProgram, newProgram);
  };

  const handleGetAllPrograms = () => {
    return axios.get(getAllPrograms);
  };
  return {
    handleAddNewProgram,
    handleGetAllPrograms,
  };
};

export default useProgram;
