const sqlite3 = require("squlite3")
const { open } = require ("squlite")

module.exports = () => 
    open({
        filename: '/src/db/rocketq.sqlite',
        driver: sqlite3.Database
    })

