const conn = require('./db');

// GET all users
function getAllUsers() {
  conn.query('SELECT * FROM users', (e, results) => {
    if (e) throw e;
    console.log('Users:', results); // Array of user objects
  });
}

// GET all products
function getAllProducts() {
  conn.query('SELECT * FROM products', (e, results) => {
    if (e) throw e;
    console.log('Products:', results); 
  });
}

// DELETE a product by name
function deleteProduct(name) {
  const sql = 'DELETE FROM products WHERE name = ?';
  conn.query(sql, [name], (e, result) => {
    if (e) throw e;
    console.log(`Deleted ${result.affectedRows} product(s) named ${name}`);
  });
}

// INSERT a new product
function insertProduct(name, price, quantity) {
  const sql = 'INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)';
  conn.query(sql, [name, price, quantity], (e, result) => {
    if (e) throw e;
    console.log(`Inserted ${name} with ID: ${result.insertId}`);
  });
}

// UPDATE an existing product by ID
function updateProduct(id, newName, newPrice, newQuantity) {
  const sql = 'UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?';
  conn.query(sql, [newName, newPrice, newQuantity, id], (e, result) => {
    if (e) throw e;
    console.log(`Updated product with ID ${id}`);
  });
}

getAllUsers();
getAllProducts();
deleteProduct('Baro');
insertProduct('Pizza', 120.00, 10);
updateProduct(1, 'Super Soap', 15.00, 60);
