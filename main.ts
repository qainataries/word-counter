import inquirer from "inquirer";
const answer: {
    Sentence:string
}=await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
])
//method to avoid wide spaces
const words = answer.Sentence.trim().split(" ")
console.log(words);
console.log(`your sentence word count is ${words.length}`);