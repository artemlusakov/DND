import React from 'react';
import s from './Monster_card.module.css'

const MonsterCard = (props) => {
    return (
        <div className={s.monstr_box}>
                <div>

                    <div className={s.monstr_img}>
                        <img src={props.monstr_img} alt=""/>
                    </div>

                    <div className={s.monster_stats}>
                        <div>{props.Hp}</div>
                        <div>{props.Armor}</div>
                        <div>{props.Move}</div>
                        <div>{props.Dexterity}</div>
                        <div>{props.Body_Type}</div>
                        <div>{props.Intelligence}</div>
                        <div>{props.Wisdom}</div>
                        <div>{props.Charisma}</div>
                    </div>

                </div>

            <div className={s.monster_features}>
                {props.monster_features}
            </div>

            <div className={s.monster_description}>
                {props.monster_description}
            </div>
        </div>
    );
};

export default MonsterCard;