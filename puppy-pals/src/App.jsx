import {puppyList} from './data.js';
import { useState } from 'react';


function App() {
  // console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  //console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);
  
/*
  function handleClick() {
    // some logic here
  }
*/

  return (
    <div className="app">
        <h1>Puppy Pals</h1>
      { featPupId && (
        <div className='pupCard'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      ) } 

      {puppies.map((puppy) => {

        return (
         // <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>
         <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id} className="reglon">
            {puppy.name}
          </p>
        );
      })}
    
    
    </div>
  );

}

export default App
