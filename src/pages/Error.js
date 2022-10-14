import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import bgimg from "../assets/images/bgloading.png"
import {useNavigate} from "react-router-dom"

function Error() {
  const navigate = useNavigate()
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      navigate("/tumys/tour")

    },500);
    return ()=>{
      clearTimeout(timerId)
    }
  },[])
  return (
    <div style={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgimg})`,
        position: "fixed",
        top: "0",
    }}>
        <h1 className='texterror' style={{textAlign: "center",marginTop : "200px"}}>OPPS! PLEASE TRY AGAIN!</h1>
        {/* <Link className='backerror' style={{ fontSize: "32px",cursor: "pointer",color : "White",fontWeight: "700" }} to="/tumys" >Back</Link> */}
    </div>
  )
}

export default Error