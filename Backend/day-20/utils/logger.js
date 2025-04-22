const fsPromise = require("fs/promises");
const saveLog = (str) => {
  fsPromise.appendFile("log.txt",`${str}\n`);
}
const requestLog = (req) => {
  const { method, url } = req;
  const date = new Date();
  saveLog(`${date.toLocaleString()} - ${method} - ${url}\n`);
}
module.exports = {
  requestLog,
  saveLog
}