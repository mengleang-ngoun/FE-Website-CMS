const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: "localhost",
      port: "3306",
      database: "fe_db",
      user: "root"
    },
    debug: false,
  },
});
