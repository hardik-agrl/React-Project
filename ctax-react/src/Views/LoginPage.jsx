import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  const [companyName, setCompanyName] = useState("");
  const [licenseKey, setLicenseKey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company_name: companyName, license_key: licenseKey }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("companyName", companyName);
        localStorage.setItem("licenseKey", licenseKey);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Error logging in.");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light w-100">
      <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input
              id="companyName"
              type="text"
              className="form-control"
              placeholder="Enter your Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="licenseKey" className="form-label">License Key</label>
            <input
              id="licenseKey"
              type="text"
              className="form-control"
              placeholder="Enter your License Key"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
