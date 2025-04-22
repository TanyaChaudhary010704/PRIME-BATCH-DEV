const express = require("express");
const {requestLog} = require("./utils/logger.js")
const {saveData} = require("./utils/data.js")
const port = 2100;
const app = express();

//to read body of req -> whenever body comes it will be read
app.use(express.json());

// app level middlewares -> whenever a req come it will run
app.use((req, res, next) => {
  requestLog(req);
  next();
})

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message:`Server is running on port ${port}`
  })
})

app.post("/products", (req, res) => {
  let body = req.body;
  saveData(body);
  res.json({
    status: "success",
    message:`Work in Progress`
  })
})

// middlewares
app.use((req, res, next) => {
  res.status(404)
  res.json({
    status: "fail",
    message:"You are trying to access a route which is not defined yet"
  })
})

app.listen(port, () => {
  console.log(`App is running on port : ${port}`)
})