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
      <div className="login-box w-[480px]">
        <div className="logo mr-[200px] mb-12"></div>
        <h2 className="mr-[120px] mt-4 mb-4 w-[280px]">Sign in with your Fontys account.</h2>
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
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="sign-in-button w-28 h-10 text-center mr-[290px] mt-10">
            Sign in
          </button>
        </form>
        <p className="mt-5 mr-[80px] w-80">
          Signing in requires a{" "}
          <a href="#">
            <span className="text-blue-400">Fontys account</span>
          </a>
          .
        </p>
        <div className="footer-links mt-20 mr-[80px] w-80">
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