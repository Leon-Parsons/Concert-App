import './App.css';
import Musician from './components/Musician';
import { useState } from 'react';

function App() {
  const [tourName, setTourName] = useState('Tour Name Not Specified')
  const showMusicians = true;
  return (
    <div className="App">
      {showMusicians ? (
      <div>
        <input type='text' onChange={(e)=>{
          console.log(e.target.value);
          setTourName(e.target.value);
        }}/>
        <Musician name={"Metallica"} tourName={tourName}/>
        <Musician name="Run The Jewels"/>
        <Musician name="Living Color"/>
      </div>
       ) : (
    <p>You cannot see these</p>
  )
  }
    </div>
  );
}

export default App;
