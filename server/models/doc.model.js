const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db = require("../config/db.config.js");

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Doc = db.define("doc", {
    course: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    link: {
        type: DataTypes.STRING,
    }},
    {
        timestamps : false
      });

console.log(Doc === sequelize.models.doc);
module.exports = Doc;