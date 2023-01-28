require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, {
      host: '127.0.0.1',
      dialect: 'mysql',
      // do i need a port here? port: 3306 ??
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
