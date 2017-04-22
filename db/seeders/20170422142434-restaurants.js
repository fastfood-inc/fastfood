'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'CaboGrill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salinas Grill',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
