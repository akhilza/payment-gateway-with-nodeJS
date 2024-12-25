require('dotenv').config();
const stripe = require('stripe')("sk_test_51PS825P9I7WFvUJtsoG1aIAejKJf0vSjFMkRFmvvjZtxUKDgrFZVWoIqr2EDAYdnjp7FyGWZOtX3LDwQSiAvoHU100KCIsXanw");

module.exports = stripe;
