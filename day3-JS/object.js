//repeated key will override the old value
const obj = {
  name: "Tanya",
  city:"Delhi",
  city:"Ghaziabad",
}
console.log(obj);

//----------------------------

//accessing key and value
const name = obj.name;

//----------------------------

//adding values in the object
obj.country = "India";
console.log(obj);

//----------------------------

//key which is not present is undefined
console.log(obj.address);//undefined
const key = "city";

//----------------------------

//use [] when accessing by variable  
console.log(obj[key]);

//----------------------------

//updating value in object
obj.city = "Mumbai";

//----------------------------

//here when we open the obj then the name is also changed in advane
//so its better to use copy of object to avoid this bug
console.log(obj);
const key2 = "name";
obj[key2] = "Anaya";

//----------------------------

//delete from object
delete obj.country;
console.log(obj);

//----------------------------

//Primitive Datatypes
//let age = 30
//age = 40 // assign new address to variable so it is immutable

//----------------------------


