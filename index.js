const fs = require("fs")
const inq = require("inquirer");

function init() {

    inq.prompt([
        {
            type: "input",
            message: "Please enter a file name for this README. (You can leave out the extension)",
            name: "FileName"
        },
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
            message: "How is this project intended to be used?",
            name: "Usage"
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
        const markdownTemplate = `
    # ${response.Title}

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
    
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ![Gif demo of README-generator](readme-demo.gif)
    ${response.Usage}
    
    ## License
    
    This application is provided under an ${response.License} License.
    
    ---
    
    ## Contributing
    
    ${response.Contribution}
    
    ## Tests
    
    Right now there is no testing enabled
    
    ## Questions?
    Get in touch.
    GitHub: https://github.com/${response.GitHub}
    
    Email: ${response.Email} `

        console.log(response.Title);
        writeToFile(`${response.fileName}.md`, markdownTemplate);
    })

    // Readme file writer
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Markdown File Successfully generated!");

        });
    }

}

init();


