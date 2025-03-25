import { useState } from "react";

//does not re-render / re-run , so on change input , display wil not change
const AppForm = () => {
  //let name = "Mohan";
  const [monitor, remote] = useState("Mohan"); 
  console.log("Re-rendered", monitor);
  const handleChange = (e) => {
    //set time out will execute after 2 sec but till then the function is completed and the value which was changed is expired or we can say never used . So when the set time out executes , then the old value will be used. so we add e.nativeEvent.data
    setTimeout(() => {
      console.log(e.target.value);
      remote(e.target.value.toUpperCase()+e.nativeEvent.data);//state wiil be changed after the function is completed
    })
    console.log("updated", monitor);
  }
  return (
    <div>
      <p>Name</p>
      <input value={monitor} placeholder="Please Enter Here....." onChange={handleChange} />
      <h3>Hello {monitor} !</h3>
    </div>
  )
}
export default AppForm;