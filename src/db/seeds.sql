INSERT INTO department (name) VALUES 
('Marketing'),
('Sales'),
('IT'),
('HR');

INSERT INTO job_role (title, salary, department_id) VALUES
('Manager', 50000, 1),
('Engineer', 60000, 2),
('Salesperson', 40000, 3),
('HR Specialist', 45000, 4);

INSERT INTO employee (first_name, last_name, job_role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL), 
  ('Jane', 'Smith', 1, 1),  
  ('Alice', 'Johnson', 2, 1),
  ('Bob', 'Brown', 3, 1), 
  ('Charlie', 'Davis', 4, 1), 
  ('Eve', 'Miller', 1, NULL),
  ('Grace', 'Wilson', 2, 6),
  ('Hank', 'Moore', 3, 6),
  ('Maya', 'Taylor', 2, 6),
  ('Ivy', 'Williams', 4, 6); 
