import React, { useEffect, useState } from 'react'
import { apiFunction } from '../../Apifnc'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()
    let [phone, setPhone] = useState("")
    let [zip, setZip] = useState("")
    let [fname, setFname] = useState("")
    let [city, setCity] = useState("")

    const getProfileDataApi_Call = async () => {

        let responseData = await apiFunction({
            url: "http://104.211.229.156:1545/api/user/profile/details",
            methord: "GET",
            fromdata: ""
        })
        if (responseData?.status === 200) {
            setPhone(responseData?.data[0]?.phone)
            setZip(responseData?.data[0]?.zipcode)
            setFname(responseData?.data[0]?.fullname)
            setCity(responseData?.data[0]?.city)
         
        }



    }

    useEffect(() => {
     
        getProfileDataApi_Call()
    }, [])



    return (
        <div>
            <h3>
                Profile
            </h3>
            <p>{fname}</p>
            <p>{phone}</p>
            <p>{zip}</p>
            <p>{city}</p>
            <button onClick={()=>{
                window.localStorage?.clear("tech_w")
                navigate("/")
            }}>Logout</button>
          

        </div>
    )
}

export default Profile