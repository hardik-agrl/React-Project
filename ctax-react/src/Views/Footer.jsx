import React from "react";

function Footer() {
  return (
    <footer className="footer fixed-bottom justify-content-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {new Date().getFullYear()} &copy;{" "}
            <a href="">CTax</a>
          </div>
          <div className="col-md-6">
            <div className="text-md-right footer-links d-none d-sm-block">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
