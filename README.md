# <a href="https://github.com/frontful/frontful-playground"><img heigth="75" src="http://www.frontful.com/assets/packages/playground.png" alt="Frontful Playground" /></a>

`frontful-playground` is isomorphic [React](https://facebook.github.io/react/), [Express](https://expressjs.com/) and [Frontful](https://github.com/frontful) infrastructure playground for development.

### Installation

```shell
# Install yarn package manager
npm install yarn -g

# Install `frontful-playground` dependencies using yarn to respect `yarn.lock`
yarn install
```

### Scripts

```shell
# Start application for development with isomorphic live reload, state persistence etc.
yarn start

# Start application production build
yarn start:build

# Run tests
yarn test

# Build application for production
yarn build

# Run build manually
PORT=8000 node ./build/server
```
