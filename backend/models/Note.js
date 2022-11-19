var Sequelize = require('sequelize');
var sequelize = require('../config/database');

var Note = sequelize.define('notes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  active: Sequelize.BOOLEAN
}, {timestamps: true});

module.exports = Note
