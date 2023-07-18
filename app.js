const express = require('express');
const cors = require("cors")
const app = express();
const connectToDatabase = require('./utils/dbConnections')
// db connection

const PORT = process.env.APP_PORT || 8080; // adjust the port if needed
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToDatabase().then(() => {
    }).catch((error) => {
        console.log('Error connecting to the database:', error)
    })
});  