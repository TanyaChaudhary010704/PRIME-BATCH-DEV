import React from "react";
import ReactDOM from "react-dom/client";
// import Card from "./components/card.js";
import Card, { Title } from "./components/card.js";
import {Button} from "./components/button.js";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  return (
    <div>
      <Button color="submit">Submit</Button>
      <Button color="danger">Cancel</Button>
      <Card></Card>
      <Card username={Title}></Card>
      <Card username="Tanya"></Card>
      <Card username="Tanisha"></Card>
      <Card username="Riya" />
      {/* {Card("Likhilesh")}
      {Card({username:"Likhilesh"})} */}
    </div>
    //React.createElement("h1",{},"hello from App")
  );
};
console.log("hello");
reactRoot.render(<App />);
//reactRoot.render(App());
