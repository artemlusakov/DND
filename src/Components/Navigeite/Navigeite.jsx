import React from 'react';
import {NavLink} from "react-router-dom";

const Navigeiter = () => {
    return (
        <>
            <nav>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Bestiary'}>Bestiary</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
            </nav>
        </>
    );
};

export default Navigeiter;