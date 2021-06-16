import React from 'react';
import './Login.css';
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          
          <button onClick={() => { history.push("/DeckPage");}}>Login</button>
		
        </div>
      </form>
    </div>

	
  );
}

export default Login;
