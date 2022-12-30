import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren } from "react";
import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import useUser from "../Hooks/useUser";
import { NewUserSettingsDto } from "../Types/Types";

export const UserSettingsContext = createContext({
  handleGetCurrentUserSettings: (): Promise<AxiosResponse<any, any>> =>
    new Promise(() => {}) as Promise<AxiosResponse<any, any>>,

  handleSetNewUserSettings: (
    settings: NewUserSettingsDto
  ): Promise<AxiosResponse<any, any>> =>
    new Promise(() => {}) as Promise<AxiosResponse<any, any>>,
});

const UserSettingsProvider = (props: PropsWithChildren) => {
  const { getUserCurrentSettings, setUserCurrentSettings } = endpoints;
  const { user } = useUser();

  const handleGetCurrentUserSettings = async () => {
    return await axios.get(getUserCurrentSettings(user!.role, user!.id));
  };

  const handleSetNewUserSettings = async (settings: NewUserSettingsDto) => {
    return await axios.post(
      setUserCurrentSettings(user!.role, user!.id),
      settings
    );
  };

  const context = {
    handleGetCurrentUserSettings,
    handleSetNewUserSettings,
  };

  return (
    <UserSettingsContext.Provider value={context}>
      {props.children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsProvider;
