
const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const reactRender = require('react-render');
const app = express()
const server = http.createServer(app)

app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());
// universal rendering

app.post('/render', (req, res) => {
  reactRender(req.body, function(err, markup) {
    if (err) {
      res.status(200).send( {
        error: {
          type: err.constructor.name,
          message: err.message,
          stack: err.stack
        },
        markup: null
      });
    } else {
      res.status(200).send({
        error: null,
        markup: markup
      });
    }
  });
})

// start the server
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }
  return console.info(`
      Server running on http://localhost:${port} [${env}]`)
})
