const pool = require("./pool");

async function getAllUsernames() {
    const users = await pool.query("SELECT * FROM usernames");
    return users.rows;
}

module.exports = {
    getAllUsernames
}