//import axios from "../Api/axios";
//import endpoints from "../Api/endpoints";
import useAuth from "./useAuth";

/*const useRefreshToken = () => {
  const { handleSetToken, getRefreshFromStorage, getAccessFromStorage } =
    useAuth();
  const { refreshToken } = endpoints;

  const refresh = async () => {
    const response = await axios.post(
      refreshToken,
      {
        refresh: getRefreshFromStorage(),
      },
      {
        withCredentials: true,
      }
    );
    const access = getAccessFromStorage();
    if (!access) {
      return null;
    } else {
      handleSetToken(response.data);
      return response.data.access;
    }
  };

  return refresh;
};

export default useRefreshToken;*/
