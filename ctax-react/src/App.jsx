import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar2 from "./componenets/navbar2";
import LeftSideBar from "./Views/LeftSideBar";
import Footer from "./Views/Footer";
import Body from "./componenets/Body";
import LoginPage from "./Views/LoginPage";
import ProtectedRoute from "./componenets/ProtectedRoute";

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";  

  return (
    <>
      {!isAuthPage && <Navbar2 />} 
      <div className="min-vh-90">
        <div className="d-flex">
          {!isAuthPage && <LeftSideBar />}{" "}
          
          <Routes>
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <Body />
                </ProtectedRoute>
              }
            />
            <Route path="/auth" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
      {!isAuthPage && <Footer />}  
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
