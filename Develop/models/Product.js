// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  { // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(),//??????? check back on this one 
      allowNull: false,
      validate:{}
    //  {
    //     if (!validator.isDecimal(String(value))) {
    //       throw new Error('Price must be a decimal number');
    //     }//
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric //come back to this one, look into it.???
      }
    },


    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id', // ask if this correct-- ?????
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
