require('dotenv').config()

const Sequelize = require('sequelize');
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: "127.0.0.1",
    port: "4306",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});