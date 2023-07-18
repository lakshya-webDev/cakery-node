# cakery-node

Install mssql
npm i  mssql --save

install sql server on system for local setup 
Using below article:
https://www.c-sharpcorner.com/article/step-by-step-installation-of-microsoft-sql-server-on-windows-system/


If you face issue such as: Connect to Server
 ------Cannot connect to LTS-L10. 
 ------ ADDITIONAL INFORMATION: A connection was successfully established with the server, but then an error occurred during the login process. (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.) (Microsoft SQL Server, Error: -2146893019)

Visit for help 
https://azureops.org/articles/the-certificate-chain-was-issued-by-an-authority-that-is-not-trusted-sql-server/

<!-- Compute Management  -->
SQL Server Config Manager > Network Config Manager > Sql Server Network Config TCP/IP Enabled


<!-- Create DB and alter User & Password-->
Create database CreationCakeryDb
ALTER LOGIN sa ENABLE;
ALTER LOGIN sa WITH PASSWORD = 'xxx'


