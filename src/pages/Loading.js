import React, { useEffect } from "react";
import styled from "styled-components";
import bgloading from "../assets/images/bgloading.png";
import logo from "../assets/images/logo.png";
import star from "../assets/images/star.png";
import logodatxanh from "../assets/Icons/logodatxanh.png";
import videobg from "../assets/video/videobackground.mp4"

import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/tumys/tour")
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <Wrapper>
      {/* <div className="img-box">
        <img src={bgloading} alt="Loading" />
      </div> */}
      {/* <div
        className="container"
        style={{ backgroundImage: `url(${bgloading})`,backgroundPosition:"center", backgroundSize:"cover"  }}
      >
        <div className="border" >

        <div className="box" style={{ backgroundImage: `url(${bgloading})`,backgroundPosition:"center", backgroundSize:"cover" }}>
         
          <img className="logo" alt="Logo" src={logo} />
          <img alt="star" className="star" src={star} />
        </div>
        </div>

        
      </div> */}
      

      <div style={{width:"100%",height:"100%"}}>
        <video src={videobg} autoPlay loop muted/>
        <div className="content">
        <div
        className="container"
       
      >
        <div className="border" >

        <div className="box">
         
          <img className="logo" alt="Logo" src={logo} />
          <img alt="star" className="star" src={star} />
        </div>
        </div>

        
      </div>

        </div>
      </div>

    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .img-box {
    position: fixed;
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
    z-index: 100;
    /* background-image: linear-gradient(to right bottom, #6a5af9, #f62682); */
    /* position: relative; */
    padding: 30px;
    
     
   
    .border{
      width: 100%;
      height: 100%;
    padding: 3px;
    /* z-index: -1; */
    border-radius: 10px;
    border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(#CE8F31 100%, #F6E493 100%, #EFD45A 100%);
    /* background-image: linear-gradient(#CE8F31 100%, #F6E493 100%, #EFD45A 100%); */


     
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .box {
      width: 100%;
      height: 100%;
      /* position: relative; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: transparent;
      /* background-image: linear-gradient(to right bottom, #6a5af9, #f62682); */
      border-radius: 10px;
      /* border: 1px solid red; */

      &::before {
        /* content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        margin: -10px;
        background-image: linear-gradient(to right top, #2979ff, #07a787);
        border-radius: inherit; */
      }
      .logodatxanh {
        width: 20%;
        display: block;
      }
      .logo {
        display: block;
        width: 41.8%;
        margin-bottom: 50px;
      }
      .star {
        width: 3%;
        margin-top: 1.6%;
        display: block;
        animation: spinner 1s linear infinite;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .container {
      .box {
        .logodatxanh {
          width: 30% !important;
          margin-bottom: 40px;
        }
        .logo {
          width: 80% !important;
        }
        .star {
          width: 7% !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .star {
      width: 10% !important;
    }

    .logo {
      width: 80% !important;
      margin-bottom: 80px;
    }
  }
  @media screen and (max-width: 596px) {
    .logo {
      margin-bottom: 120px !important;
    }
  }
`;

export default Loading;
