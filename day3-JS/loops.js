const arr = ["Delhi", "Fruits", ""]
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
for (let i in arr) {//i -> keys
  console.log(arr[i]);
}
for (let i of arr) {//i -> values
  console.log(i);
}
//while()
//do while()