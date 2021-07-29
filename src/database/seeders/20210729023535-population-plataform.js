"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("plataform", [
      {
        name: "PC",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "PS4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "XBoxOne",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Switch",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "XBOX",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "PS2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "PS3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "WiiU",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plataform", null, {});
  },
};
