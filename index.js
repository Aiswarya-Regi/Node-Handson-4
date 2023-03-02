const express = require('express');
const bodyParser = require("body-parser");
const CONSTANTS = require('./config/constant');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);

app.listen(CONSTANTS.PORT, ()=>{
    console.log(`Server is listening at http://localhost:${CONSTANTS.PORT}`)
})