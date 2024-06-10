import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellow.bold("\n \tWelcome to Code with IQRA - Currency Convertor\n"))

//Define the list of Currenncies and their exchange Rates
let exchange_rate: any = {
    "USD": 1,           //Base Currency
    "PKR": 279.93 ,         // Pakistan Rupees 
    "EUR": 0.9,         // European Currency (Euro) 
    "JYP": 113,         // Japenese Currency (Yen)
    "CAD": 1.3,         // Canadian Dollar  
    "AUD": 1.65,        // Australian Dollar 
    

}

//Promt the user to select currencies to convert from and too
let user_answer = await inquirer.prompt([
    { 
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from: ",
        choices: ["USD", "PKR","JYP","CAD","AUD","EUR"]

},
{
    name:"to_currency",
    type: "list",
    message: "Select the currency to convert into:",
    choices: ["USD", "PKR","JYP","CAD","AUD","EUR"]
  },
  {
    name: "amount",
    type: "input",
    message: "Enter the amount to convert:"
    }
]);

// Perform Currency Conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of Conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted Amount = ${chalk.magenta(converted_amount.toFixed(2))}`);
