const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products WHERE product_code = ?', [req.params.id]);
  res.json(rows[0]);
});

router.post('/', async (req, res) => {
  const { product_code, product_name, product_price, product_quantity } = req.body;
  await db.query('INSERT INTO products VALUES (?, ?, ?, ?)', [product_code, product_name, product_price, product_quantity]);
  res.json({ message: '✅ Product added' });
});

router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM products WHERE product_code = ?', [req.params.id]);
  res.json({ message: '🗑️ Product deleted' });
});

router.put('/:id', async (req, res) => {
  const { product_name, product_price, product_quantity } = req.body;
  await db.query('UPDATE products SET product_name=?, product_price=?, product_quantity=? WHERE product_code=?',
    [product_name, product_price, product_quantity, req.params.id]);
  res.json({ message: '✏️ Product updated' });
});

module.exports = router;
