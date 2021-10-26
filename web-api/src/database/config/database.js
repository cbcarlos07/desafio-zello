require('dotenv').config()
//DB_PROD_
//DB_
const DB = 'DB_'
module.exports = {
    dialect: process.env[`${DB}DIALECT`],
    host: process.env[`${DB}HOST`],
    username: process.env[`${DB}USERNAME`],
    password: process.env[`${DB}PASSWORD`],
    database: process.env[`${DB}DATABASE`],
    port: process.env[`${DB}PORT`],
    define: {
        timestamps: false
    },
    logging: false,    
    freeTableName: true
}