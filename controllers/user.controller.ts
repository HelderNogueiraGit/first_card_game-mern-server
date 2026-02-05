import {Express, Request, Response} from 'express';
import { UserService } from '../services/user.service';

export class UserController {

    app : Express;
    path : string = '/user';
    userService : UserService = new UserService();

    constructor(app : Express) {

        this.app = app;
    }

    listen = () => {

        this.linkGET();
        this.linkPOST();
    }

    linkGET() : void {

        this.app.get(`${this.path}/:username`, (req : Request, res : Response) => {

            try {

                const user = this.userService.getUser(req.params.username?.toString());
                
                const userFiltered = {...user};
                delete userFiltered.id;
                delete userFiltered.password;
    
                if(userFiltered) 
                    res.send(userFiltered);
                else {
    
                    res.statusCode = 404;
                    res.send({error: 'user not found!'});
                }
            }
            catch (err) {

                res.statusCode = 500;
                res.send('something went wrong!');
            }

        });
    }

    linkPOST = () => {

        
        this.app.post(`${this.path}`, (req : Request, res : Response) => {

            try {

                const user = this.userService.addUser(req.body);
                
                if(user)
                    res.send(user);
                else {

                    res.statusCode = 409;
                    res.send('user already taken.');
                }
            }
            catch (err) { res.statusCode = 500; res.send({error: 'something went wrong, please try again later!'}); }
        });

        this.app.post(`${this.path}/auth`, (req : Request, res : Response) => {

            const success = this.userService.authenticateUser(req.body);
            res.send(success);

        });
    }
}