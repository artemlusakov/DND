import React from "react";
import s from "./App.module.css"
import Navigeiter from "./Components/Navigeite/Navigeite";
import {Route,Routes} from "react-router-dom"
import Bestiary from "./Pages/Bestiary/Bestiary";

function App() {
  return (
    <div className={s.All_Component}>
          <div className={s.Nav}>
              <Navigeiter/>
          </div>

          <div className={s.Pages}>
              <Routes>
                <Route path='./Bestiary' component=<Bestiary/>/>
              </Routes>
          </div>
    </div>
  );
}

export default App;
