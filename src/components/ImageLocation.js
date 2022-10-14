import React, { useRef } from "react";
import styled from "styled-components";
import testImage from "../assets/images/Loading.png";
import mapimg from "../assets/images/sodovitri2.jpg";
import bubleimg from "../assets/images/iconvitri2.png";
import useKrpano from "react-krpano-hooks";

// import "./index";
function ImageLocation() {
    const refContainer = useRef();
    const refJam= useRef();
  return (
 

    <Wrapper >
      <div  id="module-jamf" className="image-360">
    
        <div ref={refContainer} className="jamf-container" >
          <div ref={
            refJam
          } className="jamf-mover">
            <div className="buble-box">
              <img src={bubleimg} />
              <span style={{ animationDelay: "0s" }}></span>
              <span style={{ animationDelay: "1s" }}></span>
              <span style={{ animationDelay: "2s" }}></span>
              <span style={{ animationDelay: "3s" }}></span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  
  );
}
const Wrapper = styled.div`
  height: 92.6vh;
  z-index: -1;
  position: relative;

  .image-360 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: red;

    left: 0;
    right: 0;

    overflow: hidden;

    z-index: 1;
    bottom: 8.2vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .buble-box {
    position: absolute;
    width: 100px;
    height: 100x;
    right: 50%;
    bottom: 36%;
    animation: Nhay 3s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);

    img {
      width: 80%;
      height: 80%;
      /* visibility: hidden; */
    }
    span {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
      pointer-events: none;
      background-color: #fff;
      opacity: 0;
      animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
    }
  }
  .jamf-container {
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .jamf-mover {
  width: 100%;
  height: 100%;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/jamf-laptop-screen.png);
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: -30px 40px;
  transform: scale(1);
  transition: background-position 0.25s;
  &.no-more-slidey {
    transition: none;
  }
}

  @media screen and (max-width: 1024px) {
    .buble-box {
      right: 49%;
    }
  }
  @media screen and (max-width: 968px) {
    .buble-box {
      right: 47%;
    }
  }
  @media screen and (max-width: 768px) {
    .buble-box {
      right: 46%;
    }
  }
  @media screen and (max-width: 568px) {
    .buble-box {
      right: 43%;
    }
    .jamf-container {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 428px) {
    .buble-box {
      right: 45%;
    }
  }
`;
export default ImageLocation;
