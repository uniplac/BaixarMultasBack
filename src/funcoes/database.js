var Sequelize = require('sequelize');

    const conectanobanco = new Sequelize(
    "pergamarc",
    "api",
    "Uniplac_2022",
    {
      host: "10.3.0.8",
      port: 1433,
      dialect: "mssql",
      //operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );
  
  module.exports = conectanobanco;