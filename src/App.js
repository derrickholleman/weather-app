import React from 'react';
import './global.css';
import Forecast from './Components/Forecast';

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>

      <main>
        <Forecast />
      </main>

      <footer>
        <p>Copyright &copy; Derrick Holleman 2021</p> 
      </footer>
    </div>
  );
}

export default App;
