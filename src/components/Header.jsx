//rnfe shortcut
import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const Header = () => {
  //my state
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  // my context
  const color = useContext(ThemeContext);

  return (
    <header className="Header">
      <div className="logo">
        <img src="logo2.png" alt="Rick and Morty title" />
        {
        //<BootstrapSwitchButton
        //checked={false}
        //onlabel="Light Mode"
        //offlabel="Dark Mode"
        //onChange={handleClick}
      ///>
        }
      </div>
    </header>
  );
};

export default Header;
