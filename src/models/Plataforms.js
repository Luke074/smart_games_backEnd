const { Model, DataTypes } = require("sequelize");

class Plataforms extends Model {
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
            through: "games_plataforms",
            foreignKey: "plataform_id"
        });
    }
}

module.exports = Plataforms;