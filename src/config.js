import axios from "axios";
export const axiosInstance = axios.create({
  baseUrl: "https://navriktraining.azurewebsites.net/",
});
