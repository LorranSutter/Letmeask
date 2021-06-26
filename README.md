# Let Me Ask - Next Level Week Together

Project provided by [Rocket Seat](https://rocketseat.com.br/) to learn frontend development employing [ReactJS](https://reactjs.org/) and [Firebase](https://firebase.google.com/).

<div align="center">

<img src="https://res.cloudinary.com/lorransutter/image/upload/v1624749570/Let_me_ask/Let_me_ask.gif" alt="Site preview" height="300"/>

</div>

This project aims to create a web application to help live streamers to answer audience's questions.

A view can:

- Login with google account
- Join existing rooms through room id
- Ask a new question
- Like and unlike asked questions in the list

A room admin can:

- Login with google account
- Create a new room
- Highlight asked question
- Mark question as answered
- Delete question
- Close room

## :runner: How to run

Open your terminal in the folder you want to clone the project

```sh
# Clone this repo
git clone https://github.com/LorranSutter/Letmeask.git

# Go to the project
cd Letmeask

# Install dependencies
yarn
```

Create a `.env` or `.env.local` file in the root following the template in `.env.example`. All this information can be found in your account at [firebase console](https://console.firebase.google.com/)

```sh
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
```

Run the project

```sh
# Run the project
yarn start
```

## :book: Resources and technologies :computer:

- [Typescript](https://www.typescriptlang.org/) - superset of JS programming language static typed
- [Node.js](https://nodejs.org/en/) - executes JS scripts in server side
- [Firebase](https://firebase.google.com/) - backend as a service provider
- [Sass](https://sass-lang.com/documentation/syntax) - CSS pre-processor with syntax advancements
- [ReactJS](https://reactjs.org/) - frontend library
- [React router dom](https://www.npmjs.com/package/react-router-dom) - routing and navigation for react apps
- [Class names](https://www.npmjs.com/package/classnames) - conditionally join classNames together