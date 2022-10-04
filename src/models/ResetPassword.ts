export interface Recovery {
    search: string;
    code: string;
}

export interface UpdatePassword {
    password: string;
    password_confirmation: string
}