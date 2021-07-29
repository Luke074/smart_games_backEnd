const { Model, DataTypes } = require("sequelize");

class Store extends Model {
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

    static associations(models) {
        this.belongsToMany(models.Game, {
            through: "game_store",
            foreignKey: "store_id"
        });
    }
}

module.exports = Store;