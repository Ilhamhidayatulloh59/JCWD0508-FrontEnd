export interface UserRegister {
    username: string;
    email: string;
    password: string
}

export interface UserLogin {
    email: string;
    password: string
}

export interface UserState {
    id: number;
    username: string;
    email: string;
    avatar?: string;
}