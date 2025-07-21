const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies



app.get('/employees', (req, res) => {
  res.json({ message: 'This is the GET route for employees' });
});

app.post('/employees', (req, res) => {
  res.json({ message: 'This is the POST route for employees. A new employee was added.' });
});

app.patch('/employees', (req, res) => {
  res.json({ message: 'This is the PATCH route for employees. An employee was updated.' });
});

app.delete('/employees', (req, res) => {
  res.json({ message: 'This is the DELETE route for employees. An employee was removed.' });
});

// MANAGERS ROUTES 

app.get('/managers', (req, res) => {
  res.json({ message: 'This is the GET route for managers' });
});

app.post('/managers', (req, res) => {
  res.json({ message: 'This is the POST route for managers. A new manager was added.' });
});

app.patch('/managers', (req, res) => {
  res.json({ message: 'This is the PATCH route for managers. A manager was updated.' });
});

app.delete('/managers', (req, res) => {
  res.json({ message: 'This is the DELETE route for managers. A manager was removed.' });
});

// Run 
app.listen(PORT, () => {
  console.log(`PICK 'n STEAL API running at http://localhost:${PORT}`);
});
