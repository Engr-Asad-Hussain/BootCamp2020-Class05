import React, {useState} from 'react';
import TimeHours from './TimeHours';
import SecondsContext, {MinutesContext, HoursContext} from './TimeContext';
import './App.css';

function App() {
  let secondsCounter = useState(0);
  let minCounter = useState(45);
  let hourConuter = useState(30);

  return (
    <div className="App">
      <SecondsContext.Provider value={secondsCounter}>
        <MinutesContext.Provider value={minCounter}>
          <HoursContext.Provider value={hourConuter}>
            <TimeHours />
          </HoursContext.Provider>
        </MinutesContext.Provider>
      </SecondsContext.Provider>
    </div>
  );
}

export default App;
