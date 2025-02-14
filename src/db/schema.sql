DROP TABLE IF EXISTS employee, job_role, department;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE job_role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER REFERENCES department(id) ON DELETE CASCADE
);


CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  job_role_id INTEGER REFERENCES job_role(id) ON DELETE CASCADE,
  manager_id INTEGER REFERENCES employee(id),
  FOREIGN KEY (job_role_id) REFERENCES job_role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
