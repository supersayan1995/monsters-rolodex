import React from 'react';

import './MonsterCard.css';

function MonsterCard({monster}) 
{
    return (
        <div className='card-container'>
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
}

export default MonsterCard;