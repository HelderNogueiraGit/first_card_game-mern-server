const express = require('express');
const app = express();

const SERVER_PORT = 4000;

app.get('/', (req, res) => {

    res.send('Hello World!');
})

app.listen(SERVER_PORT, () => console.log(`Server Has Been Started On Port ${SERVER_PORT}`));