const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

const generateReadMe = (answers) =>
` # Title
${answers.project}
## Description
${answers.description}   
## Table of Contents (Optional)
${answers.project}   
## Installation
${answers.install}   
## Usage
${answers.usage}
## Credits
${answers.credits}   
## License
[![badge:${answers.License}](https://img.shields.io/badge/license-${answers.License}-brightgreen)](https://opensource.org/licenses/${answers.License})
${answers.license}
## Badges
${answers.badges}    
## Features
${answers.features} 
## How to Contribute
${answers.contributors}  
## Code
## Tests
${answers.tests}   `




const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
