import axios from 'axios';
import Cookies from 'js-cookie';
import { SignInApiReponseType } from '../types/UserType';
// import { BASE_API_URL } from './EndPoint';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true, // Include credentials (cookies) in requests
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config: any) => {
        // Do something before request is sent
        let userAuthInfo;
        const USER_AUTH_INFO = 'userAuthInfo';

        // Check if the cookie exists and parse it
        const cookieExists = Cookies.get(USER_AUTH_INFO) !== undefined;
        if (cookieExists) {
            // userAuthInfo = JSON.parse(Cookies.get(USER_AUTH_INFO) as string);
            userAuthInfo = Cookies.get(USER_AUTH_INFO);
            console.log('UserAuth Http Services Cookie Read : ' + userAuthInfo);
        }

        let dataUser = userAuthInfo ? JSON.parse(userAuthInfo as string) : null;


        return {
            ...config,
            headers: {
                authorization: userAuthInfo ? `Bearer ${dataUser.refresh_token}` : null
            },
        };
    }
);

// Response body for api requests
const responseBody = (response: any) => {
    console.info('Response data: ', response.data);
    console.info('Response status: ', response.status);
    console.info('Response headers: ', response.headers);
    console.info('Response config: ', response.config);
    console.info('Response request: ', response.request);
    console.info('Response status text: ', response.statusText);

    // Handle specific response codes
    return response.data
};

// Response error for api requests
const responseError = (error: any) => {
    console.log("Response Error", error);

    return Promise.reject(error);
}

// Requests
const HttpClient = {
    get: (url: string) => axiosInstance.get(url).then(responseBody).catch(responseError),
    post: (url: string, body: any) => axiosInstance.post(url, body).then(responseBody).catch(responseError),
    put: (url: string, body: any) => axiosInstance.put(url, body).then(responseBody).catch(responseError),
    delete: (url: string) => axiosInstance.delete(url).then(responseBody).catch(responseError),
}

export { axiosInstance };
export default HttpClient;


