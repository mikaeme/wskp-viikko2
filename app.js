'use strict';
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

const cors = require('cors');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
