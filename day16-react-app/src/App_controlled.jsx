import React from 'react'
import './App.css'
import {useState} from 'react'
const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);
  function handleName(event) {
    setName(event.target.value)
  }
  function handleEmail(event) {
    setEmail(event.target.value)
  }
  function handleSubmit() {
    if (name.length < 2) {
      alert("Invalid Name")
    }
    else {
      setIsSubmitted(true)
    }
    
  }
  return (
    <div>
      {isSubmitted?(<section>
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      </section>):<section>
      <div>
        <label>Name</label>
        <input placeholder='Type here...' value={name} onChange={(e)=>handleName(e)}/>
      </div>
      <div>
        <label>Email</label>
        <input placeholder='Type here...' value={email} onChange={(e)=>handleEmail(e)}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      </section>}
    </div>
  )
}

export default App