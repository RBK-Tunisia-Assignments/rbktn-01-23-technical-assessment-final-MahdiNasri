const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db MYSQL conected ");
  }
});
module.exports = connection;
