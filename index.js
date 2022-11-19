const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3003;
const scheduleRouter = require('./src/routes/schedule.route');
const whitelist = ["http://localhost:3001"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ 'message': 'ok' });
})

app.use('/schedule', scheduleRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ 'message': err.message });

  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API is listening at http://localhost:${port}`)
});