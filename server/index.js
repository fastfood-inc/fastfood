const path = require('path');
const express = require('express');
const db = require('../db/models');

module.exports = function () {
  const app = express();
  const indexPath = path.join(__dirname, '/../index.html');
  const publicPath = express.static(path.join(__dirname, '../public'));

  app.use('/public', publicPath);
  app.get('/', function (_, res) { res.sendFile(indexPath) });

  app.get('/restaurants', function (_, res) {
    db.Restaurant.findAll()
      .then(restaurants => res.status(200).send({ restaurants: restaurants }));
  });

  return app;
};
