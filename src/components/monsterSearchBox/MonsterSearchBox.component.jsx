import React from 'react';

import './MonsterSearchBox.css';

function MonsterSearchBox({changeHandler}) 
{
    return (
        <input type="search" className="search-box monster-search-box" placeholder="Search Monsters" onChange={changeHandler} />
    );
}

export default MonsterSearchBox;