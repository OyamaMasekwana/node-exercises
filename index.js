// const conn = require('.mysql2/promise');
const express = require('express');
const app = express();
const conn = require('./db');

app.use(express.json()); 


app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';
  conn.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


app.get('/employees/:id', (req, res) => {
  const sql = 'SELECT * FROM employees WHERE employee_id = ?';
  conn.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Employee not found' });
    res.json(results[0]);
  });
});


app.post('/employees', (req, res) => {
  const { first_name, last_name, email, phone_number, department, salary } = req.body;
  const sql = `
    INSERT INTO employees (first_name, last_name, email, phone_number, department, salary)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  conn.query(sql, [first_name, last_name, email, phone_number, department, salary], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    
    conn.query('SELECT * FROM employees', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });
});


app.delete('/employees/:id', (req, res) => {
  const sql = 'DELETE FROM employees WHERE employee_id = ?';
  conn.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    
    conn.query('SELECT * FROM employees', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });
});


app.put('/employees/:id', (req, res) => {
  const { first_name, last_name, email, phone_number, department, salary } = req.body;
  const sql = `
    UPDATE employees 
    SET first_name = ?, last_name = ?, email = ?, phone_number = ?, department = ?, salary = ?
    WHERE employee_id = ?
  `;
  conn.query(sql, [first_name, last_name, email, phone_number, department, salary, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    
    conn.query('SELECT * FROM employees WHERE employee_id = ?', [req.params.id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results[0]);
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
