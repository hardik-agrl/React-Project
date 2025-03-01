import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

// Define the link style if needed.
const linkStyle = { textDecoration: 'none', color: 'inherit' };

export default function Leftbar() {
    return (
        <div className='leftbarContainer min-vh-100 border border-black w-40'>
            <h3 className="headingText">Navigation</h3>
            <div className="leftbuttons">
                <div className='p-3 mb-2'>
                    <Link to="/" style={linkStyle} className='border border-black'>
                        Online Config
                    </Link>
                </div>
                <div className='p-3 mb-2'>
                    <Link to="/import-data" style={linkStyle} className='border border-black'>
                        Import Data
                    </Link>
                </div>
                <div className='p-3 mb-2'>
                    <Link to="/offline" style={linkStyle} className='border border-black'>
                        Offline Config
                    </Link>
                </div>
                <div className='p-3 mb-2'>
                    <Link to="/import" style={linkStyle} className='border border-black'>
                        Import Nav Data
                    </Link>
                </div>
            </div>
        </div>
    );
}
