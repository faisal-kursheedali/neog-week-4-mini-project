import React, { useState } from 'react'
import "./css/header.css"

import data from "../quotes.json";
import HeaderInput from './components/header/HeaderInput';
import HeaderMaintask from './components/header/HeaderMaintask';
const Header = () => {
    
    let name = JSON.parse(window.localStorage.getItem("userName"));
    
    const max = data.quotes.length;
    console.log(max);
    // const fetch=fetch("./quotes.json")
    // const data=fetch.json();
    // localStorage.clear()

    let number = Math.floor(Math.random() * max)
    const usertask = JSON.parse(window.localStorage.getItem("user-task"))
    return (
        <>
            <div className="header-box">
                <div className='header-txt'>
                    hello <span className='user-name'>{name}</span>
                </div>
                {
                    usertask?<HeaderMaintask usertask={usertask}/>:<HeaderInput/>
                }
                <div className="quote-box">
                    <div className="quote">{data.quotes[number].quote}</div>
            <div className="author">- {data.quotes[number].author}</div>
                </div>
                

            </div>
        </>
    )
}

export default Header