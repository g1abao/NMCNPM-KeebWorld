const mysql = require('mysql2/promise');

const db = {connection: null};

(async () => {
    // create the connection to database
    db.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cnpm_keebworld',
      password: 'PFH#23kgrw9'
  
    });
    console.log('Database connected!');
})(); //

module.exports = db;