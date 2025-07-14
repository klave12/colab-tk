"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });

      Book.belongsTo(models.Author, {
        foreignKey: "author_id",
        as: "author",
      });
    }

    toJSON() {
      const values = { ...this.get() };

      delete values.createdAt;
      delete values.updatedAt;
      delete values.category_id;
      delete values.author_id;

      return values;
    }
  }
  Book.init(
    {
      book_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
