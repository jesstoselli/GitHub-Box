import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_GITHUB_AUTHORIZATION_TOKEN}`,
  },
});

export default api;
