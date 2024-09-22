import React from "react"
import './Login.css'

const LogIn: React.FC = ()=> {
    return(
    <div className="LogInContainer">
        
        <div className="LoginBox">

        <div className="inputbox">

                                <label htmlFor="email">Email</label>
                                <input type="email" />
        </div>    

        <div className="inputbox">

                                <label htmlFor="UserName">Nombre de Usuario</label>
                                <input type="text" />
        </div>

        <div className="inputbox">
            
                                <label htmlFor="password">Password</label>
                                <input type="password" />
        </div>


        </div>

        

    </div>)
}

export default LogIn