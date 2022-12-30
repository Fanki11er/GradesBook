import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import {
  LoginUserDto,
  RegisterUserDto,
  User,
  UserWithToken,
} from "../Types/Types";
import useUser from "./useUser";
const useAuth = () => {
  const { registerUser, loginUser } = endpoints;
  const { handleLogout } = useUser();
  const handleRegisterUser = (dto: RegisterUserDto) => {
    return axios.post(registerUser, dto);
  };

  const handleLoginUser = (dto: LoginUserDto) => {
    return axios.post(loginUser, dto);
  };

  const handleSetAuthenticatedUser = (user: UserWithToken) => {
    user &&
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          role: user.role,
          name: user.name,
        } as User)
      );
    user.token && sessionStorage.setItem("token", user.token);
  };

  /*const getRefreshFromStorage = () => {
    const refresh = sessionStorage.getItem("refresh");
    return refresh;
  };*/

  const getUserFromStorage = (): User | undefined => {
    const user = sessionStorage.getItem("user");
    if (user) {
      return JSON.parse(user) as User;
    }
    return undefined;
  };

  const getTokenFromStorage = () => {
    const token = sessionStorage.getItem("token");
    return token;
  };

  const handleDeleteAuth = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    handleLogout();
  };
  return {
    handleRegisterUser,
    handleLoginUser,
    handleSetAuthenticatedUser,
    handleDeleteAuth,
    getTokenFromStorage,
    getUserFromStorage,
  };
};

export default useAuth;
