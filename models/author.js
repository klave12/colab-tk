"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Author.hasMany(models.Book, {
        foreignKey: "author_id",
        as: "books",
      });
    }

    toJSON() {
      const values = { ...this.get() };

      delete values.createdAt;
      delete values.updatedAt;

      return values;
    }
  }
  Author.init(
    {
      author_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
