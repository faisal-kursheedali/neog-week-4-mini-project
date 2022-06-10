import React, { useState } from 'react'
import "./headerMaintask.css"
import { AiFillDelete} from 'react-icons/ai'
const HeaderMaintask = ({ usertask }) => {

    
    const isChecked = JSON.parse(window.localStorage.getItem("user-task-check"))
    return (
        <div>
            {
                isChecked ? <del className='del-line'><label htmlFor="userInput" className='text-deleted lable-txt'>{usertask}
                    <input type="checkbox" className='check-box' id='userInput' checked={true} onClick={() => {

                        window.localStorage.setItem("user-task-check", JSON.stringify(false));
                        window.location.reload();
                    }} /></label></del>:<label htmlFor="userInput" className='lable-txt'>{usertask}
                        <input type="checkbox" className='check-box' id='userInput' onClick={() => {

                            window.localStorage.setItem("user-task-check", JSON.stringify(true));
                            window.location.reload();
                        }} />
                    </label>
                
            }
            <AiFillDelete className='del-icon' onClick={()=>{
                    window.localStorage.removeItem("user-task")
                    window.localStorage.removeItem("user-task-clear")
                    window.location.reload();
                }} style={{cursor:"pointer"}}/>
        </div>
  )
}

            export default HeaderMaintask