const env = process.env;
const fs = require('fs');
const db = {
  host: env.DB_HOST,
  user: env.DB_USER || 'root',
  password: env.DB_PASSWORD || '',
  database: env.DB_NAME || 'Patients',
  port: env.DB_PORT || 3306,
  // ssl: {
  //   ca: env.SSL_CERT,
  // }
};

module.exports = db;