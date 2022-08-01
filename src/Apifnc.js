
import axios from "axios"
export const apiFunction = async(data)=>{
    const {methord,url,fromdata} = data
    const config = {
        method:methord,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("tech_w")||"",
          },
          url:url,
          data:fromdata

    }


    let responsedata = ""
    await axios(config).then((res)=>{
        responsedata = res.data
    }).catch((err)=>{
        responsedata= err
    })
    return responsedata
}