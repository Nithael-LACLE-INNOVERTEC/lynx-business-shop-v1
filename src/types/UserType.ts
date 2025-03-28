export type UserType = {
    id?: string;
    name?: string;
    code: string;
    phone: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    isLoggedIn?: boolean;
}

export type UserContextType = {
    user: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
}

export type UserProviderProps = {
    children: React.ReactNode;
    user: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
}

export type UserContextValue = {
    user: UserType | null;
    setUser: (user: UserType | null) => void;
}
export type UserContextProviderProps = {
    children: React.ReactNode;
    initialUser: UserType | null;
}

// LOGIN FORM
export type SignInValueType = {
    code: string;
    telephone_number: string;
    password: string;
}

export type SignInApiReponseType = {
    message: string;
    access_token: string;
    refresh_token: string;
}
