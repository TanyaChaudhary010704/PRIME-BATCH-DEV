import React from 'react'
import './App.css'
import {useState} from 'react'
const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true)
    console.log(e);
    console.log(e.target.username.value)
    console.log(e.target.useremail.value)
    setName(e.target.username.value)
    setEmail(e.target.useremail.value)
  }
  return (
    <div>
      {isSubmitted ?
        (<section>
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      </section>) :
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input name="username" placeholder='Type here...'/>
      </div>
      <div>
        <label>Email</label>
        <input name="useremail" placeholder='Type here...'/>
      </div>
      <button>Submit</button>
      </form>}
    </div>
  )
}

export default App