export interface User {
    id?: number;
    name: string;
    password: string;
    email: string;
    cpf: string;
    profile: 'admin' | 'user';
}
