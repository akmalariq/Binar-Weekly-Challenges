const Pool = require("pg").Pool

const connection = new Pool({
    host: "localhost",
    user: "postgres",
    password: "akmalariq",
    database: "products",
    port: 5432
})

module.exports = connection