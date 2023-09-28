const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavgameData extends Model {}

FavgameData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "gameData",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favgameData",
  }
);

module.exports = FavgameData;
