const { Model, DataTypes } = require("sequelize");

class Stores extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
            },
            {
                sequelize,
            }
        )
    }

    static associate(models) {
        this.belongsToMany(models.Games, {
            through: "game_stores",
            foreignKey: "store_id"
        });
    }
}

module.exports = Stores;