import React from 'react';
import OfflineConfig from './OfflineConfig';
import OnlineConfig from './OnlineConfig';
import ImportData from './importData';
import ImportNavData from './ImportNavData';
import { Routes, Route } from "react-router-dom";

function Body() {
  return (
      <div className="col-md-9">
    <Routes>


      <Route path="/" element={<OnlineConfig />} />  {/* Default route */}
      <Route path="/importdata" element={<ImportData />} />
      <Route path="/offlineConfig" element={<OfflineConfig />} />
      <Route path="/importNavData" element={<ImportNavData />} />
      
    </Routes>
      </div>
  );
}

export default Body;
