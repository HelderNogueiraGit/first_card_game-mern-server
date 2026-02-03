import express, { Request, Response } from 'express'
const app = express();

const SERVER_PORT : number = 4000;

app.get('/', (req : Request, res : Response) => {

    res.send('Hello World!');
})

app.listen(SERVER_PORT, () => console.log(`Server Has Been Started On Port ${SERVER_PORT}`));