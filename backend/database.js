const sqlite3 = require("sqlite3").verbose();

// create or open the database
const db = new sqlite3.Database("./database/movieshelf.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("MovieShelf database connected.");
  }
});

// create the users table
db.run(
  `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`,
  (err) => {
    if (err) {
      console.error("Error creating users table:", err.message);
    } else {
      console.log("Users table ready.");
    }
  },
);

module.exports = db;
