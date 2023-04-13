const inquirer = require('inquirer');

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'startApplication',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'View All Roles', 'Update Employee Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
      }

    ])
    .then((choices) => {
      switch (choices['startApplication']) {
        case 'View All Employees':
          viewAllEmployee();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'Update Employee Role':
          updateEmployeeRole()
          break;
        case 'Add Role':
          addRole()
          break; 
        case 'View All Departments':
          viewAllDepartments()
          break;
        case 'Add Department':
          addDepartment()
          break;
        case 'Quit':
          quit()
          break;
      }
    })
    .catch((error) => {
      console.log('error');
    })
};

module.exports = {promptUser}


promptUser()