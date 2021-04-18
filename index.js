const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([{
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
            type: 'input',
            name: 'license',
            message: 'What license would you like to use for your project?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Were their any contributors on this project?',
        },
        {
            type: 'input',
            name: 'test',
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
            name: 'questions',
            message: 'What is your email address?'
        },
    ]);
};

const generateReadMe = (answers) =>
    ` # Title
${answers.title}
## Description
${answers.description}   
## Table of Contents (Optional)
${answers.project}   
## Installation
${answers.install}   
## Usage
${answers.usage}   
## License
[![badge:${answers.License}](https://img.shields.io/badge/license-${answers.License}-brightgreen)](https://opensource.org/licenses/${answers.License})
${answers.license}
## Badges
${answers.badges}    
## Contributors
${answers.contributors}  
## Tests
${answers.tests}  
## Questions
* Feel free to reach out to me with any additional questions.
${answers.questions} `




const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();