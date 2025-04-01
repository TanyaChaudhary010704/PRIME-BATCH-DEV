import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  let [user, setUser] = useState({})
  let [isSubmitted,setIsSubmitted] = useState(false)
  function handleName(event) {
    setUser({...user,name:event.target.value})
  }
  function handleEmail(event) {
    //you should never mutate a state
    setUser({...user,email:event.target.value})
  }
  function handleSubmit() {
    if (user.name.length < 2) {
      alert("Invalid Name");
    } else {
      setIsSubmitted(true);
    }
  }
  return (
    <div>
      {isSubmitted ? (
        // <section>
        //   <h2>Name: {user.name}</h2>
        //   <h4>Email: {user.email}</h4>
        // </section>
        <section>
          {Object.entries(user).map(([key, val])=>{
            return(
              <h3 key={key}>{key}::{val}</h3>
            )
          })}
        </section>
      ) : (
        <section>
          <div>
            <label>Name</label>
            <input
              placeholder="Type here..."
              value={user.name}
              onChange={(e) => handleName(e)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="Type here..."
              value={user.email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </section>
      )}
    </div>
  );
};

export default App;
