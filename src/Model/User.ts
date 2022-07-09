export class User {
    id?: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    followers: number;
    following: number;
    avatar: string;

    constructor(username: string, name: string, surname: string, email: string, followers: number, following: number, avatar: string) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.followers = followers;
        this.following = following;
        this.avatar = avatar;
    }
}