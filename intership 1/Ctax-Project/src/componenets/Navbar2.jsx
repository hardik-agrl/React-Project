import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Fullscreen, Minimize } from "lucide-react"; 


export default function Navbar2(){
    const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
    return(
        <>
         <div className=' className="p-3 mb-2 bg-primary text-white d-flex align-items-center justify-content-around'>
                <div className="logo">
                    <h3>CTax</h3>
                    <img src="" alt="   " />
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
                    <ul className='dropdown-menu'>
                        <li><a className="dropdown-item" href="#">New Projects</a></li>
                        <li><a className="dropdown-item" href="#">Create Users</a></li>
                        <li><a className="dropdown-item" href="#">Revenue Report</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Help & Support</a></li>
                        </ul>
                </div>
                <div className="mainmenu">
                    <a className='text-white dropdown-toggle' type='button' data-bs-toggle='dropdown'>Mega Menu</a>
                    <div className='dropdown-menu '>

                    
                    <div className="megaMenuContainer  d-flex position-absolute top-50 start-0  ">
                        <div className="ui p-4 g-col-3">
                            <h4 >UI Components</h4>
                            <ul >
                                
                                <li><a className="dropdown-item" href="#">Widgets</a></li>
                                <li>Nestable List</li>
                                <li>Range Sliders</li>
                                <li>Masonry Items</li>
                                <li>Sweet Alerts</li>
                                <li>Treeview Page</li>
                                <li>Tour Page</li>
                            </ul>
                        </div>
                        <div className="applications p-4 g-col-3">
                            <h2>Applications</h2>
                            <ul>

                            <li>eCommerce Pages</li>
                            <li>CRM Pages</li>
                            <li>Email</li>
                            <li>Calender</li>
                            <li>Team Contacts</li>
                            <li>Task Board</li>
                            <li>Email Templates</li>
                            </ul>
                        </div>
                        <div className="extra p-4 g-col-3">
                                <h2>Extra Pages</h2>
                            <ul>
                                <li>Left Sidebar with User</li>
                                <li>Menu Collapsed</li>
                                <li>Small left Sidebar</li>
                                <li>New Header Style</li>
                                <li>Search Result</li>
                                <li>Gallery Pages</li>
                                <li>Maintainence & Coming Soon</li>
                            </ul>
                        </div>
                        <div className="discount p-4 g-col-3">
                            <h2>Special Discount Sale!</h2>
                            <h3>Save up to 70% off.</h3>
                            <button className="download">Download Now</button>
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
                    <a className="text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Bell Icon</a>
                    <ul className='dropdown-menu'>
                        <li><a className="dropdown-item" href="#">Notification 1</a></li>
                        <li><a className="dropdown-item" href="#">Notification</a></li>
                        <li><a className="dropdown-item" href="#">Notification</a></li>
                        
                        </ul>
                </div>

                </div>
                <div className="profile">
                    
                    <img src="" alt="" />
                    <a className='text-white dropdown-toggle' type='button' data-bs-toggle='dropdown'>Demo</a>
                    <ul className='dropdown-menu'>
                        <p>Welcome</p>
                        <li><a className='dropdown-item' href='#'>My account </a></li>
                        <li><a className='dropdown-item' href='#'>Log Out </a></li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}