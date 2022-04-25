const {Given, When, Then, And, But } = require('@cucumber/cucumber');

const {TodoHome} = require('../pageObjects/TodoHome.js');

const todoHome = new TodoHome();

/**
 * For Scenario : Todo Added Successfully
 */

Given('the user has browsed to home page', async function () {
  await todoHome.browseHomePage();
});

When('the user enters {string} in todo section', async function (todoText) {
  await todoHome.addNewTodo(todoText);
});

Then('the user should see {string} in todo list', async function (message) {
  const response = await todoHome.checkForNewTodo(message);

  if(! response[0]){
    throw new Error(response[1]);
  }
});

/**
 * For Scenario : Todo Deletion
 */
Given('the user has entered {string} in todo section', async function (todoText) {
  await todoHome.addNewTodo(todoText);
});

Given('the user has seen {string} in todo section', async function (message){
  const response = await todoHome.checkForNewTodo(message);

  if(! response[0]){
    throw new Error(response[1]);
  }
});

When('the user clicks on delete button', async function () {
  await todoHome.deleteLatestTodo();
});

Then("the user shouldn't see the deleted todo", async function () {

});

