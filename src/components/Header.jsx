
//rnfe shortcut
import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    //my state
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    // my context
    const color = useContext(ThemeContext);

    return (
        <header className='Header'>
            <h1 style={{color}}>HOOKS</h1>
            <h4>Option 1</h4>
            <button type='button' onClick={handleClick}> 
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            <h4>Option 2</h4>
            <button type='button' onClick={() => setDarkMode(!darkMode)}> 
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    );
}

export default Header;

