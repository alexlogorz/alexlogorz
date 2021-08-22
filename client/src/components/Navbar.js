import React, { useContext, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './NavbarData';
import '../css/Navbar.css'
import { IconContext } from 'react-icons/lib';
import { Container } from 'react-bootstrap'
import NavbarContext from './NavbarContext';
import resume from '../images/alexlogorz-resume.PDF'

const Navbar = () => {
    const {state, dispatch} = useContext(NavbarContext)

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='navbar'>
                    <Container>
                        <Link to='#'><FaIcons.FaBars onClick={() => dispatch({type: 'TOGGLE_SIDEBAR'})}/></Link>
                    </Container>
                </div>
                <nav className={state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={() => dispatch({type: 'TOGGLE_SIDEBAR'})} />
                            </Link>
                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} onClick={() => dispatch({type: 'TOGGLE_SIDEBAR'})}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        <li className='nav-text'>
                            <Link to={resume} target="_blank" download>
                                <AiIcons.AiOutlineDownload />
                                <span>Resume</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
