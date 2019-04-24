const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// http://localhost:port/api/products
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);


module.exports = app;