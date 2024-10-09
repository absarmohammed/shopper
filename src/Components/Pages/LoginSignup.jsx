import React from 'react';
import './CSS/LoginSignup.css';
const LoginSignup = () => {
    return (
        <div className='loginsingup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' name="" id="" />
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <input type="password" placeholder='Password' name="" id="" />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>by Continuing, i agree to use the term and conditions.</p>
                </div>
            </div>
            
        </div>
    );
};

export default LoginSignup;