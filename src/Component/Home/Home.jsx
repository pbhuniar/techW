import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <>
     <div>Home</div>
     {
        window?.localStorage?.getItem("tech_w")==null && <button onClick={()=>navigate("/login")}>Login</button>
     }
   
    </>
   
  )
}

export default Home