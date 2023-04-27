const inquirer = require('inquirer');


const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'startApplication',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View Utilized Budget', 'Quit']
            }
        ])
        .then((choices) => {
            switch (choices['startApplication']) {
                case 'View All Employees':
                    viewAllEmp();
                    break;
                case 'View All Employees By Department':
                    viewEmpByDep();
                    break;
                case 'View All Employees By Manager':
                    viewEmpByManager();
                    break;
                case 'Add Employee':
                    addEmp();
                    break;
                case 'Update Employee Role':
                    updateEmp();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break; 
                case 'View All Departments':
                    viewDep();
                    break;
                case 'Add Department':
                    addDep();
                    break;
                case 'View Total Utilized Budget':
                    addTotalByDep();
                    break;
                case 'Quit':
                    quit();
                    break;
            }
        })
        .catch((error) => {
            console.log('error');
        })
};

module.exports = { promptUser };
const { viewAllEmp, viewEmpByDep, viewEmpByManager, addEmp, updateEmp } = require('./models/Employee');
const { viewDep, addDep } = require('./models/Department');
const { viewRoles, addRole } = require('./models/Roles');
const { addTotalByDep } = require('./models/Budget');

promptUser();