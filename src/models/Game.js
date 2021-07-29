const { Model, DataTypes } = require("sequelize");

class Game extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                description: DataTypes.TEXT,
                price: DataTypes.DOUBLE,
                image: DataTypes.STRING,
            },
            {
                sequelize,
            }
        )
    }

    static associations(models) {
        this.belongsToMany(models.Store, {
            through: "game_store",
            foreignKey: "game_id"
        });
        this.belongsToMany(models.Plataform, {
            through: "game_plataform",
            foreignKey: "game_id"
        });
    }
}

module.exports = Game;