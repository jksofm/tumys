import React, { useEffect, useState } from "react";
import useKrpano from "react-krpano-hooks";
import styled from "styled-components";
import Guide from "../components/Guide";
import Image360 from "../components/Image360";
import Mode from "../components/Mode";
import { useTumysContext } from "../context/tumycontext";

function Utility() {
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
    callKrpano(`loadscene(${currentscene},null,MERGE)`);
  }, [currentscene]);

  useEffect(() => {
    updateCurrentScene("scene_DJI_0549_Panorama");
  }, []);
  const data= [
    {
      id: 1,
      text : 'CẢNG CÁI MÉP',
      scene : 'scene_DJI_0549_Panorama',
    },
    {
      id: 2,
      text : 'KHU CN MỸ XUÂN B1',
      scene : 'scene_DJI_0544_Panorama',
    },
    {
      id: 3,
      text : 'KHU CN PHÚ MỸ 2',
      scene : 'scene_DJI_0545_Panorama',
    },
    {
      id: 4,
      text : 'KHU CN PHÚ MỸ 3',
      scene : 'scene_GOKU1013_Panorama',
    },
    {
      id: 5,
      text : 'SÂN GOLF CHÂU ĐỨC',
      scene : 'scene_GOKU1013_Panorama',
    },
    {
      id: 6,
      text : 'TRUNG TÂM HÀNH CHÍNH',
      scene : 'scene_GOKU1013_Panorama',
    }
  ]
  return (
    <Wrapper>
      <Image360 containerRef={containerRef} />
      <Mode data={data} updateCurrentScene={updateCurrentScene} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}  width="90%" flex="auto" />
    {/* {guide && <Guide /> } */}

    </Wrapper>
  );
}
const Wrapper = styled.div`
height: 100vh;
position: relative;
width: 100vw;
`
export default Utility;
