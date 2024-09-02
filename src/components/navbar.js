import { useState } from 'react';
import './navbar.css';

const Navbar = ()=>{
    const[ open , setopen]=useState(false);

    const toggle=()=>{
        setopen(!open);
    }
    return(
        <nav className='navbar'>
            <div className='brand'>
                <a href='#'><img alt='logo' src='logo.png' className='logo_image'/></a>
                {/* <a href='#' className='brandName'>twu</a> */}
                
            </div>
            <div className={`menuItems ${open ? 'open' : ''}`}>
                <a href='#'>HOME</a>
                <a href='#'>ABOUT</a>
                <a href='#'>PROJECTS</a>
                <a href='#'>TEAM</a>
                <a href='#'>GALLERY</a>
                <a href='#'>CONTACT</a>
            </div>
            <button className={` ${open ? 'toggle_clr': 'toggler'}`} onClick={toggle}>☰</button>
        </nav>
    )
}
export default Navbar;