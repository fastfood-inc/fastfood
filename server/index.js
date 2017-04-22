const path = require('path');
const express = require('express');

module.exports = function () {
  const app = express();
  const indexPath = path.join(__dirname, '/../index.html');
  const publicPath = express.static(path.join(__dirname, '../public'));

  app.use('/public', publicPath);
  app.get('/', function (_, res) { res.sendFile(indexPath) });

  app.get('/restaurants', function (_, res) {
    res.send(JSON.stringify({
      restaurants: [
        { id: 1, name: 'Cabo Grill' },
        { id: 2, name: 'Salinas Grill' },
        { id: 3, name: 'Don Vidal ' }
      ]
    }));
  });

  return app;
};
