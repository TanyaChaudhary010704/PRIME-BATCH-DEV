//node vs element
//while parsing html file browser forms a document object model which is a tree like structure root isdocument then html then head,body and so on
//browser is equivalent to window in js
//BROWSER OBJECT MODEL -  allows js to talk to browser
//DOCUMENT OBJECT MODEL - through it js can access and change html elements
//document is given by window (window.document->document)
// console.log(document);//show html document
// console.dir(document);//for key value pairs
// console.dir(window);

//---------------------------------------------------------
//DOM MANIPULATION
// document.write("Hello");

//---------------------------------------------------------
//FINDING ELEMENTS

//1. document.getElementById() --> null/element
// const ele = document.getElementById("text-1");
// console.log(ele);//null
// ele.style.color = "red";

//2. document.getElementsByClassName()-->HTML collection(iterable)
// const ele = document.getElementsByClassName("text");
// console.log(ele);

//3. document.getElementsByTagName()-->HTML collection(iterable)
// const ele = document.getElementsByTagName("p");
// console.log(ele);

//4. document.querySelector()-->null / element
// const ele = document.querySelector("#text-1");
// console.log(ele);
// const ele = document.querySelector(".text");
// console.log(ele);
// const ele = document.querySelector("p");
// console.log(ele);

//5. document.querySelectorAll() -->Nodelist
// const ele = document.querySelectorAll(".text");
// console.log(ele);

//---------------------------------------------------------

//DOM EXAMPLE 1

//h1 color red

//METHOD 1
// console.dir(document.children[0].children[1].children[0])
// document.children[0].children[1].children[0].style.backgroundColor = "red";

//---------------------------------------------------------

//METHOD 2
const outerBox = document.getElementById("outer-div");
// for (let div of outer-div.children) {
//   div.style.backgroundColor = "yellow";
// }
outerBox.style.backgroundColor = "blue";
//Array.from() --> convert to array
const innerDiv = Array.from(outerBox.children);
innerDiv.forEach((div) => {
  div.style.backgroundColor = "yellow";
})

//-----------------------------------------------------

//mapping text into p element
const mapping = {
  Invitation: "You are now invited for event",
  Reminder: "You are reminded for task",
  Notice: "You have a notice from college",
  Message:"You have a 7 messages"
}
innerDiv.forEach((div) => {
  div.style.backgroundColor = "yellow";
  div.children[1].innerText = mapping[div.children[0].innerText];
})

//-----------------------------------------------------4
//CREATE ELEMENT
//APPEND--> append node and text
//APPEND CHILD-->Append only node
//REMOVE
//REMOVE CHILD
//PREPEND
const newElement = document.createElement("div");
const rootElement = document.querySelector("body");
rootElement.appendChild(newElement);
Object.entries(mapping).forEach(entry => {
  const newChildDiv = document.createElement("div");
  newChildDiv.style.border = "1px solid black";
  newElement.appendChild(newChildDiv);
  newChildDiv.innerHTML = `
  <h2 style="color:orange">${entry[0]}</h2>
  <p>${entry[1]}</p>`
});
rootElement.remove(newElement);
//html do not know what is happening in css
