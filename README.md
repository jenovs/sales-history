[![Build Status](https://travis-ci.org/jenovs/sales-history.svg?branch=master)](https://travis-ci.org/jenovs/sales-history)
[![codecov](https://codecov.io/gh/jenovs/sales-history/branch/master/graph/badge.svg)](https://codecov.io/gh/jenovs/sales-history)

### [Live version](https://jenovs.github.io/sales-history/)

## Sales History

See requirements in [requirements](/requirements) folder.

### Tech used:

The project is built using [React](https://github.com/facebook/react/) (with [Create React App](https://github.com/facebook/create-react-app) taking care of bundling, linting, live server, building etc.) and styled with [emotion](https://github.com/emotion-js/emotion).

Testing is done with [Jest](https://github.com/facebook/jest) and [react-testing-library](https://github.com/kentcdodds/react-testing-library).

Code is formatted with [prettier](https://github.com/prettier/prettier) and follows [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

The demo project is deployed on GitHub Pages (frontend) and AWS Lambda (backend). Although AWS Lambda is stateless, the hosted function is not destroyed immediately after it's called, but is kept alive for a while, therefore it's possible to host a simple demo app with a (temporary :) data persistance.

CI/CD is done with [Travis CI](https://travis-ci.org/) - for now only frontend; backend could be deployed from local machine via: `npm run lambda:deploy` (requires [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)).

### Getting Started

Download or clone the repo and install dependencies via

```bash
npm i
```

To run development environment, start backend server with

```bash
npm run start:server
```

and then in a different terminal window run

```bash
npm start
```

To create production build (files for deployment will be placed in the `/build` folder.):

```bash
npm run build
```

Run both frontend and backend tests with

```bash
npm t
```
