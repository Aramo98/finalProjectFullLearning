
import { useState,useEffect } from "react"

function TimerBlock(){



const [hour,setHour] =  useState();
const [minute,setMinute] =  useState();


 useEffect(()=>{
    setInterval(()=>{
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
 

    
   setHour(h);
   setMinute(m);
 
    },1000)
 },[])
return(
    <>
 <p style={{color:"red"}}>{hour} : {minute<=9? "0"+ minute:minute}</p>

    </>
)
}

export default TimerBlock