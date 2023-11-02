INSERT INTO department (name)
VALUES ("sales");

INSERT INTO department (name)
VALUES ("engineering");

INSERT INTO department (name)
VALUES ("it");

INSERT INTO department (name)
VALUES ("custodial");

INSERT INTO department (name)
VALUES ("marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales lead", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineering lead", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("IT lead", 85000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Custodial lead", 65000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing lead", 110000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("John", "Johnson", 1, "Jonh Jameson");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Steven", "Stevenson", 2, "null");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("James", "Jameson", 3, "null");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("William", "Williamson", 4, "John Jenson");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Tom", "Thompson", 5, "null");