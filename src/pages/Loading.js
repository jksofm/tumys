import React, { useEffect } from "react";
import styled from "styled-components";
import bgloading from "../assets/images/bgloading.png";
import logo from "../assets/images/logo.png"
import star from "../assets/images/star.png"
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      navigate("/tumys/tour360")
    },3000);
    return ()=>{
      clearTimeout(timerId);
    }
  },[])
  return (
    <Wrapper>
      <div className="img-box">
        <img src={bgloading} alt="Loading" />
      </div>
      <div className="container">
        <div className="box">
          <img className="logo" alt="Logo" src={logo} />
          <img alt="star" className="star" src={star} />
          
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  .img-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    padding: 3.4%;
    z-index: 100;
    .box {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .logo{
        display: block;
        width: 41.8%;
      }
      .star {
        width: 2.5%;
        margin-top: 1.6%;
        display: block;
        animation: spinner 1s linear infinite;
      }
    }
    .box::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 30px;
      padding: 3px;
      background: linear-gradient(#CE8F31 100%, #F6E493 100%, #EFD45A 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`;

export default Loading;
