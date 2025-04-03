console.log("Team B loading..")
const sum = (...args) => {
  // count += 1;
  // console.log(count);
  let s = args.reduce((acc, ele) => {
    return acc + ele;
  },0)
  return s;
}
module.exports = sum;
console.log("Team B done !")