INSERT INTO department (name)
VALUES ("sales")

INSERT INTO department (name)
VALUES ("engineering")

INSERT INTO department (name)
VALUES ("it")

INSERT INTO department (name)
VALUES ("custodial")

INSERT INTO department (name)
VALUES ("marketing")

INSERT INTO role (title, salary, department_id)
VALUES ("Sales lead", 100000, 1)

INSERT INTO role (title, salary, department_id)
VALUES ("Engineering lead", 90000, 2)

INSERT INTO role (title, salary, department_id)
VALUES ("IT lead", 85000, 3)

INSERT INTO role (title, salary, department_id)
VALUES ("Custodial lead", 65000, 4)

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing lead", 110000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Johnson", 1, 1)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steven", "Stevenson", 2, 2)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Jameson", 3, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("William", "Williamson", 4, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Thompson", 5, 5)