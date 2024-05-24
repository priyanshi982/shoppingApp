const jwt = require('jsonwebtoken');
const SECRET_KEY = 'jwt_secret_key';

function auth(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (token) {
      const bearer = token.split(' ')[1];
      let user = jwt.verify(bearer, SECRET_KEY);
      req.userId = user.id;
    } else {
      res.status(402).json({message: 'Missing Token'});
    }
    next();
  } catch (err) {
    res.status(402).json({message: 'Unauthorized User'});
  }
}

module.exports = auth;
