import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
const Login = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    if (password === confirmpassword ) {
      // Redirect to the welcome page upon successful login
      // alert("Logged in");
      navigate('/loginstudent');
    }
    else{
      alert("They don't match");
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="login-box">
                <h2 className="title">Type New Password</h2>
                <h3 className="subtitle">Your one stop destination for leave requests and outing permissions.</h3>
                <div className="field">
                  <p className="control has-icons-left">
                    <input 
                      className="custom-input-password" 
                      type="password" 
                      placeholder="New Password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input 
                      className="custom-input-password" 
                      type="password" 
                      placeholder="Confirm New Password" 
                      value={confirmpassword} 
                      onChange={(e) => setConfirmPassword(e.target.value)} 
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
