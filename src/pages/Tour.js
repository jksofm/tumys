import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Guide from "../components/Guide";
import Mode from "../components/Mode";

import useKrpano from "react-krpano-hooks";
import Image360 from "../components/Image360";


function Tour({loadnewscene,setCurrentscene,currentscene,ShowGuide,HideGuide,guide}) {
  
  // const [isLoading,setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
 
 

  const {
    krpanoState: { scriptLoaded, isEmbedded, isLoaded, error },
    containerRef,
    callKrpano,
  } = useKrpano({
    globalFunctions: {
      logNewScene: (scene) => {
        console.log("New scene: ", scene);
      },
    },
  });
  useEffect(()=>{},[
    callKrpano(`loadscene(${currentscene}, null, MERGE);`),
    // setKrpano(`layer[${currentscene}]`,0)

 ],[])
 useEffect(()=>{
    setCurrentscene("scene_DJI_0453_Panorama")
 },[containerRef])


//   useEffect(()=>{
//     loadnewscene("scene_DJI_0453_Panorama")
//     console.log('river')
// },[])



  

  



  const data = [
    {
      id: 1,
      text: "BAN NGÀY",
      scene: "scene_DJI_0453_Panorama",
    },
    {
      id: 2,
      text: "BAN ĐÊM",
      scene: "scene_DJI_0544_Panorama",
    },
    {
      id: 3,
      text: "TẦNG 25",
      scene: "scene_DJI_0545_Panorama",
    },
    {
      id: 4,
      text: "VIEW 4",
      scene: "scene_GOKU1013_Panorama",
    },
  ];


  return (
    <Wrapper>
      {guide && <Guide ShowGuide={ShowGuide} HideGuide={HideGuide} /> }
      {/* <Image360 currentscene={currentscene} setCurrentscene={setCurrentscene} containerRef={containerRef}/> */}
     <div ref={containerRef} style={{ width: '100%', height: '100%' }} />  
      
      

      <Mode
        data={data}
        setCurrentscene={setCurrentscene} 
        loadnewscene={loadnewscene}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        width="40%"
        flex="25%"
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  z-index: 0;
`;

export default Tour;
