import pool from '../db/connection.js';

export const getRoles = async () => {
    const result = await pool.query(
        `SELECT job_role.id, job_role.title, department.name AS department, job_role.salary 
         FROM job_role 
         JOIN department ON job_role.department_id = department.id;`
    );
    return result.rows;
};

export const addRole = async (title: string, salary: number, department_id: number) => {
    await pool.query("INSERT INTO job_role (title, salary, department_id) VALUES ($1, $2, $3);", [title, salary, department_id]);
};

export const deleteRole = async (id: number) => {
    await pool.query("DELETE FROM job_role WHERE id = $1;", [id]);
};
