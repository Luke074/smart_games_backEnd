const { Model, DataTypes } = require("sequelize");

class Games extends Model {
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

    static associate(models) {
        this.belongsToMany(models.Stores, {
            through: "games_stores",
            foreignKey: "game_id"
        });
        this.belongsToMany(models.Plataforms, {
            through: "games_plataforms",
            foreignKey: "game_id"
        });
    }
}

module.exports = Games;