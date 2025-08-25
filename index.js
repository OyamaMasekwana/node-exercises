const express = require('express');
require('dotenv').config();
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(express.json());

app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port localhost:${PORT}`);
});
