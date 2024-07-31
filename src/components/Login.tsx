import React, { useState, useContext } from "react";
import "../SliderForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useLoginUserMutation, useRegisterUserMutation } from '../features/LoginAPI';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const SliderForm: React.FC = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [loginUser, { isLoading: isLoginLoading, isError: isLoginError }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading, isError: isRegisterError }] = useRegisterUserMutation();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerContactPhone, setRegisterContactPhone] = useState('');
  const [registerAddress, setRegisterAddress] = useState('');
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext must be used within a UserProvider');
  }

  const { setUser } = userContext;

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email: loginEmail, password: loginPassword }).unwrap();
      console.log('Response:', response);

      if (response && response.email && response.token && response.role && response.id) {
        setUser({
          name: response.email,
          role: response.role,
        });
        navigate(response.role === 'admin' ? '/admin' : '/dashboard');
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await registerUser({ name: registerName, email: registerEmail, password: registerPassword, contactPhone: registerContactPhone, address: registerAddress });
      console.log('User registered:', result);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Full Name"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Phone"
            value={registerContactPhone}
            onChange={(e) => setRegisterContactPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={registerAddress}
            onChange={(e) => setRegisterAddress(e.target.value)}
            required
          />
          <button type="submit" disabled={isRegisterLoading}>
            {isRegisterLoading ? 'Registering...' : 'Sign Up'}
          </button>
          {isRegisterError && <p className="text-red-600">Failed to register. Please try again.</p>}
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <a href="#">Forgot your password?</a>
          <button type="submit" disabled={isLoginLoading}>
            {isLoginLoading ? 'Logging in...' : 'Sign In'}
          </button>
          {isLoginError && <p className="text-red-600">Failed to login. Please check your credentials.</p>}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderForm;
