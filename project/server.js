
// const mysql = require('mysql2');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'startApplication',
        message: 'What would you like to do?',
        // choices: ['View All Employees', 'Add Employee', 'View All Roles', 'Update Employee Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }

  ])
  .then((choices) => {
    console.log('choices');
  })
  .catch((error) => {
    console.log('error');
  });