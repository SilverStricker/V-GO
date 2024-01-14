import React, { useState } from 'react';
import './Login.css';
import styles from './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar";
import 'bulma/css/bulma.min.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    if(username == "proctor" && password == "admin"){
      navigate('/proctorhistory');
    }
    else if(username == "" || password == ""){
      alert("Not entered either username or password");
    }
    else{
      alert("incorrect id or password");
    }
  };

  const goToPasswordChange = () => {
    navigate('/emailverificationproctor');
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="login-box">
                <h2 className="title">Proctor Login</h2>
                <h3 className="subtitle">Your one stop destination for leave requests and outing permissions.</h3>
                <div className="field">
                  <p className="control has-icons-left">
                    <input 
                      className="custom-input-username" 
                      type="text" 
                      placeholder="Username" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input 
                      className="custom-input-password" 
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button 
                      className="login-button" 
                      onClick={handleLogin}
                    >
                      Log In
                    </button>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button 
                      className="Forgot-Password-Button" 
                      onClick={goToPasswordChange}
                    >
                      Forgot Password
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function LoginScreen(){
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default LoginScreen;
