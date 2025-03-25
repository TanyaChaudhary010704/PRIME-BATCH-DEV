import { useState } from "react";

//does not re-render / re-run , so on change input , display wil not change
const Form = () => {
  //let name = "Mohan";
  const [name, setName] = useState(); 
  const [about, setAbout] = useState(); 
  const [display, setDisplay] = useState(false);
  const handleSubmit = () => {
    setDisplay(true);
  }
  if (display === false) {
    return (
      <div>
        <input type="text" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
        <br />
        <textarea onChange={(e) => { setAbout(e.target.value) }}></textarea>
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
    )
  }
  else {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    )
  }
}
export default Form;