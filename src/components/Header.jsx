
//rnfe shortcut
import React, {useState} from 'react'

const Header = () => {
    //my functions
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }


    return (
        <div className='Header'>
            <h1>Option 1</h1>
            <button type='button' onClick={handleClick}> 
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            <h1>Option 2</h1>
            <button type='button' onClick={() => setDarkMode(!darkMode)}> 
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Header;

