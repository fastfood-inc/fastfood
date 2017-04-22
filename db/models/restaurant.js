'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Restaurant;
};