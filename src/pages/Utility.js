import React, { useEffect, useState } from "react";
import useKrpano from "react-krpano-hooks";
import styled from "styled-components";
import Guide from "../components/Guide";
import Image360 from "../components/Image360";
import Mode from "../components/Mode";


function Utility({loadnewscene,setCurrentscene,currentscene,ShowGuide,HideGuide,guide}) {


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
    setCurrentscene("scene_Cayjng_Caybi_Meybp")
 },[containerRef])


  const data = [
    {
      id: 1,
      text: "CẢNG CÁI MÉP",
      scene: "scene_Cayjng_Caybi_Meybp",
    },
    {
      id: 2,
      text: "KHU CN MỸ XUÂN B1",
      scene: "scene_KCN_My_Xuan",
    },
    {
      id: 3,
      text: "KHU CN PHÚ MỸ 2",
      scene: "scene_KCN_Phuyb_Myyd_2",
    },
    {
      id: 4,
      text: "KHU CN PHÚ MỸ 3",
      scene: "scene_KCN_Phuyb_Myyd_3",
    },
    {
      id: 5,
      text: "SÂN GOLF CHÂU ĐỨC",
      scene: "scene_Saycn_golf_Chaycu_qquybybc",
    },
    {
      id: 6,
      text: "TRUNG TÂM HÀNH CHÍNH",
      scene: "scene_TTHC",
    },
  ];
  return (
    <Wrapper>
      {/* <Image360 currentscene={currentscene} containerRef={containerRef} /> */}
     <div ref={containerRef} style={{ width: '100%', height: '100%' }} />  

      <Mode
         data={data}
         setCurrentscene={setCurrentscene} 
         loadnewscene={loadnewscene}
         setCurrentIndex={setCurrentIndex}
         currentIndex={currentIndex}
        width="90%"
        flex="auto"
      />
           {guide && <Guide ShowGuide={ShowGuide} HideGuide={HideGuide} /> }

    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;
export default Utility;
