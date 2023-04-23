import request from "../request";

interface ILogin {
  email: string | undefined;
  password: string | undefined;
}

const login = (body: ILogin) => {
  return request({
    method: "POST",
    path: "/auth/login",
    data: {
      email: body.email,
      password: body.password,
    },
  })
    .then((response: any) => {
      console.log(response.data)
      if (response.data.access_token) {
        window.localStorage.setItem(
          'token',
          response.data.access_token,
        );
      }
      return response.data
    })
    .catch((error: any) => {
      return error;
    });
};

export { login };