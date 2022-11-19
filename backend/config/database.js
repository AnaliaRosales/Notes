var Sequelize = require('sequelize');

const database = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

database.sync()

module.exports = database;