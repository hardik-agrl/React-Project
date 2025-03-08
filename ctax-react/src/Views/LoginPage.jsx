import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      alert(data.message);
      if (response.ok) {
        setIsLogin(true); // Switch to login after successful registration
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error registering user.");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        // alert("Login successful!");
        navigate("/"); // Redirect to home
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Error logging in.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light w-100">
      <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">{isLogin ? "Login" : "Register"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Comapny Name</label>
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="Enter your Company Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Lisence Key</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your Lisence Key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Lisence Key</label>
              <input
                id="confirmPassword"
                type="password"
                className="form-control"
                placeholder="Confirm your Lisence Key"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          {/* {isLogin && (
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>
          )} */}
          <button className="btn btn-primary w-100" type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <div className="text-center mt-3">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button className="btn btn-link p-0" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
