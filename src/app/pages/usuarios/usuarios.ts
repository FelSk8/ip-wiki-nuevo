export interface UsuariosI {
    id: number;
    email: string;
    password: string;
    createAt: Date;
    updateAt: Date;
    categories:CategoryI[]

}

export interface CategoryI {
    id: number;
    email: string;
    password: string;
    createAt: Date;
    updateAt: Date;

}
