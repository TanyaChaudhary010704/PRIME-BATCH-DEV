const fsPromise = require("fs/promises");
const {ulid} = require("ulid")
const saveData = async(data) => {
  data.id = ulid();
  const oldArray = await getProductsArray();
  saveProductArray([obj]);
  // const arr = [data];
  // fsPromise.appendFile("bodyData.txt",`${data}\n`);
};

const saveProductArray = (arr) => {
  fsPromise.writeFile("./data.json", JSON.stringify(arr))
};

const getProductsArray = async () => {
  const str = await fsPromise.readFile("./data.json");
  const arr = JSPN.parse(str);
  return arr;
};
module.exports = {
  saveData
}