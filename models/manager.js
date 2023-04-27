const mysql = require("mysql12");

const connection = mysql.createConnection({
    host: "localhost",
    database: "employee_manager_db",
    username: "root",
    password: "rootroot"
});

const dropManager = () => {
    connection.query(
        `DROP TABLE IF EXISTS manager`,
        function (error) {
            if(error) {
                console.log(error);
            }
            console.log('')
        }
    )
};