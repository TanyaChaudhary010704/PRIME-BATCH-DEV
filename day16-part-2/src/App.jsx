import React from 'react'
import P from "papaparse"
import { useState } from 'react'
import Card from './Card'

const App = () => {
  const [profiles,setProfiles] = useState([])
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    P.parse(file, {header:true,complete:handleData})
    console.log(e)
  }
  const handleData = (res) => {
    const { data, errors } = res
    if (errors.length > 0) {
      alert("Error!")
    } else {
      setProfiles(data)
    }
  }
  console.log(profiles)
  return (
    <div>
      <div>
        <input type="file"accept=".csv" onChange={handleFileUpload}/>
      </div>
      <div>
        {
          profiles.map((ele) => (
            <Card
              name={ele.name}
              email={ele.email}
              githubLink={ele.githubLink}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App