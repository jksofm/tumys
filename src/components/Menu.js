import React, { useEffect, useState } from "react";
import styled from "styled-components";

import bgloading from "../assets/images/bgloading.png";
import logomenu from "../assets/images/logomenu.png";
import { Link } from "react-router-dom";
import icontour360 from '../assets/Icons/tour1.png'
import icontour360hover from '../assets/Icons/tour2.png'
import iconutility from '../assets/Icons/tool1.png'
import iconutilityhover from '../assets/Icons/tool2.png'
import houseicon from '../assets/Icons/house1.png'
import houseiconhover from '../assets/Icons/house2.png'
import locationicon from '../assets/Icons/pin1.png'
import locationiconhover from '../assets/Icons/pin2.png'

import { useTumysContext } from '../context/tumycontext'
import {useLocation} from "react-router-dom"




function Menu({guide,ShowGuide,HideGuide}) {
    const [hover1,setHover1] = useState(false);
    const [hover2,setHover2] = useState(false);
    const [hover3,setHover3] = useState(false);
    const [hover4,setHover4] = useState(false);
    const [activemenu,setActiveMenu] = useState(0);
    const location = useLocation()


    useEffect(()=>{
      if(location.pathname==="/tumys"){
        setActiveMenu(1)
      }else if (location.pathname === "/tumys/utility"){
        setActiveMenu(2)
      }else if (location.pathname === "/tumys/house"){
        setActiveMenu(3)
      }else if (location.pathname === "/tumys/location"){
        setActiveMenu(4)
      }
     
    },[])

    

  

    
    const datamenu = [
        {
            id: 1,
            text: 'TOUR 360',
            icon: icontour360,
            iconhover: icontour360hover,
            link : '/tumys/tour',
            hover: hover1,
            setHover: setHover1
        }
        ,
        {
            id: 2,
            text: 'TIỆN ÍCH 360',
            icon: iconutility,
            iconhover: iconutilityhover,
            link : '/tumys/utility',
            hover: hover2,
            setHover: setHover2

        }
        ,
        {
            id: 3,
            text: 'NHÀ MẪU 360',
            icon: houseicon,
            iconhover:houseiconhover,
            link : '/tumys/house',
            hover: hover3,
            setHover: setHover3

    
        }
        ,
        {
            id: 4,
            text: 'VỊ TRÍ',
            icon: locationicon,
            iconhover: locationiconhover,
            link : '/tumys/location',
            hover: hover4,
            setHover: setHover4

    
        }
        
      
    ]
    useEffect(()=>{
        datamenu.forEach((item)=>{
           
            if(item.link === location.pathname){
                setActiveMenu(item.id)
            }
        })
    },[])

  return (
    <Wrapper>
      <div className="img-box">
        <img src={bgloading} alt="Loading" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          marginLeft: "20px",
          cursor: "pointer",
          zIndex: "9999",
        }}
        className="logo"
        onClick={()=>{
            ShowGuide();
            console.log("show logo")
             
        }}
      >
        <img style={{ width: "85%" }} src={logomenu} alt="Logo" />
      </div>
      <div className="menu-list">
        {datamenu.map((item, key) => {
          return (
            <li onMouseOver={()=>{
                item.setHover(true)
            }}  onMouseLeave={()=>{
                item.setHover(false)
            }} onClick={()=>{
                setActiveMenu(item.id)
            }} key={key} className={activemenu === item.id ? `menu-item active` : `menu-item`}>
              <Link className="menu-link" to={item.link}>
             
                {item.hover || activemenu === item.id ?  <img src={item.iconhover} alt="Icon" /> : <img src={item.icon} alt="Icon" /> }
              
                <span style={{marginLeft: "15px"}} className="menu-text">{item.text}</span>
              </Link>
              {/* <div className="line"></div>  */}
              
            </li>
          );
        })}
      </div>

    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 20.625% auto;
  height: 8.2vh;
  align-items: center;
  border-top: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(#f6e493 100%, #ab7b33 100%);
  .img-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -999;
   

    img {
      width: 100%;
      height: 100%;
      z-index: -999;
  

    }
  }
  .menu-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
    .menu-item {
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .menu-link {
        list-style-type: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;;
        .menu-text {
          font-family: "UTM Trajan Pro Bold";
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 35px;
          text-align: center;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
      .line {
        height: 100%;
        position: absolute;
        width: 1px;
        background-image: linear-gradient(180deg, #F6E493 0%, #AB7B33 100%);
        height: 50%;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .menu-item:hover{
    background: linear-gradient(180deg, #F6E493 0%, #AB7B33 100%);
   

  }
  
  .menu-item.active {
    background: linear-gradient(180deg, #F6E493 0%, #AB7B33 100%);
  }

  /* Tablet */
  @media screen and (max-width: 1024px) {
  grid-template-columns: 24.625% auto;
  .menu-list  {
    grid-template-columns: auto auto  auto  auto;
  }
  .menu-text  {
      display:none;
      /* margin-left: 5px;
      font-size  : 14px; */
    }
    .active .menu-text {
      display  : block;
    }
    .menu-link{
      img{
        width: 30px;
        height: 30px;
      }
      .menu-text{
        margin-left: 8px!important;
      }

    }
   
}
/* Phone */
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;

     
  .logo{
    margin-left: 0px!important;
    height: 100%;
    display: none!important;  
    img{
      width: 100%!important;
      height: 100%!important;
    }
  }
  .menu-link{
      img{
        width: 25px;
        height: 25px;
      }
      .menu-text{
        margin-left: 4px!important;
        font-size: 0.8rem!important;
      }

    }
  
}
`;

export default Menu;
