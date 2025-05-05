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
      const response = await axios.get("http://localhost:5000/api/onlineImp", {
        params: {
          from_date: fromDate.toLocaleDateString("en-CA"),
          to_date: toDate.toLocaleDateString("en-CA"),
        },
      });

      {
        console.log(fromDate);
      }
      {
        console.log(toDate);
      }
      setDataSummary(response.data);
      console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
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
          onClick={handleImportData}
          disabled={loadingCtax}
        >
          {loadingCtax ? "Loading..." : "Import To Ctax"}
        </button>
      </div>
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th>Created at</th>
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
                  <td>
                    {new Date(item.created_at).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  <td>{item.glNo}</td>
                  <td>{item.glName}</td>
                  <td>{item.amount}</td>
                  <td>{item.debt}</td>
                  <td>{item.credit}</td>
                  <td>{item.accountType}</td>
                  <td>{item.amountCategory}</td>
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
