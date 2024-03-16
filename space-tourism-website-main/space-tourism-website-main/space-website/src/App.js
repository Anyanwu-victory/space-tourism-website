import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './container/Home';
import { Moon } from "./components";
import { Mars } from "./components";
import { Europa } from "./components";
import { Titan } from "./components";



const App = () => {

  return (
    <>
    
      <Routes>
          <Route path="/*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="moon" element={<Moon/>}/>
          <Route path="mars" element={<Mars/>}/>
          <Route path="europa" element={<Europa/>}/>
          <Route path="titan" element={<Titan/>}/>
       </Routes>



    </>
    
  );
};

export default App;
