const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be used for installation?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using this program?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use for your project?',
            choices: [
                'MIT',
                'Apache2.0',
                'GPL3.0',
                'BSD3',
                'None',
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Were their any contributors on this project?',
        },
        {

            type: 'input',
            name: 'tests',
            message: 'What command should be used to run a test?',
            default: 'npm run tests'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub username?',

        },
        {
            type: 'input',
            name: 'questions2',
            message: 'What is your email address?'
        },
    ])

.then(function (response) {
    fs.writeFile(path.join(process.cwd(), 'sampleREADME.md'),

`
# Title
${response.title}
# License
[![badge:${response.license}](https://img.shields.io/badge/license-${response.license}-brightgreen)](https://opensource.org/licenses/${response.license})
This application is covered by the ${response.license} license. 
# Description
${response.description}   
## Table of Contents 
1. [Title](#Title)
2. [Descrition](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributors](#Contributors)
7. [Test](#Tests)
8. [Questions](#Questions)  
# Installation
${response.install}   
# Usage
${response.usage}     
# Contributors
${response.contributors}  
# Tests
${response.tests}  
# Questions
* Feel free to reach out to me with any additional questions.
## GitHub username: 
${response.questions} 
## Email Adress:
${response.questions2}
## Code:
https://github.com/spaulsen-creator/09-Node.js-README-generator
![Changed HTML](./assets/ScreenshotREADME.png)
## Walkthrough:
![Demo of README](./assets/README.mdgenerator.gif)
`, (err) =>
        err ? console.log(err) : console.log('README created successfully!'))

})

function init() {

}

init();
