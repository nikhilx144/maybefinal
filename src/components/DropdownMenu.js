import React, { useState } from "react";
import user from "../assets/avatar.png";
import "../styles/DropdownMenu.css";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Login", "Sign Up", "Logout"];
  return (
    <div className="dropdown">
      <img onClick={()=>setOpen(!open)} src={user} alt="Profile" className="profile" />
      {open && (
        <div className="menutab">
          <ul>
            {Menus.map((menu) => (
              <li onClick={()=>setOpen(false)} key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
