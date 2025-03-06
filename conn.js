import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'level5'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL server.');

  const sqlcrt = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY, 
      uname VARCHAR(255) NOT NULL, 
      password VARCHAR(255) NOT NULL
    )
  `;

  db.query(sqlcrt, (err) => {
    if (err) {
      console.error('Failed to create table:', err);
      return;
    }
    console.log('Table created successfully.');

    const sqlinsrt = "INSERT INTO users (uname, password) VALUES('Denny', 'denny034')";
    db.query(sqlinsrt, (err, result) => {
      if (err) {
        console.log("Insertion failed:", err);
      } else {
        console.log("Record inserted successfully:", result.insertId);
      }

      db.query("SELECT * FROM users", (err, result) => {
        if (err) {
          console.log("Error selecting records:", err);
        } else {
          console.log("Selected records:", result);
        }

        const update = "UPDATE users SET uname='Kalisa' WHERE id = 1";
        db.query(update, (err, result) => {
          if (err) {
            console.log("Record not updated:", err);
          } else {
            console.log("Record updated successfully.");
          }

       
        });
      });
    });
  });
});
const sqldelete="DELETE FROM users where id=18";
db.query(sqldelete,(err)=>{
  if (err) {
    console.log(" Failed deleted to Record ")
    return;
    
  }
  else{
    console.log("Record deleted")
  }
})

    console.log("Record deleted")
  }
})

export default db;
