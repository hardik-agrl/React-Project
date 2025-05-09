import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ImportNavData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    

    const handleImport = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5000/api/offlineImp");
            const result =  response.data;
            console.log(result)
            setData(result);
            
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        }
        setLoading(false);
    };

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                      
                        <div className="col-sm-2">
                            <button 
                                id="btn_navImport" 
                                className="btn btn-primary" 
                                onClick={handleImport}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Import"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 card-box">
                    <div className="table-responsive">
                        <table id="tbl_nav_Import" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.no}</td>
                                            <td>{item.name}</td>
                                            <td>{item.balance}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">No data available</td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
