const express = require('express')
const app = express()
const port = 3000;
const { json } = require('express');

var cors = require('cors')
app.use(cors())
app.use(json())

var UserController = require('./controller/User.Controller');

app.use('/user', UserController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})