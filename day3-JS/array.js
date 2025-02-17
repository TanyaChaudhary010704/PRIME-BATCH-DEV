//const arr = [];
//loosely typed = same vwriable can be changed to different datatype
//dynamic typed =  datatype may or may not be assigned
const arr = ["Fruits", "Hello", 24];

//shown in the form of object
console.log(arr);
console.log(arr.length);
//-----------------------------------------

//ADDING ELEMENTS
arr.push("World");
console.log(arr);
//-----------------------------------------

//ACCESSING ELEMENTS
console.log(arr[2]);
//-----------------------------------------

//UPDATING ELEMENTS
arr[3] = "Amazon";
console.log(arr);
//WRONG WAY TO UPDATING ELEMENTS
//creates empty spaces form index 4 to 6
arr[7] = "hii";
console.log(arr);
//-----------------------------------------

//DELETE ELEMENTS
//WRONG WAY TO DELETE ELEMENTS
//It also creates empty spaces from where element is deleted
delete arr[2];
console.log(arr);
//-----------------------------------------
//splice shift unshift slice 