import React from 'react'
import './Card.css'
import { useState,useEffect } from 'react'
const Card = ({ name, email, githubLink }) => {
  const [data, setData] = useState({})
  const res = githubLink.split("/")
  const userId = res[3]

  const getData = async() => {
    const resp = await fetch(`https://api.github.com/users/${userId}`)
    const temp = await resp.json()
    setData(temp)
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <div className='card'>
      <div>
      <h1>Name:{name}</h1>
      <h5>Email:{email}</h5>
      <a href={githubLink}>Github Link</a>
      </div>
      <div>
      <img src={data.avatar_url} alt="Profile Photo" />
      </div>
    </div>
  )
}

export default Card