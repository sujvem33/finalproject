import React from "react";
import heroImage from "../Images/heroimage.png"

function HomePage() {
  return (
    <div className="home">
         <br/>  <br/>
      <div className="landingLeft">
        <img src={heroImage} alt="" className="landingImg" />
      </div>
      <br/>  <br/>
    </div>
  );
}

export default HomePage;