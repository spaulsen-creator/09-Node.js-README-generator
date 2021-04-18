const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('./util/generateMarkdown');




// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('./util/generateMarkdown');

// create writeFile function using promises instead of a callback function
//const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([{

            name: 'title',
            message: 'What is the project title?',
        },
        {

            name: 'description',
            message: 'Please provide a description of the project.',
        },
        {

            name: 'install',
            message: 'What command should be used for installation?',
            default: 'npm i',
        },
        {

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


            message: 'What command should be used to run a test?',
            default: 'npm run tests'
        },
        {

            name: 'questions',
            message: 'What is your GitHub username?',

        },
        {

            name: 'questions2',
            message: 'What is your email address?'
        },
    ])

    .then(function (response) {


        fs.writeFile(path.join(process.cwd(), 'sampleREADME.md'),

` # Title
${response.title}
## Description
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
## Installation
${response.install}   
## Usage
${response.usage}   
## License
[![badge:${response.License}](https://img.shields.io/badge/license-${response.License}-brightgreen)](https://opensource.org/licenses/${response.License})
${response.license}
## Badges
${response.badges}    
## Contributors
${response.contributors}  
## Tests
${response.tests}  
## Questions
* Feel free to reach out to me with any additional questions.
${response.questions} 
${response.questions2}
`, (err) =>
err ? consolelog(err) : consolelog('README created successfully!'))

})

function init() {

}

// const init = () => {
//     promptUser()
//         .then((response) => writeFileAsync('README.md', generateReadMe(response)))
//         .then(() => console.log('Successfully wrote to README.md'))
//         .catch((err) => console.error(err));
// };

init();