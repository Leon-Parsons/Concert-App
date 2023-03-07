import './index.css';
import Musician from './components/Musician';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [tourName, setTourName] = useState('Tour Name Not Specified')
  const [musicians, setMusicians] = useState(
    [
      {
        name: "Metallica", 
        tourName: "", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      },
      {
        name: "Run The Jewels", 
        tourName: "Run Em", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      },
      {
        name: "Living Color", 
        tourName: "Greatest Hits", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      },
      {
        name: "Justin Beiber", 
        tourName: "Believe Tour", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      },
      {
        name: "Gojira", 
        tourName: "Depths Tour", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      },
      {
        name: "Taylor Swift", 
        tourName: "Reputation Tour", 
        img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg" 
      }
    ]
  )

  const showMusicians = true;
  return (
    <div className="App">
      {showMusicians ? (
      <>
        <input className="rounded-lg" type='text' onChange={(e)=>{
          console.log(e.target.value);
          setTourName(e.target.value);
        }}/>
        <div className="flex flex-wrap justify-center">
          {musicians.map((musician) => {
            return (
              <Musician 
                key={uuidv4()}
                name={musician.name} 
                tourName={musician.tourName} 
                img={musician.img}
            />
            );
          })}
        </div>
      </>
       ) : (
    <p>You cannot see these</p>
  )}
    </div>
  );
}

export default App;
