#!/usr/bin/env bash

CI=true npm run test:front -- --coverage
cp ./coverage/coverage-final.json ./coverage/coverage-front.json
npm run test:server -- --coverage
cp ./coverage/coverage-final.json ./coverage/coverage-server.json
node merge-coverages.js --out ./coverage/coverage-server.json ./coverage/coverage-front.json ./coverage/coverage-final.json
istanbul report lcov text