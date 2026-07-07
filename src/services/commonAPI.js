import axios from "axios";

// // Request Interceptor (In Case of Req)
// axios.interceptors.request.use(
//     (config) => {
//         const token = sessionStorage.getItem("token");

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


//commonAPI
export const commonAPI = async (httpRequest,url,reqBody,reqHeader) => {
    const config = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader,
    };

    return await axios(config)
        .then((res) => res)
        .catch((err) => err);
};


// // Response Interceptor
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       alert("Token Expired");
//     }

//     return Promise.reject(error);
//   }
// );