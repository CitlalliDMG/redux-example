# Post app

Web app which allows fetching JSONPlaceholder API demo publications and simulates adding new posts using a form.

Developed to practice and learn how to use React, Redux and Redux-Saga.

Try the demo [here](https://citlallidmg.github.io/redux-example/)

## Stack

- Create React App
- React Redux
- Redux Saga
- Redux Form
- Redux Devtools Extension

## API consumed

- [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Hosting

- [gh-pages](https://github.com/gitname/react-gh-pages)

## Quick Start

```shell
$ git clone https://github.com/CitlalliDMG/redux-example.git
$ cd redux-example
$ npm install
$ npm start
```

## Deploying to GitHub Pages

Configure this app with your project-specific details:

```json
// package.json

{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME",
  // ....
  "scripts": {
    // ....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Build and deploy the app:

```shell
$ npm run deploy
```

## Credits

- Developed by [Citlalli Del Moral](https://github.com/CitlalliDMG)
- Based on Brad Traversy's [Redux Crash Course With React](https://www.youtube.com/watch?v=93p3LxR9xfM)
