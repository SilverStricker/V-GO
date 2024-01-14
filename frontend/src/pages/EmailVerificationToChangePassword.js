import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
const Login = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin1 = () => {
    // Implement your login logic here
    if (email === 'ghose@gmail.com') {
      // Redirect to the welcome page upon successful login
      // alert("Logged in");
      console.log(email);
    }
    else{
      alert("incorrect id or password");
    }
  };

  const handleLogin2 = () => {
    // Implement your login logic here
    if (code === '5671' && email === 'ghose@gmail.com') {
      // Redirect to the welcome page upon successful login
      // alert("Logged in");
      navigate('/codeverification');
    }
    else{
      alert("incorrect id or password");
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="email-verification-box">
                <h2 className="title">V-GO Reset/Forgot Password</h2>
                <h3 className="subtitle">Your one stop destination for leave requests and outing permissions.</h3>
                <div className="field">
                  <p className="control has-icons-left">
                    <input 
                      className="custom-input-email" 
                      type="text" 
                      placeholder="Enter V-GO email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div className="field">
                  <p className="control">
                    <button 
                      className="custom-input-email-button" 
                      onClick={handleLogin1}
                    >
                      Submit
                    </button>
                  </p>
                </div>
                    <input 
                      className="custom-input-code" 
                      type="text" 
                      placeholder="Enter Verification Code" 
                      value={code} 
                      onChange={(e) => setCode(e.target.value)} 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button 
                      className="custom-input-code-button" 
                      onClick={handleLogin2}
                    >
                      Submit
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
