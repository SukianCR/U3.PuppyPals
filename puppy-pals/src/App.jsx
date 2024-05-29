import {puppyList} from './data.js';
import { useState } from 'react';


function App() {
 // console.log(puppyList);
 const [puppies, setPuppies] = useState(puppyList)
 console.log(puppies);
  
 return (
   
      <div class="App">
            { 
                 puppies.map((puppy) => {
                 return <p key={puppy.id}>{puppy.name}</p>
                   })
            }
      </div>
     
  )
}

export default App
