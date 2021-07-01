import React from 'react'
import '../components/header.css' ;
// import Box from '@material-ui/core/Box';

const Header = () => {
    const logo = "https://raw.githubusercontent.com/barbarasagredo/SCL016-burger-queen/main/src/images/Queen%20Vee.png"
    return (
        <div className='Navbar'>
                    <img alt="Logo" src={logo} className="logo"/>
        </div>
    )
}

export default Header;
