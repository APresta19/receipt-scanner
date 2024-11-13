const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// Hardcoding them here for testing
module.exports = new Pool({
    host: "localhost",
    user: "andrew",
    database: "top_users",
    password: "february19",
    port: 5432
});