## Installation

- npm i
- npm start

  Now the app will be serving at localhost:3000

## About the app

- Login functionality
  - Connect the login form to the /login ajax call.
  - valid username/password, transition to the games list screen.
  - On invalid username/password, provide feedback and allow to try again.
- Log out functionality
  - Connect the log out button to the /logout ajax call.
  - On valid log out, transition to login screen with empty input fields.
- Games list screen
  - Requires user to be logged in
  - List all games from the /games ajax call.
  - List categories from /categories ajax call.
  - Provide functionality for filtering by typing.
  - Provide functionality to filter by category.
