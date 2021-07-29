"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("store", [
      {
        name: "Tamboré",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "União",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Iguatemi",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("store", null, {});
  },
};
