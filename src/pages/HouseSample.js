import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Guide from "../components/Guide";
import Mode from "../components/Mode";
import { useTumysContext } from "../context/tumycontext";
import useKrpano from "react-krpano-hooks";
import Image360 from "../components/Image360";
function HouseSample({
  loadnewscene,
  setCurrentscene,
  currentscene,
  ShowGuide,
  HideGuide,
  guide,
}) {
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
  useEffect(
    () => {},
    [
      callKrpano(`loadscene(${currentscene}, null, MERGE);`),
      // setKrpano(`layer[${currentscene}]`,0)
    ],
    []
  );
  useEffect(() => {
    setCurrentscene("scene_DJI_0546_Panorama");
  }, [containerRef]);

  const data = [
    {
      id: 1,
      text: "CĂN 1PN",
      scene: "scene_DJI_0546_Panorama",
    },
    {
      id: 2,
      text: "CĂN 2PN",
      scene: "scene_DJI_0544_Panorama",
    },
  ];
  return (
    <Wrapper>
      {/* <Image360 currentscene={currentscene} containerRef={containerRef} /> */}
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      <Mode
        data={data}
        setCurrentscene={setCurrentscene}
        loadnewscene={loadnewscene}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        width="30%"
        flex="50%"
      />
      {/* {guide && <Guide /> } */}
      {guide && <Guide ShowGuide={ShowGuide} HideGuide={HideGuide} /> }

    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;
export default HouseSample;
