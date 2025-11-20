// src/App.jsx
import { useState } from 'react'
import './App.css'

const App = () => {
  
 
  
  const [team, setTeam] = useState([]); //fighters added to team
  

  // tracks how much money you have to buy fighters
  // starts at $100
  const [money, setMoney] = useState(100);
  
 
  // shows all available fighters you can choose to add to your team
 //once added they are removed from here
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  

  // adds the fighter to your team and removes them from available fighters section
  const handleAddFighter = (fighter) => {
    // check if you have enough money to buy this fighter
    if (money < fighter.price) {
      // If not enough money, logs a message and stop
      console.log('Not enough money');
      return; // exits
    
    //add the new fighter to your team

    setTeam([...team, fighter]);
    
  //removes money from your total when you buy a fighter
    setMoney(money - fighter.price);
    
   
    
    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
  };
  //remove fighter and puts them back on available list

  const handleRemoveFighter = (fighter) => {
  
    setTeam(team.filter((f) => f.id !== fighter.id)); //this updates your team after you remove a fighter
    
    
    setZombieFighters([...zombieFighters, fighter]); //updates the available fighter list
    
    
    setMoney(money + fighter.price); //this refunds your money when you remove a fighter..you get paid back kind of like the black market
  };

  
  const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0); //shows total strength of all players
  
  
  // Same as totalStrength but for agility
  const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);

  
  return (
    <>
      {/* shows money */}
      <h2>Money: ${money}</h2>
      
      {/* shows team totals */}
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      
      
      <h2>Your Team</h2>
      {team.length === 0 ? (
        // If team is empty, show this message
        <p>Pick some team members!</p>
      ) : (
        // If team has members, show them in a list
        <ul>
          {team.map((fighter) => (
            // For each fighter in your team, create a list item
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      
     
      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          // For each available fighter, create a list item
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
