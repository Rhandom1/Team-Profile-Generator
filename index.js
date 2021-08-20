const inquirer = require("inquirer");
const fs = require("fs");
const generatePage;

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your id number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

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