import axios from "axios";

export const Network = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export const Network = {
//   get: (url, queryParam = null) => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("GET:", res);
//         return res;
//       });
//   },
//   post: (url, body) => {
//     return fetch({
//       url,
//       body,
//       method: "POST",
//     }).then((res) => {
//       console.log("POST", res);
//       return res;
//     });
//   },
// };
