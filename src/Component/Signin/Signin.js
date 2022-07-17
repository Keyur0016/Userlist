import React from 'react'; 
import './Signin.css' ; 

export default function Verification() {

    const SigninFun = () => {
        const Username = document.getElementById("Username").value ; 
        const Password = document.getElementById("Password").value ;        
        
        if (Username === ""){
            alert("Please,Enter Username") ; 
        } 
        else if (Password === ""){
            alert("Please, Enter Password") ; 
        }
        else{
            
            function setCookie(cname, cvalue, exdays) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            setCookie("username", Username, 3) ; 

            window.location.reload() ; 
              
        }

    } ; 
    
    return (
        <div className='Signin' >
             
            {/* Signin Division  */}

            <div className='SigninDiv' >

            <h5 className="card-title">Sigin</h5>
                
                {/* Signin Input widget Division  */}

                <div className='InputDiv' >

                    {/* 1. Username  */}
                      
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        id='Username'/>
                    </div>

                    {/* 2. Password  */}

                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                        <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        id='Password'/>
                    </div>

                </div>

                {/* Signin Button  */}
                
                <button type="button" className="btn btn-warning btn-sm" onClick={SigninFun} >Signin</button>

            </div>
        
        </div>
    )
}
