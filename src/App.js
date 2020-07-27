import React from 'react';
import './App.css';
import './Components/RegistrationForm';
import RegistrationForm from './Components/RegistrationForm';
import FillerText from './Components/FillerText';
import Webpage from './Components/Webpage';


function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <FillerText />
      <Webpage title= "The world's coolest webpage" />
    
    </div>
  );
}

export default App;
