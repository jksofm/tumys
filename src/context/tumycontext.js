import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/tumyreducer";

import {} from "../utils/actions";
import icontour360 from "../assets/Icons/tour1.png";
import icontour360hover from "../assets/Icons/tour2.png";
import iconutility from "../assets/Icons/tool1.png";
import iconutilityhover from "../assets/Icons/tool2.png";
import houseicon from "../assets/Icons/house1.png";
import houseiconhover from "../assets/Icons/house2.png";
import locationicon from "../assets/Icons/pin1.png";
import locationiconhover from "../assets/Icons/pin2.png";
import useKrpano from "react-krpano-hooks";

const initialState = {
  guide: false,
  currentscene: null,
};

const TumysContext = React.createContext();

export const TumysProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

  // const openSidebar = ()=>{
  //   dispatch({type:SIDEBAR_OPEN})
  // }
  // const closeSidebar = ()=>{
  //   dispatch({type:SIDEBAR_CLOSE})
  // }
  const ShowGuide = () => {
    console.log("hello");
    dispatch({ type: "GUIDE_SHOW" });
  };
  const HideGuide = () => {
    console.log("hello");

    dispatch({ type: "GUIDE_HIDE" });
  };
  const updateCurrentScene = (scene) => {
    dispatch({
      type: "UPDATE_SCENE",
      payload: { scene },
    });
  };

  console.log(state.currentscene);
  // useEffect(() => {
  //   callKrpano(`loadscene(${state.currentscene},null,MERGE)`);
  //   console.log("count")
  // }, [state.currentscene]);

  useEffect(() => {}, []);
  return (
    <TumysContext.Provider
      value={{
        ...state,
        HideGuide,
        ShowGuide,
        updateCurrentScene,
        containerRef,
        scriptLoaded,
        isEmbedded,
        isLoaded,
        error,

        // closeSidebar,
        // openSidebar,
      }}
    >
      {children}
    </TumysContext.Provider>
  );
};
// make sure use
export const useTumysContext = () => {
  return useContext(TumysContext);
};
