import axios from "axios";
import Cookies from "js-cookie";

//import { getEnvVariables } from "../helpers";
//const { VITE_API_URL } = getEnvVariables();

//Se le da una url a la api por defecto a axios
const ctCloudApi = axios.create({
    baseURL: "http://localhost:4040/",
    withCredentials: true,
});

//Interceptores
// calendarApi.interceptors.request.use(config =>{
//     config.headers = {
//         ...config.headers,
//         "x-token": localStorage.getItem("token")
//     }
//     return config;
// })

export default ctCloudApi;
