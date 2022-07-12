import React from 'react';
import s from './Monster_card.module.css'

const MonsterCard = (props) => {
    return (
        <div className={s.monstrBox}>
                <div className={s.Group}>

                    <div className={s.monstrImg}>
                        <img src={props.monstrImg} alt=""/>
                    </div>

                    <div className={s.monsterName}>
                        {props.monsterName}
                    </div>

                </div>
        </div>
    );
};

export default MonsterCard;