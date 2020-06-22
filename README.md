# Desafio-Telefonia

Boilerplate/Starter Project for building RESTful APIs and microservices using Node.js, Express and MongoDB

## Features API

- Automatically restarting in development wtih [Nodemon](https://www.npmjs.com/package/nodemon)
- ES2018 latest features with [Sucrase](https://www.npmjs.com/package/sucrase)
- Linting with [eslint](http://eslint.org)
- Eslint-config-airbnb [airbnb-config](https://www.npmjs.com/package/eslint-config-airbnb)
- Consistent coding styles with [editorconfig](http://editorconfig.org)

- CORS enabled
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Load environment variables from .env files with [dotenv](https://www.npmjs.com/package/dotenv)
- Logging with [morgan](https://github.com/expressjs/morgan)

* API documentation generation with [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

## Todo API

- Add docs in new routes: planos, taxas, simulacao.
- Migrate to Mongodb Models and Create crud to Models.
- [Docker](https://www.docker.com/) support
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- Request validation with [joi](https://github.com/hapijs/joi)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
- Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
- Git hooks with [husky](https://github.com/typicode/husky)

* Deploy on Netlify + Serverless suport
* Continuous integration support with [travisCI](https://travis-ci.org)
* Bettercodehub
* Monitoring with [pm2](https://github.com/Unitech/pm2)

## TODO UI

- Start application

## Requirements

- [Node v12.13+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/luizfelipeneves/Desafio-Telefonia
cd Desafio-Telefonia
rm -rf .git
```

#### Install dependencies:

```bash
yarn
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn build
yarn start
```

## Lint

```bash
# try to fix ESLint errors
yarn fix-lint
```

## License

[MIT License](README.md) - [Luiz Felipe Neves](https://github.com/luizfelipeneves)
