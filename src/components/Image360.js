import React, { useEffect, useState } from "react";
import styled from "styled-components";
import testImage from "../assets/images/Loading.png";
import mapimg from "../assets/images/sodovitri2.jpg";
import bubleimg from "../assets/images/iconvitri2.png";
import useKrpano from "react-krpano-hooks";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Image360({
  normalimage,
  containerRef,
  currentscene,
  setCurrentscene,
}) {
  return (
    <Wrapper>
      {normalimage ? (
        <div className="image-360">
          {/* <img style={{ width: "100%", height: "100%" }} src={mapimg} /> */}
          
            <img style={{ width: "100%", height: "100%" }} src={mapimg} />

          <div className="buble-box">
            <img src={bubleimg} />
            <span style={{ animationDelay: "0s" }}></span>
            <span style={{ animationDelay: "1s" }}></span>
            <span style={{ animationDelay: "2s" }}></span>
            <span style={{ animationDelay: "3s" }}></span>
          </div>
        </div>
      ) : (
        <div className="image-360">
          <div
            ref={containerRef}
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 92.6vh;
  z-index: -1;
  position: relative;
  /* background-color: red; */
  .image-360 {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;

    left: 0;
    right: 0;
    /* overflow-y: scroll;
    overflow-x: scroll; */
    overflow: visible;

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
      right: 45%;
    }
  }
  @media screen and (max-width: 568px) {
    .buble-box {
      right: 43%;
    }
  }
  @media screen and (max-width: 428px) {
    .buble-box {
      right: 37%;
    }
  }
`;

export default Image360;
