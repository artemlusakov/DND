import React from 'react';
import s from './Navigeite.module.css'
import {NavLink} from "react-router-dom";

const Navigeiter = () => {
    return (
        <div className={s.All_Content}>
            <nav>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Bestiary'}>Bestiary</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Home'}>Home</NavLink>
            </nav>
        </div>
    );
};

export default Navigeiter;