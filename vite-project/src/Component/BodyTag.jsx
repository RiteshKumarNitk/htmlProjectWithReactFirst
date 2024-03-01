import React from "react";
import 'remixicon/fonts/remixicon.css'

function BodyTag() {
  return (
    <div className="body">
      <div className="main">
        <div id="nav">
          <div id="nav-part1">
            <h3>Menu</h3>
            <i class="ri-menu-3-fill"></i>
          </div>
          <div id="nav-part2">
          <i class="ri-tooth-line"></i>
            <h1 className="h1">DentyTech</h1>
          </div>
          <div id="nav-part3">
            <button className="btn1">Log in</button>
            <button className="btn2">Sign Up</button>
          </div>
        </div>
        <h1>Our Advantages</h1>
        <img id="img1" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img id="img2" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img id="img3" src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img id="img4" src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h5 id="btn-left">Your Smile Our Passion</h5>
        <h5 id="btn-right">
            <div id="icons">
            <i class="icon ri-youtube-line"></i>
            <i class="icon ri-instagram-line"></i>
            <i class="icon ri-linkedin-line"></i>
            </div>
            <p>Best Start Up Of 2024</p>    
        </h5>
      </div>
    </div>
  );
}

export default BodyTag;
