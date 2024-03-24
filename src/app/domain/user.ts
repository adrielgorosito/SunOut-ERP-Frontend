export class User {
    username: string;
    password: string;
    type: number;

    constructor(u: string, p: string, t: number) {
        this.username = u;
        this.password = p;
        this.type = t;
    }
}