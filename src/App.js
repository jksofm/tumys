
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
  const [loading,setLoading] = useState(true);
  

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
 const {guide,ShowGuide,HideGuide} = useTumysContext();
  if(loading){
    return (
      <Loading />
    )
  }

    return (
      <div className="app">
        
      <Router>
        <Routes>
              {/* <Route path="/tumys" index element={<Loading />} /> */}
          <Route path="/tumys" element={<SharedLayout />}>
              <Route index path="/tumys" element={<Tour />} />
              <Route path="/tumys/utility" element={<Utility />} />
              <Route path= "/tumys/house" element= {<HouseSample />} />
              <Route path= "/tumys/location" element = {<Location />} />
  
  
          </Route>
        </Routes>
      </Router>
      </div>
    );
  
}

export default App;
