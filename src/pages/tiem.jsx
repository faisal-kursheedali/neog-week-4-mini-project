import React,{useState} from 'react'
import "./css/time.css"
const Time = () => {
    const today=new Date();
    const dayOfWeek=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const [minute,setMinute]=useState(today.getMinutes())
    const [hour,setHour]=useState(today.getHours())
    const [second,setSecond]=useState()
    const [day,setDay]=useState(today.getDay())
    const [month,setMonth]=useState(today.getMonth())
    const [year,setYear]=useState(today.getFullYear())
    const [date,setDate]=useState(today.getDate())
    setTimeout(()=>{
        setHour(today.getHours())
        
        setMinute(today.getMinutes())
        setSecond(today.getSeconds())
    },1000) 
    setTimeout(()=>{
        
        setDay(today.getDay());  
        setMonth(today.getsetMonth());  
        setYear(today.getyear());  
        setDate(today.getdate());  
    },3600000) 
   
    console.log(day);  
  return (

    <><div className="date-time-container">
      <div className="time-box">
        <span className="hour">{hour>12 ? hour-12 : hour} : </span>
        <span className="minute">{minute}</span>
        <span className="second">{second}</span>
    </div>
      <div className="date-box">
          
        <span className="date">{date} - </span>
        <span className="month">{month} - </span>
        <span className="year">{year} </span>
        <span className="day">{dayOfWeek[day]}</span>
          </div> 
          </div> 
    </>
  )
}

export default Time