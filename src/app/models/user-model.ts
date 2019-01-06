import { MainModel } from "./main-model";

export class UserModel extends MainModel {
    public user: string;
    public password: string;
    constructor(id: number, user: string, password: string) {
        super(id);
        this.user = user;
        this.password = password;
    }

}