import { User, UserCredentials, UserRepository } from "../repositories/user.repository";

export class UserService {

    userRepository : UserRepository = new UserRepository();

    constructor() {

    }

    addUser = (user : User ) : User => this.userRepository.addUser(user);
    getUser = (username? : string, email? : string) : User | undefined => this.userRepository.getUser(username, email);

    authenticateUser = (creds : UserCredentials) : boolean => {

        let userFound : User | undefined = creds.uid ? this.userRepository.getUser(creds.uid) : undefined;

        if(userFound) 
            return userFound.password === creds.password;

        return false;
    }
}