# README.md Generator

## Description 
  



## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
  

## Installation

*Steps required to install project and how to get the development environment running:*

To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API




## Usage 

*Instructions and examples for use:*

![Gif demo of README-generator](readme-demo.gif)



The application then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile picture (avatar) and email.
From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README).

Finally, `fs.writeFile` is used to generate your project's README.md file. 


## License

This application is provided under an MIT License.

---

## Contributing

This project is not accepting contributions at this time however feel free poke around the code and hit me up with questions or comments.

## Tests

Right now there is no testing enabled

## Questions?



GitHub: 

Email: 