const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE example (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

  const stmt = db.prepare("INSERT INTO example (name, age) VALUES (?, ?)");
  stmt.run("John Doe", 25);
  stmt.run("Jane Smith", 30);
  stmt.finalize();

  db.each("SELECT * FROM example", function(err, row) {
    console.log(row.id + ": " + row.name + ", " + row.age + " years old");
  });
});

db.close();