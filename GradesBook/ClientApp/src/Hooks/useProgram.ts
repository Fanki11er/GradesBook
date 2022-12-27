import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import { NewProgramDto } from "../Types/Types";

const useProgram = () => {
  const { addProgram } = endpoints;
  const handleAddNewProgram = (newProgram: NewProgramDto) => {
    return axios.post(addProgram, newProgram);
  };
  return {
    handleAddNewProgram,
  };
};

export default useProgram;
