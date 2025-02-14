import inquirer from 'inquirer';
import * as departmentQueries from './queries/department.js';
import * as roleQueries from './queries/role.js';
import * as employeeQueries from './queries/employee.js';

const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',   
            'Add department',
            'Add role',
            'Add employee',
            'Update employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            console.table(await departmentQueries.getDepartments());
            break;
        case 'View all roles':
            console.table(await roleQueries.getRoles());
            break;
        case 'View all employees':
            console.table(await employeeQueries.getEmployees());
            break;
        case 'Add department':
            const { departmentName } = await inquirer.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter department name:'
            });
            await departmentQueries.addDepartment(departmentName);
            break;
        case 'Add role':
            const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
                { type: 'input', name: 'roleTitle', message: 'Enter role title:' },
                { type: 'input', name: 'roleSalary', message: 'Enter role salary:' },
                { type: 'input', name: 'departmentId', message: 'Enter department ID:' }
            ]);
            await roleQueries.addRole(roleTitle, parseFloat(roleSalary), parseInt(departmentId));
            break;
        case 'Add employee':
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'Enter first name:' },
                { type: 'input', name: 'lastName', message: 'Enter last name:' },
                { type: 'input', name: 'roleId', message: 'Enter role ID:' },
                { type: 'input', name: 'managerId', message: 'Enter manager ID (optional, leave blank for none):' }
            ]);
            await employeeQueries.addEmployee(firstName, lastName, parseInt(roleId), managerId ? parseInt(managerId) : null);
            break;
        case 'Update employee role':
            const { employeeId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'employeeId', message: 'Enter employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'Enter new role ID:' }
            ]);
            await employeeQueries.updateEmployeeRole(parseInt(employeeId), parseInt(newRoleId));
            break;
        case 'Exit':
            process.exit();
    }
    mainMenu();
};

mainMenu();
