import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";
import useUser from "./useUser";

const useTeacher = () => {
  const { getTeacherSubject, setTeacherSubject } = endpoints;
  const axiosPrivate = useAxiosPrivate();
  const { user } = useUser();

  const handleGetUserSubject = () => {
    return axiosPrivate.get(getTeacherSubject(user!.id));
  };

  const handleSetNewTeacherSubject = (subjectId: number) => {
    return axiosPrivate.post(setTeacherSubject(user!.id), subjectId);
  };
  return {
    handleGetUserSubject,
    handleSetNewTeacherSubject,
  };
};

export default useTeacher;
