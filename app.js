const express = require('express');
const json = require('./test.json')
const controllers = require('./controllers/middleware')
const proxy = require('./controllers/proxy')

const app = express();

app.use('/proxy',
  controllers.onRequest,
  (req, res, next) => {
    console.log(req.url)
    next()
  },
  proxy.proxy,
);

app.listen(8080, () => console.log('server is started on port: 8080'));