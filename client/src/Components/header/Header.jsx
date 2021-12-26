import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
            <div className="topLeft">
            <img className="topImage" src="https://cosida.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/5/14/Brandeis.png"></img>

            </div>
            
            <div className="topMiddle">
                <ul className="mainList">
                    <li className="mainListItem">
                        <a href="/">
                        <i className="top fas fa-home"></i>
                        Home
                        </a>
                    </li>
                    <li className="mainListItem">
                        <a href="#">
                        <i className="top fas fa-calendar-alt"></i>
                        Schedule
                        </a>
                    </li>
                    <li className="mainListItem">
                        <a href="#">
                        <i className="top fas fa-running"></i>
                        Input Run
                        </a>
                    </li>
                    <li className="mainListItem">
                        <a href="/test">
                        <i className="top fas fa-sign-out-alt"></i>
                        Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <a href="#">
                <p className='profile'>
                Aaron
                    <i className="fas fa-bars"></i>
                    
                </p>
                </a>
                
            </div>
            </div>
        </div>
    )
}
