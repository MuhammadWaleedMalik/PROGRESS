import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (isLoggedIn: boolean) => void;
}

function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    // Check credentials
    if (email === "i47732@student.fontys.nl" && password === "igT7wtrM") {
      onLogin(true);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container overflow-hidden">
      {/* Left Side: Background Image */}
      <div className="image-section"></div>

      {/* Right Side: Login Form */}
      <div className="login-box">
        <div className="logo"></div>
        <h2 className="mt-10 ss text-left mr-28">Sign in with your Fontys account.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="PCN@student.fontys.nl or PCN@fontys.nl"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <p className="footer-text mt-14">
          Signing in requires a{" "}
          <a href="#">
            <span className="text-blue-400">Fontys account</span>
          </a>
          .
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;