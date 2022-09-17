const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db = require("../config/db.config.js");

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Tutor = db.define("tutor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please enter your first name'
      },
    }

  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please enter your last name'
      },
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: 'Please enter a valid phone number'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Please enter a valid email address'
      },
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      //is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
      notEmpty: {
        msg: 'Please enter a password'
      },
    }
  },
});

console.log(Tutor === sequelize.models.Tutor);
module.exports = Tutor;