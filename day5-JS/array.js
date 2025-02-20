//---------------------------------------------------------
//INDEXOF()

//PRIMITIVE ELEMENTS

// let arr = [1,2,3,4,5,6,7,8];
// let position = arr.indexOf(8);
// console.log(position);

// let arr = [1,8,3,8,5,6,7,8];
// let position = arr.indexOf(8);
// console.log(position);

//NON PRIMITIVE ELEMENTS - have different address

// let arr = [{ id: 1 }, { id: 7 }];
// let position = arr.indexOf({ id: 7 });
// console.log(position);

// let arr = [[1,2],[3,4],[5,6],[6,7]];
// let position = arr.indexOf([5,6]);
// console.log(position);

//---------------------------------------------------------
let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);
let arr2 = [[1, 2], [3, 4], [5, 6]]; 
arr.push("Mad");
arr2.length = 2;//changed length
arr.reverse();
console.log(arr.keys());//Iterator
//------------------------------------------------
//MUTATING METHODS
arr.copyWithin(0, 1, 2);
arr.fill(1, 0, 3);
arr.pop();
arr.shift();//removes first element
arr.unshift(10);//insert at start and return lenght
let sorted = arr.sort();//sort lexographically
arr.splice(2, 2, 40);
let concat = arr.concat(arr2);
let reversed = arr.toReversed();
console.log(arr);
console.log(arr2);
console.log(sorted);
console.log(concat);
console.log(reversed);
console.log(Array.from("foo"));
console.log(Array.of("foo", 2, "bar", true));//form array
console.log(arr.every((ele) => ele >= 1));//check condition for every element of array
console.log(arr.filter((ele) => ele >= 10));
//find ->fisrt ele that satisfy testing function | undefined
//findIndex -> idx of that element
//indexOf -> idx of a value
//includes -> to find if vlaue exists in array
//some -> to find if any element satisfies testing function
//some -> to find all elements that satisfies testing function
console.log([0, 1, [2, [3, [4, 5]]]].flat());//reduces array to elements
console.log(["Fire", "Air", "Water"].join());//join by default by ,


