import React from "react";
import styled from "styled-components";
import bgitem from "../assets/images/bgloading.png";


function Mode({ data, width = "60%", flex = "33.33%",setCurrentIndex,currentIndex,setCurrentscene }) {


  return (
    <Wrapper flex={flex} width={width}>
      {data.map((item,key) => {
        return (
          <div key={key}
            style={{
              backgroundImage: currentIndex === item.id ? `url(${bgitem})` : ``,
            }}
            className={currentIndex === item.id ? 'mode-item active' : 'mode-item'}
            onClick={()=>{
                setCurrentIndex(item.id)
              
                  setCurrentscene(item.scene)

              
            }
                
            }

          >
            <h3>{item.text}</h3>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  width: ${(props) => props.width};
  height: 8.57%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 6px;
  align-items: center;
  gap: 6px;
  z-index: 2;

  .mode-item {
    flex: ${(props) => props.flex};
    display: flex;
    align-self: start;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    position: relative;
    height: 100%;
    text-align: center;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.7);
    &:hover h3 {
      /* background: linear-gradient(
        274.38deg,
        #ce8f31 0%,
        #f6e493 50%,
        #efd45a 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-text-fill-color: transparent; */
    }
   &:hover {
    background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
   }
 

    h3 {
      padding: 0;
      margin: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 27px;
      font-family: "SVN-Gotham Bold";
    }
  }
   .mode-item.active::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    padding: 1.5px;
    background: linear-gradient(#CE8F31 100%, #F6E493 100%, #EFD45A 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

  }
  .mode-item.active h3 {
    background: linear-gradient(
        274.38deg,
        #ce8f31 0%,
        #f6e493 50%,
        #efd45a 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
  }

  /* Responsive */
  @media screen and (max-width: 1024px) {
  height: 5.8%;

    width: ${(props) => {
    if(props.width === "40%"){
       return "60%"
    }
    
  }};

.mode-item {
    h3{
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0;

    }}
   
     
    }

    /* phone */
  @media screen and (max-width: 768px) {
    bottom: 12%!important;
  overflow-y: auto!important;
  height: 6%;
  transform:  ${(props) => {
    if(props.width === "90%"){
       return "translateX(0)"
    }
  }}!important;;

  ::-webkit-scrollbar {
    display: none;

}
  left:  ${(props) => {
    if(props.width === "90%"){
       return "5%"
    }
  }}!important;
  /* right :  ${(props) => {
    if(props.width === "90%"){
      //  return "57%"
    }
  }}!important; */
  width: ${(props) => {
    if(props.width === "40%"){
       return "90%"
    }
    if(props.width === "90%"){
       return "90%"
    }
    if(props.width === "30%"){
      return "45%";
    }
  }}!important;
  .mode-item {
    h3{
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0;

    }

   flex-shrink : ${(props) => {
    if(props.flex === "auto"){
       return "0"
    }
   
  }}!important;
  width: 100px!important;
  }
   
     
   }
`;

export default Mode;
