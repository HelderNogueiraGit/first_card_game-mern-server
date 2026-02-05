import express, { Request, Response, urlencoded } from 'express'
import { UserController } from './controllers/user.controller';
const cors = require('cors');

const app = express();
const SERVER_PORT : number = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userController = new UserController(app);
userController.listen();

app.listen(SERVER_PORT, () => console.log(`Server Has Been Started On Port ${SERVER_PORT}`));

