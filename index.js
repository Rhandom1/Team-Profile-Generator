const inquirer = require("inquirer");
const fs = require("fs");


//link profiles?
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//team array?
const managerArray = [];
const engArray = [];
const intArray = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the team Manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the your id number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "office",
    },
    

];

const engineerQuestions = [
    {
        type: "input",
        message: "Please enter the employee's name.",
        name: "engName"
    },
    {
        type: "input",
        message: "Please enter the employee's id.",
        name: "engId"
    },
    {
        type: "input",
        message: "Please enter the employee's email.",
        name: "engEmail"
    },
    {
        type: "input",
        message: "Please enter the employee's gitHub username.",
        name: "engGit"
    },
];
const internQuestions = [
    {
        type: "input",
        message: "Please enter the intern's name.",
        name: "intName"
    },
    {
        type: "input",
        message: "Please enter the intern's id.",
        name: "intId"
    },
    {
        type: "input",
        message: "Please enter the intern's email.",
        name: "intEmail"
    },
    {
        type: "input",
        message: "Please enter the intern's school.",
        name: "intSchool"
    },
];

function addManager() {
    inquirer.prompt(managerQuestions).then((response) => {
        const manager = new Manager (response.name, response.id, response.email, response.office);
        managerArray.push(manager)
        //call the next function here
        addEmployee();
    
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add a new employee?",
            name: "role",
            choices:["Engineer", "Intern", "No"]
        },
    ]).then((response) => {
        if (response.role === "Engineer") {
            //call engineer function here
            addEngineer();
        } else if (response.role === "Intern") {
            //call Intern function here
            addIntern();
        } else {
            //call buildHTML function
            buildHTML();
        }
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer (response.name, response.id, response.email, response.engGit);
        engArray.push(engineer)
        //call the next function here
        addEmployee();
    
    })
}

function addIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern (response.name, response.id, response.email, response.intSchool);
        intArray.push(intern)
        //call the next function here
        addEmployee();
    
    })
}
addManager();

function buildHTML() {
    fs.writeFile("generateHTML.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    ${createManagerCard()}
                    ${createEngineerCard()}
                    ${createInternCard()}
                </div>
            </div>
        </div>
        
    </body>
    </html>
    `, err => {
        if (err) throw err;
    })
}

function createManagerCard () {
    let manager = "";
    for (let i = 0; i < managerArray.length; i++) {
        const element = managerArray[i];
        manager += `
        <div class="card mx-auto" style="width: 18rem">
                        <h5 class="card-header">${element.name}<br /><br />${element.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.id}</li>
                            <li class="list-group-item">email: ${element.email}</li>
                            <li class="list-group-item">Office: ${element.officeNumber}</li>
                        </ul>
                    </div>
        `
        
    }
    return manager;
}

function createEngineerCard () {
    let engineer = "";
    for (let i = 0; i < engArray.length; i++) {
        const element = engArray[i];
        engineer += `
        <div class="card mx-auto" style="width: 18rem">
                        <h5 class="card-header">${element.name}<br /><br />${element.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.id}</li>
                            <li class="list-group-item">email: ${element.email}</li>
                            <li class="list-group-item">Office: ${element.gitHub}</li>
                        </ul>
                    </div>
        `
        
    }
    return engineer;
}

function createInternCard () {
    let intern = "";
    for (let i = 0; i < intArray.length; i++) {
        const element = intArray[i];
        intern += `
        <div class="card mx-auto" style="width: 18rem">
                        <h5 class="card-header">${element.name}<br /><br />${element.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.id}</li>
                            <li class="list-group-item">email: ${element.email}</li>
                            <li class="list-group-item">Office: ${element.school}</li>
                        </ul>
                    </div>
        `
        
    }
    return intern;
}

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         err ? console.log (err) : console.log("Answers received!")
//     })
// }

// function init() {
//     inquirer.prompt(questions).then((response) => {
//         writeToFile("index.html", )
//     })
// }

// init();