import React, { useState } from 'react'
import sr from '../IMAGES/auth.jpg'
import'./Login.css'
function Login() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const validatePassword = () => {
      return {
        hasLowercase: /[a-z]/.test(password),
        hasUppercase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[@$!%*?&]/.test(password),
        hasMinLength: password.length >= 8,
      };
    };
  
    const passwordValidation = validatePassword();
  
    return (
      <div className="app-container">
        <div className="form-container">
          <h1 className="form-title">Register</h1>
          <form className="register-form">
            <input
              type="text"
              placeholder="Username"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
            />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          <p className="login-text">Have an account? <a href="/">Login</a></p>
          <div className="strength-indicator">
            <p>Password Strength Indicator:</p>
            <ul>
              <li
                className={
                  passwordValidation.hasLowercase && passwordValidation.hasUppercase
                    ? "valid"
                    : "invalid"
                }
              >
                Lowercase & Uppercase
              </li>
              <li
                className={passwordValidation.hasNumber ? "valid" : "invalid"}
              >
                Numbers (0-9)
              </li>
              <li
                className={passwordValidation.hasSpecialChar ? "valid" : "invalid"}
              >
                Special Character (@$!%*?&)
              </li>
              <li
                className={passwordValidation.hasMinLength ? "valid" : "invalid"}
              >
                At least 8 characters
              </li>
            </ul>
          </div>
        </div>
        <div className="image-container">
          <img
            src={sr}
            alt="Register Illustration"
          />
        </div>
      </div>
    );
  }

export default Login
