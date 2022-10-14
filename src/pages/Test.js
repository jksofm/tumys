import React, { useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
function Test() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/tumys/tour")
  })
  return (
    <Link to="/tumys/tour">Tour</Link>
  )
}

export default Test