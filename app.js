const express = require('express');
const sql = require('mssql');
const config = require('./config');
const cors = require("cors")
const app = express();


const PORT = 3000; // adjust the port if needed

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});