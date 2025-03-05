import React from 'react';
import ReactDOM from 'react-dom/client';

const domRoot = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = ({username}) => {
  // console.log(abc.username);
  // const { username } = abc;
  console.log(username);
  return (
    <div>
      <h3>Hello {username}</h3>
      <p>Nice to meet you!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Card></Card>
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