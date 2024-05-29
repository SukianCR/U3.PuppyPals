import {puppyList} from './data.js';
import { useState } from 'react';


function App() {
  // console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList)
  //console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
/*
  function handleClick() {
    // some logic here
  }
*/

  return (
    <div className="App">

      { featPupId && <p>{ featPupId }</p> } 

      {puppies.map((puppy) => {

        return (
         // <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>
         <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    
    
    </div>
  );

}

export default App
