const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/users', (req, res) => {
  res.json({ message: 'This is the GET user path' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'This is the POST path and a user was added' });
});

app.put('/users', (req, res) => {
  res.json({ message: 'This is the PUT path and user data was replaced' });
});

app.patch('/users', (req, res) => {
  res.json({ message: 'This is the PATCH path and user data was updated' });
});

app.delete('/users', (req, res) => {
  res.json({ message: 'This is the DELETE path and a user was removed' });
});

// --- PRODUCTS ROUTES ---

app.get('/products', (req, res) => {
  res.json({ message: 'This is the GET product path' });
});

app.post('/products', (req, res) => {
  res.json({ message: 'This is the POST path and a product was added' });
});

app.put('/products', (req, res) => {
  res.json({ message: 'This is the PUT path and product data was replaced' });
});

app.patch('/products', (req, res) => {
  res.json({ message: 'This is the PATCH path and product data was updated' });
});

app.delete('/products', (req, res) => {
  res.json({ message: 'This is the DELETE path and a product was removed' });
});

// --- SERVER START ---
app.listen(PORT, () => {
  console.log(`SHOPLEFT API running at http://localhost:${PORT}`);
});
