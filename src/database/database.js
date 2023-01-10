const mysql = require('mysql2/promise');

const db = {connection: null};

(async () => {
    // create the connection to database
    db.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cnpm_keebworld',
<<<<<<< HEAD
      password: 'PFH#23kgrw9'

=======
      password: 'Quang030602'
>>>>>>> 659924dd9b07807045a758a249356361c98959ad
  
    });
    console.log('Database connected!');
})(); //

module.exports = db;