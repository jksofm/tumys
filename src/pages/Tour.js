import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Guide from "../components/Guide";
import Mode from "../components/Mode";
import { useTumysContext } from "../context/tumycontext";
import useKrpano from "react-krpano-hooks";
import Image360 from "../components/Image360";
import Loading from "./Loading";

function Tour() {
  const {
    guide,
    ShowGuide,
    updateCurrentScene,
    currentscene,
   
  } = useTumysContext();
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

  useEffect(() => {
    callKrpano(`loadscene(${currentscene},null,MERGE)`);
    updateCurrentScene(currentscene)
  }, [currentscene]);

  useEffect(() => {
    // updateCurrentScene("scene_DJI_0453_Panorama");
    callKrpano(`loadscene(scene_DJI_0453_Panorama,null,MERGE)`);

    console.log("test home");
  }, []);

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
  useEffect(() => {
    ShowGuide();
  }, []);

  return (
    <Wrapper>
      <Image360 containerRef={containerRef} />

      <Mode
        data={data}
        updateCurrentScene={updateCurrentScene}
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
