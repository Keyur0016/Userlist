import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Signin from './Component/Signin/Signin' ; 
import User from './Component/Userdata/User';

function App(props) {

  // Function -> GetCookie function
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const Username = getCookie("username") ; 

  // Set username value to sessionStorage 

  sessionStorage.setItem("username", Username) ; 

  

  return (
    <>
    <Navbar name="Userdata" />

    {Username === "" ? <Signin/> : <User/>}
    </>
  );
}

export default App;
