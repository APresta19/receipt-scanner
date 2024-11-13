class UserStorage
{
    constructor()
    {
        this.id = 0;
        this.users = {}; //create an object for user information
    }
    addUser({first, last})
    {
        //add the user to the users object
        const id = this.id;
        this.users[id] = {id, first, last};
        this.id++;
    }
}

module.exports = new UserStorage();