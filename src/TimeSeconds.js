import React, {useContext} from 'react';
import SecondsContext, {MinutesContext, HoursContext} from './TimeContext';
import './App.css';

const TimeSeconds = ()=> {
    let secondsValue= useContext(SecondsContext);
    let minValue = useContext(MinutesContext);
    let hourValue = useContext(HoursContext);

    return(
        <div className="App">
            <h1>Clock Counter</h1>
            <h3>Current Time</h3>
            <h4>{hourValue[0]}hrs : {minValue[0]}min : {secondsValue[0]}sec</h4>
            <label>Increase the time by pressing Button</label>
            <button className="button" onClick={
                () => {
                    secondsValue[1]( 30+secondsValue[0] )
                    if (secondsValue[0] > 45) {
                        minValue[1]( 30+minValue[0] )
                        secondsValue[1](0)
                        if (minValue[0] > 45) {
                            hourValue[1]( ++hourValue[0])
                            minValue[1](0)
                        }
                    }
                }
            }>
                Increment
            </button>
        </div>
    );
}

export default TimeSeconds;