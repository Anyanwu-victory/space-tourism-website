import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './container/Home';
import { Moon } from "./components";
import { Mars } from "./components";
import { Europa } from "./components";
import { Titan } from "./components";
import {Commander} from "./components";
import {Specialist} from "./components";
import {Pliot} from "./components";
import {Engineer} from "./components";
import {Vehicle} from "./components";
import {Port}  from "./components";
import {Capsule} from "./components";

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
          <Route path="commander" element={<Commander/>}/>
          <Route path="specialist" element={<Specialist/>}/>
          <Route path="pliot" element={<Pliot/>}/>
          <Route path="engineer" element={<Engineer/>}/>
          <Route path="vehicle" element={<Vehicle/>}/>
          <Route path="port" element={<Port/>}/>
          <Route path="capsule" element={<Capsule/>}/>
       </Routes>



    </>
    
  );
};

export default App;
