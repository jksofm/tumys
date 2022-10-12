import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Guide from "../components/Guide";
import Mode from "../components/Mode";
import { useTumysContext } from "../context/tumycontext";
import useKrpano from "react-krpano-hooks";
import Image360 from "../components/Image360";
function HouseSample() {
  const { guide, ShowGuide, updateCurrentScene, currentscene } =
    useTumysContext();
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
  useEffect(() => {
    // callKrpano(`loadscene(${currentscene},null,MERGE)`);
  }, [currentscene]);

  useEffect(() => {
    // updateCurrentScene("scene_DJI_0546_Panorama");
  }, []);

  const data= [
    {
      id: 1,
      text : 'CĂN 1PN',
      scene : 'scene_DJI_0546_Panorama',
    },
    {
      id: 2,
      text : 'CĂN 2PN',
      scene : 'scene_DJI_0544_Panorama',
    },
   
  ]
  return (<Wrapper>
     <Image360 containerRef={containerRef} />

<Mode data={data} updateCurrentScene={updateCurrentScene} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}  width="30%" flex="50%" />
{/* {guide && <Guide /> } */}

  </Wrapper>)
}

const Wrapper = styled.div`
height: 100vh;
position: relative;
width: 100vw;
`
export default HouseSample;
