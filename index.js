const fs = require("fs")
const inq = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");


inq.prompt ([
    {
        type: "input",
        message: "What would you like to title this README?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please describe this project.",
        name: "Description"
    },
    {
        type: "input",
        message: "How is this project installed?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Please enter guidelines for people who wish to contribute to this project.",
        name: "Contribution"
    },
    {
        type: "checkbox",
        message: "What license do you want to release this software under?",
        name: "License",
        choices: ["MIT"]
    },
    {
        type: "input",
        message: "Enter your GitHub UserName",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Please enter your Email address",
        name: "Email"
    },
])


// array of questions for user
const questions = [


];
console.log(questions)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// Pseduo code for HW
// npm init


// create and array of questions

// writing a README in a markdown file as a  template

// function will generate README template

// use inquirer to prompt users with questions

// use answers that come back from inquirer - pass those into my generate readme function

// write file using template generated fromREADME function