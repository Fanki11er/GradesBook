import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import useAxiosPrivate from "./useAxiosPrivate";

const useAnnouncement = () => {
  const {
    postAnnouncementToMainPage,
    postAnnouncementToClass,
    getMainPageAnnouncements,
    getClassAnnouncements,
  } = endpoints;
  const axiosPrivate = useAxiosPrivate();
  const handleAddAnnouncementToMainPage = (content: string) => {
    return axiosPrivate.post(postAnnouncementToMainPage, content);
  };

  const handleAddAnnouncementToClass = (content: string, id?: number) => {
    return axiosPrivate.post(postAnnouncementToClass(id ? id : 0), content);
  };

  const handleGetMainPageAnnouncements = () => {
    return axios.get(getMainPageAnnouncements);
  };

  const handleGetClassAnnouncements = (id: number) => {
    return axiosPrivate.get(getClassAnnouncements(id));
  };

  return {
    handleAddAnnouncementToMainPage,
    handleAddAnnouncementToClass,
    handleGetMainPageAnnouncements,
    handleGetClassAnnouncements,
  };
};

export default useAnnouncement;
