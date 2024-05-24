const {UserData} = require('../../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
  const {username, email, password} = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({message: 'Missing required fields'});
    }
    const existingUser = await UserData.findOne({where: {email: email}});

    if (existingUser) {
      return res.status(400).json({message: 'User Already Existed'});
    }

    const hashedPassWord = await bcrypt.hash(password, 10);
    const newUser = await UserData.create({
      username,
      email,
      password: hashedPassWord,
    });

    const token = jwt.sign(
      {id: newUser.id, email: newUser.email},
      'jwt_secret_key',
      {expiresIn: '1h'},
    );

    res.status(200).json({
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.log('error', error);
    res.status(404).json({
      message: 'Something Went Wrong',
    });
  }
};
const signIn = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await UserData.findOne({email: email});
    if (!existingUser) {
      return res.status(400).json({message: 'User Not found'});
    }
    const matchPassWord = await bcrypt.compare(password, existingUser.password);
    if (!matchPassWord) {
      return res.status(400).json({message: 'Invalid Credentials'});
    }

    const token = jwt.sign(
      {id: existingUser.id, email: existingUser.email},
      'jwt_secret_key',
      {expiresIn: '1h'},
    );

    res.status(200).json({
      user: existingUser,
      token: token,
    });
  } catch (error) {
    console.log('error');
    res.status(404).json({
      message: 'Something Went Wrong',
    });
  }
};

module.exports = {signUp, signIn};
