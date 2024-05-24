const express = require('express');
const {signUp, signIn} = require('../controllers/userControllers');
const auth = require('../middlewares/auth');
const userRoutes = express.Router();
const {UserData} = require('../../../models');

userRoutes.post('/signup', signUp);
userRoutes.post('/signin', auth, signIn);
userRoutes.get('/select', auth, (req, resp) => {
  UserData.findAll({})
    .then(img => {
      resp.send(img);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = userRoutes;
