"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("game_plataform", {
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "game",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      platafrom_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "plataform",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_plataform");
  },
};
