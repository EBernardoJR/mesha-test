import { AxiosRequestConfig, AxiosHeaders } from "axios";
import api from "./api";

interface IRequest {
  showLoading?: boolean;
  loadingMessage?: string;
  timeout?: number;
  headers?: AxiosHeaders;
  showSuccessMessage?: boolean | string;
  showErrorMessage?: boolean | string;
  method:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;
  path: string;
  data?: any;
  removeIp?: boolean;
  removeAppVersion?: boolean;
}

const request = (params: IRequest) => {
  const config: AxiosRequestConfig = {
    method: params.method,
    url: params.path,
    headers: {
      Authorization: ''
    },
  };

  const token = window.localStorage.getItem(process.env.KEY_TOKEN ?? "");

  if (token && config.headers) {
    config.headers.Authorization = token;
  }

  if (params.data) {
    config.data = params.data;
  }
  return new Promise(async (resolve, reject) => {
    return api
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (
          error.response?.data?.message === "Unauthorized" &&
          error.response?.data?.statusCode === 401
        ) {
          window.location.href = "/login";
          return;
        }
        reject({
          error: error.response ? error.response.data : "timeout",
        });
      });
  });
};

export default request;
