const express = require('express');
require('dotenv').config();

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
