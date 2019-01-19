const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();

const production = process.env.NODE_ENV === 'production';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { generateData } = require('./genereateData');
const filterData = require('./filterData');

const data = generateData();

app.use(express.static('public'));

app.post('/sales', (req, res) => {
  const { limit } = req.body;
  const filteredData = filterData(data, req.body.filter);

  res.json({
    data: filteredData.slice(0, limit),
    limit,
    total: filteredData.length,
  });

  // setTimeout(() => {
  //   res.json({
  //     data: filteredData.slice(0, limit),
  //     limit,
  //     total: filteredData.length,
  //   });
  // }, 500);
});

if (!production) {
  app.listen(3001, () => {
    console.log(`Sales History app listening on port 3001`);
  });
}

module.exports.handler = serverless(app);
