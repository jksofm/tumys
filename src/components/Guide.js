import React, { useEffect, useState } from "react";
import styled from "styled-components";
import handicon from "../assets/Icons/handicon.png";
import mouseicon from "../assets/Icons/mouseicon.png";
import { useTumysContext } from "../context/tumycontext";

function Guide({ShowGuide,HideGuide}) {
  
 
  return (
    <Wrapper>
      <div className="layer" onClick={() => HideGuide()}></div>
      {/* <img className="guide" onClick={() => handleGuide(false)} src={guideimage} alt="Guide" /> */}
      <div
        className="modal"
        onClick={() => {
          console.log("modal");
        }}
      >
        <h3>HƯỚNG DẪN THAO TÁC</h3>
        <div className="action">
          <img alt="handicon" className="handicon" src={handicon} />
          <span className="or">hoặc</span>
          <img alt="mouseicon" className="mouseicon" src={mouseicon} />
        </div>
        <p>
          Chạm, di chuyển hoặc click vào từng vị trí tham quan để xem chi tiết
        </p>
        <button
          onClick={() => {
            HideGuide();
           
          }}
          className="btn"
        >
          Đã hiểu
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: transparent !important;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;

  .modal::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 3px;
    background: linear-gradient(#ce8f31 100%, #f6e493 100%, #efd45a 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -99;
  }
  .layer {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;

    transition: all 0.4s linear;
    animation: guideshow 0.7s;
  }
  .mouseicon {
    display: block;
    margin-left: 12px;
  }
  .handicon {
    display: block;
    margin-right: 12px;
  }

  .modal {
    position: absolute;
    width: 38.9%;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: guideshow 1s linear;
    background: #0e5a54;
    z-index: 101;
    border-radius: 30px;
    cursor: pointer;
    text-align: center;
    padding: 50px;
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 9%;
      span {
        display: block;
        color: white;
        margin-left: 12px;
        margin-right: 12px;
      }
    }

    h3 {
      font-family: "GothamBold";
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      line-height: 48px;
      margin-bottom: 30px;
      background: linear-gradient(
        274.38deg,
        #ce8f31 0%,
        #f6e493 50%,
        #efd45a 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      -webkit-text-fill-color: transparent;
    }
    .or {
      font-family: "SVN-Gotham";
      font-style: normal;
      font-weight: 450;
      font-size: 20px;
      line-height: 32px;
      color: #ffffff;
    }
    p {
      font-family: "Gotham";
      font-style: normal;
      font-weight: 450;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
      color: #ffffff;
    }
    .btn {
      width: 60%;
      height: 64px;

      background: linear-gradient(274.38deg, #ab7b33 0%, #f6e493 93.23%);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
      border-radius: 99px;
      padding: 12px;
      z-index: 9999;
      color: #ffffff;
      font-family: "SVN-Gotham Bold";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.5px;
      margin-top: 20px;
      align-items: center;
      border: none;
      cursor: pointer;
      letter-spacing: 3px;
      transition: 0.3s all linear;

      &:hover {
        background: linear-gradient(274.38deg, #ab7b33 0%, #f6e493 93.23%);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
        border-radius: 99px;
        opacity: 0.8;
      }
    }
  }
  @keyframes guideshow {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }
/* Tablet */
  @media screen and (max-width: 1024px) {
     .modal {
      width: 53%!important;
      h3{
       font-size : 26px;
      }
      p{
        font-size: 18px;
      }
      .btn{
        
      }
     }
}
/* Phone */
@media screen and (max-width: 768px) {
     .modal {
      width: 94%!important;
      top: 45%;
      /* height: 30%;
      overflow: hidden; */
      h3{
       font-size : 22px;
       line-height: 30px;
       margin-bottom: 20px!important;

      }
      p{
        font-size: 16px;
      }
      .btn{
        font-size: 12px;
        height: 50px;
      }
     }
}

`;

export default Guide;
