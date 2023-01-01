import { useParams } from "react-router-dom";
import { endpoints } from "../Api/Endpoints";
import { CreateNewClassDto } from "../Types/Types";
import useAxiosPrivate from "./useAxiosPrivate";

const useClass = () => {
  const { getClassSettingsEndpoint, getClassesListEndpoint, addNewClass } =
    endpoints;
  const axiosPrivate = useAxiosPrivate();
  const { classId } = useParams();

  const getClassesList = () => {
    return axiosPrivate.get(getClassesListEndpoint);
  };

  const getClassSettings = () => {
    return axiosPrivate.get(
      getClassSettingsEndpoint(classId ? Number(classId) : -1)
    );
  };

  const handleAddNewClass = (dto: CreateNewClassDto) => {
    return axiosPrivate.post(addNewClass, dto);
  };

  return {
    getClassSettings,
    getClassesList,
    handleAddNewClass,
  };
};

export default useClass;
