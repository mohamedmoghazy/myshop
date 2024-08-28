import React, { useState } from 'react';
import '../styles/SigninForm.css';

const SigninForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="info-container">
          <div className="info-item log-in">
            <p>Have an account?</p>
            <div className="btn" onClick={toggleForm}>Log In</div>
          </div>
          <div className="tree">
            <div className="leaves"></div>
            <div className="trunk"></div>
          </div>
          <div className="info-item sign-up">
            <p>Don't have an account?</p>
            <div className="btn" onClick={toggleForm}>Sign Up</div>
          </div>
        </div>
        <div className={`form-container ${isLoginActive ? '' : 'active'}`}>
          <div className="form-item">
            <div className="fire">
              <svg className="flameSVG" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <rect className="flame" x="400" y="310" width="5" height="5" rx="0.5" ry="0.5" fill="#FFDD02" />
                  <circle className="spark" cx="400" cy="300" r="0.05" fill="#FFDD02" />
                </defs>
                <g className="whole">
                  <g className="flameContainer" />
                  <g className="sparksContainer" />
                  <g className="logs" opacity="1">
                    <path
                      d="M446.68,299.63l-91.46,29.22a3,3,0,0,1-3.68-2.12L349.2,318a3,3,0,0,1,2.12-3.68l91.46-29.22a3,3,0,0,1,3.68,2.12L448.8,296A3,3,0,0,1,446.68,299.63Z"
                      fill="#612e25"
                    />
                    <path
                      filter="url(#shadow)"
                      d="M349.2,296l2.34-8.69a3,3,0,0,1,3.68-2.12l91.46,29.22A3,3,0,0,1,448.8,318l-2.34,8.69a3,3,0,0,1-3.68,2.12l-91.46-29.22A3,3,0,0,1,349.2,296Z"
                      fill="#70392f"
                    />
                  </g>
                </g>
                <rect className="hit" width="200" height="260" x="300" y="230" fill="transparent"></rect>
              </svg>
            </div>
            {isLoginActive ? (
              <form onSubmit={OnSigninClicked} className="form-log-in animated">
                <input name="Username" placeholder="Username" type="text" />
                <input name="Password" placeholder="Password" type="password" />
                <button className="btn">Log in</button>
              </form>
            ) : (
              <form onSubmit={OnSignUpClicked} className="form-sign-up animated">
                <input name="Username" placeholder="Username" type="text" />
                <input name="Password" placeholder="Password" type="password" />
                <input name="CPassword" placeholder="Confirm Password" type="password" />
                <button className="btn">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

  const OnSigninClicked = (e) =>
  {
    e.preventDefault();
    console.log("Sign in Clicked");
  }

  const OnSignUpClicked = (e) =>
  {
    e.preventDefault();
    console.log("Sign Up Clicked");
  }

export default SigninForm;
