import React,{ useEffect, useState, useMemo } from 'react';

import './App.css';
import MonsterCardList from './components/monsterCardList/MonsterCardList.component';
import MonsterSearchBox from './components/monsterSearchBox/MonsterSearchBox.component';

function App()
{
  console.log('render');
  /* --------------------------------- States --------------------------------- */

  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState('');

  /* ------------------------------ Side Effects ------------------------------ */

  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setMonsters(data))
    .catch((error)=>console.log(error));
  },[]);

  /* ----------------------------- Event Handlers ----------------------------- */

  function searchFieldChangeHandler(event)
  {
    setSearchString(event.target.value.toLowerCase());  
  }

  /* ---------------------- Code to Run before returning ---------------------- */

    const filteredMonsters = useMemo(()=>
    {
      const filtered = monsters.filter((monster)=>
      {
        return monster.name.toLowerCase().includes(searchString);
      })
      return filtered;
    },[searchString, monsters]);

  /* ----------------------------------- JSX ---------------------------------- */
  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex!</h1>
      <MonsterSearchBox changeHandler={searchFieldChangeHandler} />
      <MonsterCardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;