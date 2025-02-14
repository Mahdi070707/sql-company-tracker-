import pool from '../db/connection.js';

export const getEmployees = async () => {
    const result = await pool.query(
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, 
        m.first_name AS manager 
        FROM employee e 
        JOIN job_role r ON e.job_role_id = r.id 
        JOIN department d ON r.department_id = d.id 
        LEFT JOIN employee m ON e.manager_id = m.id;`
    );
    return result.rows;
};

export const addEmployee = async (firstName: string, lastName: string, job_roleId: number, managerId: number | null) => {
    await pool.query("INSERT INTO employee (first_name, last_name, job_role_id, manager_id) VALUES ($1, $2, $3, $4);", 
    [firstName, lastName, job_roleId, managerId]);
};

export const updateEmployeeRole  = async (employeeId: number, job_roleId: number) => {
    await pool.query("UPDATE employee SET job_role_id = $1 WHERE id = $2;", [job_roleId, employeeId]);
};

export const deleteEmployee = async (id: number) => {
    await pool.query("DELETE FROM employee WHERE id = $1;", [id]);
};

export const getEmployeesByManager = async (managerId: number) => {
    const result = await pool.query("SELECT * FROM employee WHERE manager_id = $1;", [managerId]);
    return result.rows;
};

export const getEmployeesByDepartment = async (departmentId: number) => {
    const result = await pool.query(
        `SELECT e.* FROM employee  
         JOIN job_role r ON e.job_role_id = r.id 
         WHERE r.department_id = $1;`, [departmentId]);
    return result.rows;
};

export {};
