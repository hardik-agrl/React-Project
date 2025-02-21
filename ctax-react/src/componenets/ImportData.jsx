import React, { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import axios from "axios";

export default function ImportData() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [dataSummary, setDataSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCtax, setLoadingCtax] = useState(false);

  const handleImportData = async () => {
    setLoading(true);
    setDataSummary([]);
    try {
      const response = await axios.get("/home/GetCtax_ImportData", {
        params: {
          from_date: fromDate.toISOString().split("T")[0],
          to_date: toDate.toISOString().split("T")[0],
        },
      });
      setDataSummary(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  const handleImportDataToCtax = async () => {
    setLoadingCtax(true);
    try {
      const response = await axios.get("/home/BCImportDataToCTax", {
        params: {
          from_date: fromDate.toISOString().split("T")[0],
          to_date: toDate.toISOString().split("T")[0],
        },
      });
      alert(response.data);
    } catch (error) {
      console.error("Error importing to Ctax", error);
    }
    setLoadingCtax(false);
  };

  return (
    <div className="row card-box">
      <div className="col-sm-4">
        <div className="form-group">
          <label>From Date</label>
          <Flatpickr
            className="form-control"
            value={fromDate}
            onChange={(date) => setFromDate(date[0])}
            options={{ dateFormat: "Y-m-d" }}
          />
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>To Date</label>
          <Flatpickr
            className="form-control"
            value={toDate}
            onChange={(date) => setToDate(date[0])}
            options={{ dateFormat: "Y-m-d" }}
          />
        </div>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-danger mt-3"
          onClick={handleImportData}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-danger mt-3"
          onClick={handleImportDataToCtax}
          disabled={loadingCtax}
        >
          {loadingCtax ? "Loading..." : "Import To Ctax"}
        </button>
      </div>
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th>GL No</th>
              <th>GL Name</th>
              <th>Amount</th>
              <th>Debit Amount</th>
              <th>Credit Amount</th>
              <th>Account Type</th>
              <th>Account Category</th>
            </tr>
          </thead>
          <tbody>
            {dataSummary.length > 0 ? (
              dataSummary.map((item, index) => (
                <tr key={index}>
                  <td>{item.G_L_Account_No}</td>
                  <td>{item.G_L_Account_Name}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Debit_Amount}</td>
                  <td>{item.Credit_Amount}</td>
                  <td>{item.Income_Balance}</td>
                  <td>{item.Account_Category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
