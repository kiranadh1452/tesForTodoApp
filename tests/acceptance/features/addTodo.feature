Feature: Add a todo

    As a user
    I want to add a todo in todo list
    So that I can track my todo list

    Scenario: Todo Added Successfully
      Given the user has browsed to home page
      When the user enters 'text' in todo section
      Then the user should see 'text' in todo list

    Scenario: Todo Deletion
      Given the user has browsed to home page
      And the user has entered 'text' in todo section
      And the user has seen 'text' in todo section

      When the user clicks on delete button
      Then the user shouldn't see the deleted todo