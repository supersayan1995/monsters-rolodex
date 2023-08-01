import React from 'react';

import MonsterCard from './monsterCard/MonsterCard.component';
import './MonsterCardList.css';

function MonsterCardList({monsters}) 
{
    return (
        <div className="card-list">
            {monsters.map((monster)=>
            {
                return <MonsterCard key={monster.id} monster={monster} />
            })}
        </div>
    );
}

export default MonsterCardList;