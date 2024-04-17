#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {
  let todoQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What would you like to add in your Todo?",
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Would you like to add more in your Todo?",
      default: "true",
    },
  ]);

  todos.push(todoQuestion.firstQuestion);
  console.log(todos);

  // the loop is running on the based of this variable condition
  condition = todoQuestion.secondQuestion;
}


// Read, update, Delete, ADD     Homework