const db = require("../db/queries");

async function getUsernames(req, res)
{
    const users = await db.getAllUsernames();
    res.send(users.map(user => user.username).join(","))
}

module.exports = {
    getUsernames
}