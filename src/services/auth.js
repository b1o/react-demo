import { Network } from "./network";

// export const baseUrl = "http://localhost:3001";
// const makeUrl = (path) => `${baseUrl}${path}`;

export const Auth = {
  login: (username, password) => {
    return Network.post("/login", { username, password }).then(
      (res) => res.data
    );
  },
};
