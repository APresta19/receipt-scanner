import pkg from 'pg';
const { Pool } = pkg;

// All of the following properties should be read from environment variables
// Hardcoding them here for testing
const thepool = new Pool({
    host: "127.0.0.1",
    user: "andrew",
    database: "receipt",
    password: "february19",
    port: 5432
});
export default thepool;