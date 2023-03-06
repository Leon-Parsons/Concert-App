import './index.css';
import Musician from './components/Musician';
import { useState } from 'react';

function App() {
  const [tourName, setTourName] = useState('Tour Name Not Specified')
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
          <Musician name="Metallica" tourName={tourName} img="https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_960_720.jpg"/>
          <Musician name="Run The Jewels" tourName="Run Em"/>
          <Musician name="Living Color"/>
          <Musician name="Metallica" tourName={tourName}/>
          <Musician name="Run The Jewels" tourName="Run Em"/>
          <Musician name="Living Color"/>
          <Musician name="Metallica" tourName={tourName}/>
          <Musician name="Run The Jewels" tourName="Run Em"/>
          <Musician name="Living Color"/>
        </div>
      </>
       ) : (
    <p>You cannot see these</p>
  )}
    </div>
  );
}

export default App;
