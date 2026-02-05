export interface User {

    id?: number;
    email: string;
    username: string;
    password: string;
}

export interface UserCredentials {

    uid: string;
    password: string;
}

export class UserRepository {

    data : User[] = [
         {
            id: 1,
            email: 'admin@privnet.pt',
            username: 'admin',
            password: 'admin'
         }
    ];

    constructor() {

    }

    getUsers = () : User[] | [] => this.data;
    getUserByEmail = (email : string) : User | undefined => this.data.find(user => user.email === email);
    getUserByUsername = (username : string) : User | undefined => this.data.find(user => user.username === username);
    
    getUser = (username? : string, email?: string) : User | undefined => username ? this.getUserByUsername(username) : email ? this.getUserByEmail(email) : undefined;

    addUser = (user : User) : User => {

        if(!this.getUserByUsername(user.username)) {

            this.data.push(user);
            return user;
        }

        throw new Error('username already taken');
    };

   
}