import React from 'react';
import s from './Monstr.module.css'

const Monstor = (props) => {
    return (
        <div>
            <div className={s.Info}>
                <div className={s.imgMonstr}><img src={props.imgMonstr} alt=""/></div>

                <div className={s.stateMonstr}>
                    {props.Hp}
                    {props.Armor}
                    {props.Hits}
                    {props.Move}
                    {props.Strong}

                </div>
            </div>

            <div className={s.Description}>

            </div>
        </div>
    );
};

export default Monstor;