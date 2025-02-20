//ON CHANGE -> work when we click outside
const handleTextChange = (e) => {
  console.log(e);
  console.log(e.target.value);
}
//KEYDOWN -> previous value at every keypress
const handleKeyDown = (e) => {
  console.log(e);
  console.log(e.target.value);
}
//KEYUP - updated value after every keypress
const handleKeyUp = (e) => {
  console.log(e);
  console.log(e.target.value);
}