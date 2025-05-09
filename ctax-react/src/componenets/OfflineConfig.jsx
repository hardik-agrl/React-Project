import React, { useState, useEffect } from "react";
import axios from "axios";



export default function OfflineConfig() {
  const [configType, setConfigType] = useState("Navision");
  const [companyName, setCompanyName] = useState(localStorage.getItem("companyName") || '');
  const [licenseKey, setLicenseKey] = useState(localStorage.getItem("licenseKey") || '');
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [trialBalanceApi, setTrialBalanceApi] = useState("");
  const [validationStatus, setValidationStatus] = useState("License Validated");

  useEffect(() => {
    fetchData();
  }, [configType]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/offline");
      const data = response.data;
      if (data.length > 0) {
        const itm = data[0];
        
        setUserId(itm.user_id || "");
        setPassword(itm.password || "");
        setTrialBalanceApi(itm.trail_balance_api || "");
        setValidationStatus("License Validated");
        console.log(itm);
      } else {
        setUserId(""), setPassword(""), setTrialBalanceApi(""), setValidationStatus("Invalid");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSave = async () => {
    if (!companyName || !licenseKey) {
      alert("Please enter Company Name and License Key");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/InsertOfflineConfig", {
        config_type: configType,
        
        user_id: userId,
        password: password,
        trail_balance_api: trialBalanceApi,
      });
      alert(response.data.message);
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const handleValidate = async () => {
    
  };

  return (
    <div className="row card-box">
      <div className="col-sm-12">
        <form className="form-horizontal">
          <h4 className="mb-3 header-title">Nav Configuration</h4>
          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">Config Type</label>
            <div className="col-9">
              {["Navision", "Oracle", "Tally"].map((type) => (
                <label key={type} className="m-3">
                  <input
                    type="radio"
                    name="type_config"
                    value={type}
                    checked={configType === type}
                    onChange={() => setConfigType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">Company Name</label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#eee" }}
                value={companyName}
                disabled
                
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">Licence Key</label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#eee" }}
                value={licenseKey}
                
                disabled
                placeholder="Licence Key"
              />
              
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">User ID</label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">Password</label>
            <div className="col-9">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-3 col-form-label">Trial Balance Api</label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                value={trialBalanceApi}
                onChange={(e) => setTrialBalanceApi(e.target.value)}
                placeholder="Full URL"
              />
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
}
