import pkg from 'pg';
const { Pool } = pkg;

// All of the following properties should be read from environment variables
// Hardcoding them here for testing
const thepool = new Pool({
    //pretend values are here (they are on mine)
});
export default thepool;
