import React,{useState} from 'react'
import "./headertaskInput.css"
const HeaderInput = () => {
    const [maintask, setMaintask] = useState("");
  return (
    <>
    <div className="headerMainTaskBox">
    <input type="text"  onChange={(i) => {
        setMaintask(i.target.value);
    }} value={maintask} placeholder="Enter the main task" className="headerTaskInpiut" />
        <button  onClick={() => {
            window.localStorage.setItem("user-task", JSON.stringify( maintask ));
            window.localStorage.setItem("user-task-check",JSON.stringify(false));
            window.location.reload();
        }} className="headerTaskBtn">Done</button>
        </div>
        </>
  )
}

export default HeaderInput