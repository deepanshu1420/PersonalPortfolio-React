import './index.css';
// import { useCountdown } from 'react-countdown-circle-timer'
import { useState } from 'react';
import Component from './Component';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function App(){
    const [show , updateShow] = useState(true);
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            updateShow(false);
        
        }
      
        return (
          <div className="timer">
            <div className="text">Loading in</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
      };

      useGSAP(()=>{
        gsap.from("#icon" , {
            scale : 5
        })
      });

   
    
    return(
        <>
            {
                show ? <div className="father">
                <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div> : <Component/>
            }
        </>
    );
}
export default App;