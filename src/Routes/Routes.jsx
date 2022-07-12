import React from 'react';
import {Route,Routes} from "react-router-dom"
import Bestiary from "../Pages/Bestiary/Bestiary";
import Home from "../Pages/Home/Home";

const RoutesNav = () => {
    return (

            <Routes>
                <Route expat path='/' element={<Home/>}/>
                <Route path='/Bestiary' element={<Bestiary/>}/>
            </Routes>
    );
};

export default RoutesNav;