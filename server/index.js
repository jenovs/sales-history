const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
const port = 3001;

const { generateData } = require('./genereateData');
const filterData = require('./filterData');

const data = generateData();

app.use(express.static('public'));

app.post('/sales', (req, res) => {
  console.log('fetch');

  const { limit } = req.body;
  const filteredData = filterData(data, req.body.filter);

  setTimeout(() => {
    res.json({
      data: filteredData.slice(0, limit),
      limit,
      total: filteredData.length,
    });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Sales History app listening on port ${port}`);
});
