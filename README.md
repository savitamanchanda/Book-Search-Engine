# Book-Search-Engine
This is a book search engine app that utilizes the Google Books API to provide users with search results based on their input. The app was initially built with a RESTful API for retrieving book data from the Google Books API and serving it to the client. It has since been refactored to use a GraphQL API built with Apollo Server.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license))

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution Guidlines](#contributionguidelines)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)


  ## Description

 The GraphQL API for this app has been implemented using Apollo Server. The GraphQL schema is defined in the typeDefs.js file, and the resolver functions are defined in the resolvers.js file. The API provides the following queries and mutations:

Queries

- me: User: Returns a single user.

Mutations

- saveBook(bookData: BookInput!): User: Saves a book to the user's list of saved books.
- removeBook(bookId: ID!): User: Removes a book from the user's list of saved books.

Types

- Book: Represents a book retrieved from the Google Books API.
- User: Represents a user who has saved books to their account.
- BookInput: Represents the input data required to save a book to a user's account.

  ## Installation 

  To run the app locally, please follow these steps:

 1. Clone the repository: git clone https://github.com/savitamanchanda/Book-Search-Engine

 2. Install dependencies: npm install

 3. Start the development server: npm start

 4. The portfolio should be running on http://localhost:3000/ in your browser.

  ## License 

  https://opensource.org/licenses/MIT

  To learn more about the mit license, click on the URL provided.

  ## Contribution Guidelines

  If you have any suggestions or find any issues, feel free to open a new issue or submit a pull request. Please make sure to follow the existing code style and guidelines.

  ## User Story 

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

  ## Acceptance Criteria 

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```  


## Questions 

  For any questions, Please reach out at: 

  * GitHub: http://github.com/savitamanchanda
  * Email: manchandasavita3@gmail.com

  ## Links to the Deployed Application 

  * The URL of the deployed application - 

  * The URL of the GitHub repository - https://github.com/savitamanchanda/Book-Search-Engine

  ![](./client/public/gif.gif)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.22%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.44%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.58%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.56.07%20PM.png)

