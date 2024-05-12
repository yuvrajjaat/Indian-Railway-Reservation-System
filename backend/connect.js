const dotenv = require("dotenv");

dotenv.config();
var PGDATABASE = process.env.PGDATABASE;
var PGHOST = process.env.PGHOST;
var PGPASSWORD = process.env.PGPASSWORD;
var PGPORT = process.env.PGPORT;
var PGUSER = process.env.PGUSER;

const Pool = require("pg").Pool;

const pool = new Pool({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    ssl: {
        rejectUnauthorized: false, // This is not recommended for production
        require: true
    }
});

module.exports = pool;