const express = require('express');
// const jwt = require('jsonwebtoken');
const app = express();

const db = require('./../../models');
const {imgData} = require('./../../models');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.get('/insert', (req, resp) => {
  imgData
    .create({
      imgSource:
        'https://static.javatpoint.com/list/images/list-of-makeup-items5.png',
      name: 'Blush',
      price: 123,
    })
    .catch(err => {
      console.log(err);
    });

  resp.send('Data Inserted');
});

app.get('/select', (req, resp) => {
  imgData
    .findAll({})
    .then(img => {
      resp.send(img);
    })
    .catch(err => {
      console.log(err);
    });
});

// app.post('/login', (req, resp) => {
//   const user = {
//     id: 1,
//     username: 'Priyanshi',
//     email: 'pc@123.com',
//   };

//   jwt.sign({user}, 'secretKey', {expiresIn: '300s'}, (err, token) => {
//     resp.json({
//       token,
//     });
//   });
// });

// app.post('/profile', verifyToken, (req, resp) => {
//   jwt.verify(req.token, 'secretKey', (err, authData) => {
//     if (err) {
//       resp.send({
//         result: 'Invalid Token',
//       });
//     } else {
//       resp.json({
//         message: 'Profile Access',
//         authData,
//       });
//     }
//   });
// });

// function verifyToken(req, resp, next) {
//   const bearerheader = req.headers['authorization'];

//   if (typeof bearerheader !== 'undefined') {
//     const bearer = bearerheader.split(' ');
//     const token = bearer[1];
//     req.token = token;
//     next();
//   } else {
//     resp.send({
//       result: 'Token is not valid',
//     });
//   }
// }

db.sequelize.sync().then(req => {
  app.listen(5000, () => {
    console.log('App is running');
  });
});
