import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count"
    }
]);
//method to avoid wide spaces
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
