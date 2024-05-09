#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To Currency Converter");
const Currency = {
    USD: 1,
    EUR: 0.93,
    INR: 83.45,
    PKR: 278.25,
    GBP: 0.80,
    KWD: 0.31,
    AUD: 1.51
};
let questions = await inquirer.prompt([
    {
        message: "Which Currency You Want To Convert : ",
        name: "to_convert",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "GBP", "KWD", "AUD"],
    },
    {
        message: "In Which Currency You Want To Convert : ",
        type: "list",
        name: "convert_In",
        choices: ["USD", "EUR", "INR", "PKR", "GBP", "KWD", "AUD"],
    },
    {
        message: "Enter The Amount You Want To Convert = ",
        type: "number",
        name: "amount_to_convert",
    },
]);
let Currency_to_convert = Currency[questions.to_convert];
let convert_In_currency = Currency[questions.convert_In];
let amount = questions.amount_to_convert;
let base_amount = amount / Currency_to_convert;
let converted_amount = base_amount * convert_In_currency;
console.log("The Amount You Have Is = " + amount + " In " + questions.to_convert + " & By Converting This Amount In To " + questions.convert_In + " Is = " + converted_amount);
