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
]).then(function (response) {
    `# ${response.Title}

    ## Description 
    ${response.Description}
    
    
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
      
    
    ## Installation
    ${response.Installation}

      * [inquirer](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
      * [axios](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API
    
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ![Gif demo of README-generator](readme-demo.gif)
    
    
    The application then takes your responses and uses axios to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile picture (avatar) and email.
    From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README).
    
    Finally, fs.writeFile is used to generate your project's README.md file. 
    
    
    ## License

    ${response.License}
    
    This application is provided under an MIT License.
    
    ---
    
    ## Contributing
    
    ${response.Contribution}
    
    ## Tests
    
    Right now there is no testing enabled
    
    ## Questions?
    
    
    
    GitHub: ${response.GitHub}
    
    Email: ${response.Email} `

    console.log(response.Title);
    
})


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