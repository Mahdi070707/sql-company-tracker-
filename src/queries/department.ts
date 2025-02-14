import pool from '../db/connection.js';

export const getDepartments = async () => {
    const result = await pool.query("SELECT * FROM department;");
    return result.rows;
};

export const addDepartment = async (name: string) => {
    const existingDept = await pool.query("SELECT * FROM department WHERE name = $1;", [name]);
    if (existingDept.rows.length === 0) {
        await pool.query("INSERT INTO department (name) VALUES ($1);", [name]);
    } else {
        console.log(`Department "${name}" already exists.`);
    }
};


export const deleteDepartment = async (id: number) => {
    await pool.query("DELETE FROM department WHERE id = $1;", [id]);
};

