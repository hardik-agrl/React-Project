import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar2 from "./componenets/navbar2";
import LeftSideBar from "./Views/LeftSideBar";
import Footer from "./Views/Footer";
import Body from "./componenets/Body";

function App() {
  return (
    <BrowserRouter> 
      <Navbar2 />
      <div className="min-vh-90">

      <div className="d-flex">
        <LeftSideBar />
        <Body /> 
      </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
