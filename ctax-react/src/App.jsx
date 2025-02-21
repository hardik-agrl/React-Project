import { useState } from "react";

import "./App.css";
import ImportNavData from "./componenets/ImportNavData";
import Navbar from "./componenets/navbar";
import Leftbar from "./componenets/leftbar";
import Body from "./componenets/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ImportData from "./componenets/importData";
import OfflineConfig from "./componenets/OfflineConfig";
import OnlineConfig from "./componenets/OnlineConfig";
import Login from "./componenets/Login";
import Navbar2 from "./componenets/navbar2";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./Views/NavBar";
import Header from "./Views/Header";
import LeftSideBar from "./Views/LeftSideBar";
import Footer from "./Views/Footer";
import RightSideBar from "./Views/RightSideBar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  return (
    <>
    <div className="d-flex ">

    <NavBar/>
    </div>
    <LeftSideBar/>
    <RightSideBar/>
    <Footer/>
    {/* <OnlineConfig/> */}
    </>
    
    //     <Router>
    
    //     <Navbar2 />
    //     {/* <div className="mainWrapper"> */}
    //       <Leftbar />

    //       <Body />
    //       <Routes>
    //         {/* <Route path="/" element={<OnlineConfig />} /> */}
    //         <Route path="/offline" element={<OfflineConfig />} />
    //         {/* <Route path="/import" element={<ImportNavData />} /> */}
    //       </Routes>
    //     {/* </div> */}
    //   {/* </div> */}
    // </Router>
  );
}

export default App;
