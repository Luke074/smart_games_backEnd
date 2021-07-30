"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stores", [
      {
        name: "Tamboré",
      },
      {
        name: "União",
      },
      {
        name: "Iguatemi",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};
