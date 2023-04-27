const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'employee_manager_db',
    user: 'root',
    password: 'rootroot'
});

// Total Utilized Budget By Department //
const addTotalByDep = () => {
    connection.query(`SELECT * FROM department`,
        function (error, results) {
            if (error) {
                console.log(error.message);
                return;
            }

            depArray = [];
            results.forEach(item => {
                depArray.push(item.name);
            });

            inquirer
                .prompt({
                    type: 'list',
                    name: 'dep_choice',
                    message: 'Select a department to see the total amount of money being utilized',
                    choices: depArray
                })
                .then((data) => {
                    let department_id;
                    for (let i = 0; i < depArray.length; i++) {
                        if (depArray[i] === data.dep_choice) {
                            department_id = i + 1;
                        };
                    };

                    connection.query(
                        `SELECT department.name AS department, SUM(roles.salary) AS total_salary
                            FROM employee
                            LEFT JOIN roles
                            ON employee.role_id = roles.id
                            LEFT JOIN department
                            ON roles.department_id = department.id
                            WHERE department_id = ?`,
                        [department_id],
                        function (error, results) {
                            if (error) {
                                console.log(error.message);
                                return;
                            }
                            console.table(results);
                            promptUser();
                        }
                    );
                });
        }
    )
};

module.exports = { addTotalByDep };