const express = require("express");
const path = require('path');
const db = require('./db');
const morgan = require("morgan");

const app = express();

app.use(morgan("dev")); //logging middleware
app.use(require('body-parser').json()); //json parser
app.use('/', express.static(path.join(__dirname, '..', 'server/public'))); //static path

//require in your routes and use them on your api path

app.use('/api', require('./routes/api'));

//404 handler
app.use((req, res, next) => {
  const error = Error(`Page not found(${req.url})`);
  error.status = 404;
  next(error);
})

//500 handler
app.use((err, req, res, next) => {
  console.log(err, err.stack);
  res.status(err.status || 500).send(`
  <html>
    <body>
      <h1>${err}</h1>
      <p>${err.stack}</p>
    </body>
  </html>`)
})

//set PORT and listen
const port = process.env.PORT || 5055;

const init = async () => {
  try{
    await db.syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch (err) {
    console.log(err);
  }
}

init();
