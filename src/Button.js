import React from "react"
import "./Button.css"
import {Link} from "react-router-dom"


const Button = () => {
    return (
        <Link to = "/sign-up">
          <button className = "btn">SIGNUP</button>
        </Link>
        
    )
}



export default Button