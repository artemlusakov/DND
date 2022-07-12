import React from 'react';
import MonsterCard from "../../Components/Monster_card/Monster_card";
import Navigeiter from "../../Components/Navigeite/Navigeite";
import '../../App.css'

const Bestiary = () => {
    return (
        <div>
            <Navigeiter/>
            <div className="pages">
            <MonsterCard
                monstrImg="https://static.wikia.nocookie.net/rpg/images/b/b2/Wallpaper_Rust_Monster.jpg/revision/latest?cb=20160519120005&path-prefix=ru"
                monsterName='Clesh'
            />
            </div>
        </div>
    );
};

export default Bestiary;