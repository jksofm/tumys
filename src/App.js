import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Loading from "./pages/Loading";
import Tour from "./pages/Tour";
import Utility from "./pages/Utility";
import HouseSample from "./pages/HouseSample";
import Location from "./pages/Location";
import "./App.css";
import { useEffect, useState } from "react";
import { useTumysContext } from "./context/tumycontext";
import Error from "./pages/Error";
import Test from "./pages/Test";
import useKrpano from "react-krpano-hooks";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentscene, setCurrentscene] = useState("scene_DJI_0453_Panorama");
  const [guide, setGuide] = useState(false);

  const { containerRef, callKrpano } = useKrpano({
    globalFunctions: {
      logNewScene: (scene) => {
        console.log("New scene: ", scene);
      },
    },
  });
  const loadnewscene = (scene) => {
    callKrpano(`loadscene(${scene}, null, MERGE);`);
  };
  const ShowGuide = () => {
    setGuide(true);
  };
  const HideGuide = () => {
    console.log("hide");
    setGuide(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  //  const {guide,ShowGuide,HideGuide} = useTumysContext();
  // if(loading){
  //   return (
  //     <Loading />
  //   )
  useEffect(() => {
    ShowGuide();
  }, []);
  // }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/tumys" index element={<Loading />} />
          {/* <Route path="/tumys" element={<Test />} /> */}
          <Route
            element={
              <SharedLayout
                guide={guide}
                ShowGuide={ShowGuide}
                HideGuide={HideGuide}
              />
            }
          >
            <Route
              index
              path="/tumys/tour"
              element={
                <Tour
                  guide={guide}
                  ShowGuide={ShowGuide}
                  HideGuide={HideGuide}
                  currentscene={currentscene}
                  setCurrentscene={setCurrentscene}
                  loadnewscene={loadnewscene}
                />
              }
            />
            <Route
              path="/tumys/utility"
              element={
                <Utility
                  guide={guide}
                  HideGuide={HideGuide}
                  ShowGuide={ShowGuide}

                  currentscene={currentscene}
                  setCurrentscene={setCurrentscene}
                  loadnewscene={loadnewscene}
                />
              }
            />
            <Route
              path="/tumys/house"
              element={
                <HouseSample
                  guide={guide}
                  currentscene={currentscene}
                  setCurrentscene={setCurrentscene}
                  loadnewscene={loadnewscene}
                  HideGuide={HideGuide}
                  ShowGuide={ShowGuide}
                  
                />
              }
            />
            <Route
              path="/tumys/location"
              element={
                <Location
                  guide={guide}
                  currentscene={currentscene}
                  setCurrentscene={setCurrentscene}
                  loadnewscene={loadnewscene}
                  HideGuide={HideGuide}
                  ShowGuide={ShowGuide}
                />
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
