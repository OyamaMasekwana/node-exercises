const express = require('express');
const router = express.Router();
const db = require('../db');

// f. Get all users
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users');
  res.json(rows);
});

// g. Get one user
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// h. Add user
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  res.json({ message: '✅ User added' });
});

// i. Delete user
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
  res.json({ message: '🗑️ User deleted' });
});

module.exports = router;
