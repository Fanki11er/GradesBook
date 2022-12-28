import { useEffect } from "react";
import { axiosPrivate } from "../Api/axios";
import useAuth from "./useAuth";
//import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  //const refresh = useRefreshToken();
  const { getTokenFromStorage } = useAuth();

  useEffect(
    () => {
      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
          if (config.headers && !config.headers!["Authorization"]) {
            config.headers![
              "Authorization"
            ] = `Bearer ${getTokenFromStorage()}`;
            return config;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      /*const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          refresh().then((response) => {
            prevRequest.headers["Authorization"] = `Bearer ${response}`;
            return axiosPrivate(prevRequest);
          });
        }
        return Promise.reject(error);
      }
    );*/

      return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
        //axiosPrivate.interceptors.response.eject(responseIntercept);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      /*refresh*/
    ]
  );
  return axiosPrivate;
};

export default useAxiosPrivate;
