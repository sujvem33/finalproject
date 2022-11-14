//Foot.jsx
import React from "react";
import "./../footer.css";
import gitlogoImage from "../Images/githublogo.png"

function Footer() {
  return (
    <div className="main-footer">
      {/* <h1>Footer</h1> */}
      <div className="container">
        <div className="row">
          {/* // column1 */}
          <div className="col">
            <h4>India Attire Co</h4>
            <ul className="list-unstyled">
              <li>+91 9959765898</li>
              <li>Ships all over India</li>
              <li>Hyderabd, India</li>
            </ul>
          </div>
          {/* // column2 */}
          <div className="col">
          <a href="https://github.com/sujvem33/finalproject" style={{ color: "white" }} >
          <img src={gitlogoImage} alt="logo" className="github" />
            </a>
           
          </div>
          {/* // column3 */}
          <div className="col">
            <h4>KEEP IN TOUCH</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} India Attire Co| All Rights Reserved
            | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
