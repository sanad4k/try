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
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Projects</a>
            </div>
            <button className='toggler' onClick={toggle}>☰</button>
        </nav>
    )
}
export default Navbar;