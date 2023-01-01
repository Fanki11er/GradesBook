import { useParams } from "react-router-dom";
import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";

const useClass = () => {
  const { getClassSettingsEndpoint, getClassesListEndpoint } = endpoints;
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

  return {
    getClassSettings,
    getClassesList,
  };
};

export default useClass;
