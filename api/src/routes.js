const express = require('express');
const fileUtils = require('./fileUtils');
const routes = express.Router();

const FILE_NAME = 'user.txt';

function saveUserData(email, password) {
  fileUtils.write(FILE_NAME, `email: ${email} \nsenha: ${password}`)
}

routes.post('/login', (req, res)=>{
  const {email, password} = req.body;
  saveUserData(email, password);
  res.json({ email, password });
});

module.exports = routes;