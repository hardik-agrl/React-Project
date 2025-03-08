import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Fullscreen, Minimize } from "lucide-react"; 


export default function Navbar2(){

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove authentication token
        navigate("/auth"); // Redirect to login page
      };




    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().then(() => {
            setIsFullscreen(true);
          }).catch(err => console.log(err));
        } else {
          document.exitFullscreen().then(() => {
            setIsFullscreen(false);
          }).catch(err => console.log(err));
        }
      };
      
    return(
        <>
         <div className="p-1 mb-2 bg-primary text-white d-flex align-items-center justify-content-around">
                <div className="logo">
                    <h3>CTax</h3>
                    {/* <img src="" alt="   " /> */}
                </div>
                <div className="hamburger">
                <div className="contianer-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                </div>
  
                </div>
                <div className="minimenu">
                    <a className="  text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Create New</a>
                    <ul className='dropdown-menu dropdown-menu-end' style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li><a className="dropdown-item" href="#">New Projects</a></li>
                        <li><a className="dropdown-item" href="#">Create Users</a></li>
                        <li><a className="dropdown-item" href="#">Revenue Report</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Help & Support</a></li>
                        </ul>
                </div>
                <div className="mainmenu">
                    <a className='text-white dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Mega Menu</a>
                    <div className='dropdown-menu '>

                    
                    <div className="megaMenuContainer  d-flex position-absolute top-50 start-0  bg-body-secondary ">
                        <div className="ui p-4 g-col-3">
                            <h4 >UI Components</h4>
                            <ul  style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                
                                <li><a className="dropdown-item" href="#">Widgets</a></li>
                                <li><a className="dropdown-item" href="#">Nestable List</a></li>
                                <li><a className="dropdown-item" href="#">Range Sliders</a></li>
                                <li><a className="dropdown-item" href="#">Masonry Items</a></li>
                                <li><a className="dropdown-item" href="#">Sweet Alerts</a></li>
                                <li><a className="dropdown-item" href="#">Treeview Page</a></li>
                                <li><a className="dropdown-item" href="#">Tour Page</a></li>
                            </ul>
                        </div>
                        <div className="applications p-4 g-col-3">
                            <h2>Applications</h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

                            <li><a className="dropdown-item" href="#">eCommerce Pages</a></li>
                            <li><a className="dropdown-item" href="#">CRM Pages</a></li>
                            <li><a className="dropdown-item" href="#">Email</a></li>
                            <li><a className="dropdown-item" href="#">Calender</a></li>
                            <li><a className="dropdown-item" href="#">Team Contacts</a></li>
                            <li><a className="dropdown-item" href="#">Task Board</a></li>
                            <li><a className="dropdown-item" href="#">Email Templates</a></li>
                            </ul>
                        </div>
                        <div className="extra p-4 g-col-3">
                                <h2>Extra Pages</h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li><a className="dropdown-item" href="#">Left Sidebar with User</a></li>
                                <li><a className="dropdown-item" href="#">Menu Collapsed</a></li>
                                <li><a className="dropdown-item" href="#">Small left Sidebar</a></li>
                                <li><a className="dropdown-item" href="#">New Header Style</a></li>
                                <li><a className="dropdown-item" href="#">Search Result</a></li>
                                <li><a className="dropdown-item" href="#">Gallery Pages</a></li>
                                <li><a className="dropdown-item" href="#">Maintainence & Coming Soon</a></li>
                            </ul>
                        </div>
                        <div className="discount p-4 g-col-3">
                            <h3>Special Discount Sale!</h3>
                            <h4>Save up to 70% off.</h4>
                            <button className="download btn btn-success">Download Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="searchbar">
                    <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
                </div>
                <div className="fullscreen">
                <button onClick={toggleFullscreen} className="btn btn-light">
                    {isFullscreen ? <Minimize size={20} /> : <Fullscreen size={20} />} 
                </button>

                </div>
                <div className="icon">

                    <div className="minimenu">
                    <a className="text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         
                         <i className="bi bi-bell"></i>
                         </a>
                    <ul className='dropdown-menu'>
                        <li><a className="dropdown-item" href="#">Notification 1</a></li>
                        <li><a className="dropdown-item" href="#">Notification</a></li>
                        <li><a className="dropdown-item" href="#">Notification</a></li>
                        
                        </ul>
                </div>

                </div>
                <div className="profile">
                    
                    {/* <img src="" alt="" /> */}
                    <a className='text-white dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        
                        <i className="bi bi-person-circle"></i>
                        </a>
                    <ul className='dropdown-menu'>
                    <h4 className='p-2'>Welcome</h4>
                        <li><a className='dropdown-item' href='#'>My account </a></li>
                        <li><a className='dropdown-item' href='#'>Log Out </a></li>
                        
                    </ul>

                </div>
                <div className="logout">

                <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </>
    )
}