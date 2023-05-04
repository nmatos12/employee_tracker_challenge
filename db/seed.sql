-- MANAGERS --
INSERT INTO manager (first_name, last_name)
    SELECT first_name, last_name 
    FROM employee
    WHERE manager_confirm = 1
;

-- DEPARTMENTS --
INSERT INTO department (name) VALUES
    ('Legal'),
    ('Sales'),
    ('Engineering')
;
    
-- ROLES --
INSERT INTO roles (title, salary, department_id) VALUES
    ('Legal Team Lead', 250000, 1),
    ('Lawyer', 180000, 1),
    ('Sales Team Lead', 100000, 2),
    ('Sales Associate', 80000, 2),
    ('Lead Engineer', 150000, 3),
    ('Engineer', 120000, 3)
;

-- EMPLOYEES --
INSERT INTO employee (
    first_name,
    last_name,
    role_id, 
    manager_id, 
    manager_confirm
) VALUES
    ('Tom', 'Nook', 1, null, true),
    ('Jimmy', 'Norris', 2, 1, false),
    ('Tony', 'North', 2, 1, false),
    ('Mapple', 'Grafton', 3, null, true),
    ('Sabelle', 'Apton', 4, 2, false),
    ('Gracie', 'Greyson', 5, null, true),
    ('Molly', 'Croft', 6, 3, false)
;