'use strict';

var Sequelize = require('sequelize');

var secrets = require('./env/config.json');

var db = new Sequelize(secrets.databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
