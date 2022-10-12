import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import testImage from "../assets/images/Loading.png"
import mapimg from "../assets/images/sodovitri2.jpg"
import bubleimg from "../assets/images/iconvitri2.png"
import useKrpano from "react-krpano-hooks";
import {useTumysContext} from "../context/tumycontext"


function Image360({
    normalimage
}) {
  const [isLoading,setIsLoading] = useState(true);
  const { guide, ShowGuide, updateCurrentScene, currentscene,containerRef,
    scriptLoaded, isEmbedded, isLoaded, error } =useTumysContext();
  // const {
  //   krpanoState: { scriptLoaded, isEmbedded, isLoaded, error },
    
  //   callKrpano,
  // } = useKrpano({
  //   globalFunctions: {
  //     logNewScene: (scene) => {
  //       console.log("New scene: ", scene);
  //     },
  //   },
  // });
  // useEffect(()=>{
  //  setIsLoading(false)
  // },[isEmbedded])
  useEffect(()=>{
     console.log("test")
  },[containerRef.current])
  return (
    <Wrapper>
      {normalimage ? (
        <div className="image-360">
       <img style={{width: "100%",height :"100%"}} src={mapimg}/>
       <div className='buble-box'>
        <img src={bubleimg} />
        <span style={{animationDelay : "0s"}}></span>
        <span style={{animationDelay : "1s"}}></span>
        <span style={{animationDelay : "2s"}}></span>
        <span style={{animationDelay : "3s"}}></span>

       </div> 
        </div>
      ) : (

<div className="image-360">
   {/* <div ref={containerRef} style={{width: '100%', height: '100%'}}>

</div> */}
<div  style={{width: '100%', height: '100%'}}>
<img style={{width: "100%",height :"100%"}} src={mapimg}/>

</div>

</div>
      )}
       
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 92.6vh;
z-index: -1;
/* background-color: red; */
.image-360{
  position: relative;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.buble-box{
position: absolute;
width: 100px;
height: 100x;
right: 50%;
bottom: 36%;
animation: Nhay 3s infinite cubic-bezier(.36, .11, .89, .32) ;

img{
  width: 80%;
  height: 80%;
  /* visibility: hidden; */
}
span{
  position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    background-color: #fff;
    opacity: 0;
    animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
}

}

`

export default Image360