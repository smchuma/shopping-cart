import React from "react";

const Navbar = (props) => {
  const { countItems } = props;
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>Shoppa.</h1>
        </div>
        <div className="nav-links">
          <h1>Cart</h1>
          {countItems ? <button className="badge">{countItems}</button> : ""}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
