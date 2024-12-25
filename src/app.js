const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/payments', paymentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
