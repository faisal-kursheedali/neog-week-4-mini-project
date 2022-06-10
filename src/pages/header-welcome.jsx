import React,{useState} from 'react'
// import {Link} from "re"
import "./css/header-welcome.css"
const HeaderWelcome = () => {
  const [name,setName]=useState("");
  return (
    <>
      <div className='header-txt'>
                hello <span className='user-name'>{name}</span>
      </div>
      <div className="header-welcome-input-box">
      <input type="text" className="header-welcome-input" onChange={(i)=>{
        setName(i.target.value);
      }} value={name} placeholder="Enter Your name"/>
      {
        name!==""?<button className="header-welcome-btn" onClick={()=>{
          window.localStorage.setItem("userName",JSON.stringify(name));
          let val=window.localStorage.getItem("userName");
          window.location.reload();
          console.log(val)
        }}>Continue</button>:<button className="header-welcome-btn">Continue</button>
      }
      </div>
      {/* {
        name.length!==0? <button className="header-welcome-btn">Continue</button>:<button className="header-welcome-btn">Continue</button>
      } */}
      
    </>
  )
}

export default HeaderWelcome