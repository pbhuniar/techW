import React,{useState,useEffect} from 'react'
import { apiFunction } from '../../Apifnc'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
 let [email,setEmail]=useState("")
 let [Pass,setPass]=useState("")

 let [emailError,setemailError]=useState("")
 let [passwErr,setpasswErr]=useState("")
let [loginres,setLoginres]=useState()
const submit_Api=async()=>{
    let result = await apiFunction({
        methord:"POST",
        url:"http://104.211.229.156:1545/api/user/login",
        fromdata:{
            "email":email,
            "password":Pass
        }
    })
    if(result?.status===200){
        setLoginres(result?.data)
        window.localStorage?.setItem("tech_w",result?.token)
        setEmail("")
        setPass("")
        navigate("/profile")
    }
   
}
console.log(loginres)

const SubmitData=()=>{
    if(email==""){
        setemailError("email can't be empty")
    }
    if(Pass==""){
        setpasswErr("password is empty")
    }
    else {
        submit_Api()
    }

}


useEffect(() => {
 let token = window.localStorage?.getItem("tech_w")
 if(token){
    navigate("/profile")
 }
}, [])




  return (
    <div>
        <div>
        <label>Email </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e?.target?.value)} />
        <div>{emailError}</div>
        </div>
        <div>
        <label >Password </label>
        <input type="text" value={Pass} onChange={(e)=>setPass(e?.target?.value)}/>
        <div>{passwErr}</div>
        </div>
        <button onClick={()=>SubmitData()} >Click Me</button>

    </div>
  )
}
