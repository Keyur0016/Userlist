import React from 'react' ; 
import './Navbar.css' ; 

export default function Navbar(props) {

    // Get username session value 
    const Username = sessionStorage.getItem("username") ; 
    
    const Logout = () => {

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        setCookie("username", "", 3) ; 

        window.location.reload() ; 

    } ; 

    return (

    <nav className="navbar bg-dark Navbar">
        
        <div className="container-fluid">

            {Username != "" ?<span className="navbar-brand mb-0 h4 Logout" onClick={Logout}>Logout</span>:
            <span className="navbar-brand mb-0 h4 text-light">{props.name}</span> 
            }

        </div>
    
    </nav>
  )
}
