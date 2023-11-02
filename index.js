import mysql from "mysql2"
import inquirer from "inquirer"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ILikeButts!',
    database: 'employee_db'
})

const viewDepartments = async () => {
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM department'
        )
        console.table(results)

        menuPrompt()
    } catch(err){
        throw new Error(err)
    }
}

const viewRoles = async () => {
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM role'
        )
        console.table(results)

        menuPrompt()
    } catch(err){
        throw new Error(err)
    }
}

const viewEmployees = async () => {
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM employee'
        )
        console.table(results)

        menuPrompt()
    } catch(err){
        throw new Error(err)
    }
}

const addDepartment = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of this new department?'
        }
    ])
    try {
        const [results] = await connection.promise().query(
            `INSERT INTO department (name)
            VALUES (?)`,
            [answers.name]
        )
        console.table(results)

        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
}

const addRole = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the new role you want to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the new role you want to add?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department id of the new role you want to add?' 
        }

    ])
    try {
        const [results] = await connection.promise().query(
            `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`,
            [answers.title, answers.salary, answers.department_id]
        )
        console.table(results)

        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
}

const addEmployee = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the new employee you want to add?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the new employee you want to add?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the new role you want to add?' 
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Who is the manager of the new employee you want to add?' 
        }

    ])
    try {
        const [results] = await connection.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager)
            VALUES (?, ?, ?, ?)`,
            [answers.first_name, answers.last_name, answers.role_id, answers.manager]
        )
        console.table(results)

        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
}

const updateEmployee = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'What is the id of the employee you want to update?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Update the employees role id',
            default: async (sessionAnswers) => {
                const [results] = await connection.promise().query(
                    'SELECT role_id FROM employee WHERE id = ?',
                    [sessionAnswers.id]
                )
                return results[0].id
            }
        }
    ])
    const [results] = await connection.promise().query(
        `UPDATE employee
        SET role_id = ?
        WHERE id = ?`,
        [answers.role_id, answers.id]
    )
    console.log('Employee updated')
    menuPrompt()
}

const menuPrompt = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
    if (answer.action === 'View all departments') {
        viewDepartments()
    } else if (answer.action === 'View all roles') {
        viewRoles()
    } else if (answer.action === 'View all employees') {
        viewEmployees()
    } else if (answer.action === 'Add a department') {
        addDepartment()
    } else if (answer.action === 'Add a role') {
        addRole()
    } else if (answer.action === 'Add an employee') {
        addEmployee()
    } else if (answer.action === 'Update an employee role') {
        updateEmployee()
    } else {
        process.exit(0)
    }
}

menuPrompt()