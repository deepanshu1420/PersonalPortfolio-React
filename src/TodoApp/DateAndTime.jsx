// import {useState} from 'react';
import { useState } from "react";
function DateAndTime(){
    const a = new Date().toLocaleTimeString();
    let [time , updateTime] = useState(a);
    setInterval(()=>{
        updateTime(new Date().toLocaleTimeString());
    } , 1000);
    return(
        <>
            <h1 className="fw-300 head">{time}</h1>
        </>
    );
}
export default DateAndTime;