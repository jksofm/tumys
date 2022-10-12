
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout"
import Loading from './pages/Loading';
import Tour from './pages/Tour';
import Utility from './pages/Utility';
import HouseSample from './pages/HouseSample';
import Location from './pages/Location';
import './App.css'
import { useEffect, useState } from 'react';
import { useTumysContext } from './context/tumycontext';
function App() {
  
 const {guide,ShowGuide,HideGuide} = useTumysContext();
 

    return (
      <Router>
        <Routes>
              <Route path="/tumys" index element={<Loading />} />
          <Route path="/tumys" element={<SharedLayout />}>
              <Route path="/tumys/tour360" element={<Tour />} />
              <Route path="/tumys/utility" element={<Utility />} />
              <Route path= "/tumys/house" element= {<HouseSample />} />
              <Route path= "/tumys/location" element = {<Location />} />
  
  
          </Route>
        </Routes>
      </Router>
    );
  
}

export default App;
