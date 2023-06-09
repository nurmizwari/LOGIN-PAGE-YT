import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { access_token: localStorage.getItem("access_token") },
});

export default http;
