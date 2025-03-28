import { API_AUTH_LOGIN } from "../config/EndPoint";
import HttpClient from "../config/HttpClient";
import { SignInValueType } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AuthService = {
    signIn: async (body: SignInValueType) => {
        return HttpClient.post(API_AUTH_LOGIN, body);
    }
};

export default AuthService;