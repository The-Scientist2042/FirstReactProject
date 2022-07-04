import React from 'react'
import { ReactDOM } from 'react-dom'
import logo from '../logo-react-icon.png'
export default function Navbar(){
    return(
        <nav>
            
            <div id="one">
            <img src={logo} id='img'  />
                <h2>
                    ReactFacts
                </h2>
            </div>
            <div id="two">
                <h3>
                    React Course - Project 1
                </h3>
            </div>
        </nav>
    )
}
