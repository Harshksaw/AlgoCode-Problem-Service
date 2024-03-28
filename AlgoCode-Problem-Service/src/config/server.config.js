const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT:  process.env.PORT,
    DB_URL : process.env.DB_URL,
    NODE_ENV : process.env.NODE_ENV || 'development',
}