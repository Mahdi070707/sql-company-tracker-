# Employee Tracker

## Description
Employee Tracker is a command-line application that allows business owners to efficiently manage their company's employee database. This application provides an interface for users to view, add, and update information on departments, roles, and employees.

## Technologies Used
- Node.js
- PostgreSQL
- Inquirer (v8.2.4)
- pg package

## Features
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd employee-tracker
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up PostgreSQL database:
   - Configure your database connection in `.env` file.
   - Run the schema and seed files to set up tables and sample data.
5. Start the application:
   ```sh
   node index.js
   ```

## Usage
1. Run `npm start` to start the application.
2. Select options from the interactive menu to view, add, or update company data.
3. Follow prompts to input relevant details.
4. Data is stored and retrieved dynamically from the PostgreSQL database.

## Walkthrough Video
https://drive.google.com/file/d/14pvcHjVu_9b1VFTx_AvVzi2dCVpnv_fz/view

## Database Schema
The database consists of three main tables:
- `department` (id, name)
- `role` (id, title, salary, department_id)
- `employee` (id, first_name, last_name, role_id, manager_id)

## Future Enhancements
- Update employee managers
- View employees by manager
- View employees by department
- Delete departments, roles, and employees
- View department budget summary

## License
This project is licensed under the MIT License.

