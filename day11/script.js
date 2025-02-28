//html document <-> dom api <-> react(brain) <-> object <-> react.createElement <->babel <-> jsx
//REACT  - PascalCase
//----------------------------------------------------------------

/* created html elements using dom (js)*/

// const parent = document.getElementById('parent');
// const ul = document.createElement("ul");
// const h1 = document.createElement("h1");
// h1.innerHTML = "Items";
// for (let i = 1; i <= 3; i++){
//   const li = document.createElement("li");
//   li.innerHTML = `Item ${i}`;
//   ul.appendChild(li);
// }
// parent.appendChild(h1);
// parent.appendChild(ul);

//----------------------------------------------------------------

/*
react act as a layer between dom and js
browser executes the whole operation again even if we want to change a minute thing
react bundles processes and send to browser
*/

// console.log(React);
// console.log(ReactDOM);

// /*connected parent as react root */

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);
// /* created html elements using reactDOM (react)*/
// const li1 = React.createElement("li", {
//   style: {
//     color : "red",
//   }
// },"Item 1 ");//parameters - type,options ,children
// const li2 = React.createElement("li", {
//   className: "item-2",
// },"Item 2 ");//parameters - type,options ,children
// const li3 = React.createElement("li",{},"Item 3 ");//parameters - type,options ,children
// const ul = React.createElement("ul", {}, [li1, li2, li3]);
// reactRoot.render(ul);

//----------------------------------------------------------------

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);
// const title = React.createElement("h1", {}, "hello from react DOM");
// console.log("type of title: ", typeof title);//object
// console.log("title: ", title);

// /*
// symbols can not be copied
// we have to type in mannually
// this helps from cross site scripting attack

// Here, creating a react element (obj made by react.createElement)
// */
// const title2 = {
//   $$typeof: Symbol.for("react.element"),
//   "type": "h1",
//   "key": null,
//   "ref": null,
//   "props": {
//       "children": "hello from react DOM"
//   },
//   "_owner": null,
//   "_store": {}
// }
// reactRoot.render(title2);

//----------------------------------------------------------------

/*
JSX - we can write html code in js 
it is converted in react.createElement in inner processing
*/

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);
// //throw syntax error bcz browser can not understand jsx
// const title2 = <h1>Hello from JSX</h1>;//react element
// reactRoot.render(title2);

const Title3 = () => {
  return <h1>Hello from JSX Again !</h1>
};//react component

// reactRoot.render(title3());
reactRoot.render(<Title3 />);//similar as above

/* to resolve this we use transpiler such as babble to translate jsx to browser */