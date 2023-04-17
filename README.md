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


## Questions 

  For any questions, Please reach out at: 

  * GitHub: http://github.com/savitamanchanda
  * Email: manchandasavita3@gmail.com

  ## Links to the Deployed Application 

  * The URL of the deployed application - https://sheltered-coast-51898.herokuapp.com/

  * The URL of the GitHub repository - https://github.com/savitamanchanda/Book-Search-Engine

  ![](./client/public/gif.gif)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.22%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.44%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.55.58%20PM.png)
  ![](./client/public/Screenshot%202023-04-14%20at%2012.56.07%20PM.png)

