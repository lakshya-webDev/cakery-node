const sql = require('mssql');
const dbConfig = require('./config');

async function connectToDatabase() {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to the database');
        // Perform database operations or execute queries here
        // Example: const result = await sql.query('SELECT * FROM your_table');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        sql.close();
    }
}

module.exports = connectToDatabase;