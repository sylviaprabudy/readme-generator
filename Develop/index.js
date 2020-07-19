const inquirer = require("inquirer")

// array of questions for user
const questions = [

    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return.fs.writeFile(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
