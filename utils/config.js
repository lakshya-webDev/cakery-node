require("dotenv").config();

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.SERVER_NAME,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    driver: process.env.DRIVER_NAME,
    options: {
        trustServerCertificate: false,
        instanceof: 'MSSQLSERVER',
        encrypt: false, // Adjust this based on your server configuration
    },
};

module.exports = config;
