import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='head'> 
            <ActiveLink  to="/">Home</ActiveLink>
            <ActiveLink  to="/friends">Friends</ActiveLink>
            <ActiveLink  to="/about">About</ActiveLink>
            <ActiveLink  to="/contact">Contact</ActiveLink>
            <ActiveLink to='/posts'>Posts</ActiveLink>
        </nav>
    );
};
export default Header;