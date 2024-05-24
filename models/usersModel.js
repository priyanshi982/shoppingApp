module.exports = (sequelize, DataTypes) => {
  const UserData = sequelize.define('UserData', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jwt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return UserData;
};
