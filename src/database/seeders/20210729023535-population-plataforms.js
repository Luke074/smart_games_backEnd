"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("plataforms", [
      {
        name: "PC",
      },
      {
        name: "PS4",
      },
      {
        name: "XBoxOne",
      },
      {
        name: "Switch",
      },
      {
        name: "XBOX",
      },
      {
        name: "PS2",
      },
      {
        name: "PS3",
      },
      {
        name: "WiiU",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plataforms", null, {});
  },
};
