import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome,faLaptop,faLaughBeam,faStar,faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrunoLogo from "./../../assets/BrunoLogo.png"
import "./Sidebar.scss"
const CustomLink = ({to, clase , children, clicked}) => {
    const location = useLocation();
    const active = location.pathname === to;
    const selected = active ? {fontWeight: "bold", color: "white", fontSize: "40px"} : {color: "black"}
    return(
        <NavLink to={to} style={selected} className={clase} onClick={clicked}>
            {children}
        </NavLink>
    );
}


const hideSideBar = (sidebar) => {
    sidebar.current.classList.toggle("show");
}

const SideBar = ({ changeLink }) => {
    const sidebar = useRef();
    
    return (
        <>
        <button id='menu'><FontAwesomeIcon icon={faBars} onClick={() => hideSideBar(sidebar)}/></button>
        <div className='side__bar' ref={sidebar}>
            
            <div className='side__bar__header'>
                <NavLink to="/">
                    <img src={BrunoLogo} alt="" />
                </NavLink>
            </div>
            <ul className='links__list'>
                <CustomLink to={"/"} clase={"home-link"} clicked={changeLink}><FontAwesomeIcon icon={faHome}/></CustomLink>
                <CustomLink to={"/about"} clase={"about-link"} clicked={changeLink}><FontAwesomeIcon icon={faUser} /></CustomLink>
                <CustomLink to={"/study"} clase={"study-link"} clicked={changeLink}><FontAwesomeIcon icon={faStar} /></CustomLink>
                <CustomLink to={"/tech"} clase={"tech-link"} clicked={changeLink}><FontAwesomeIcon icon={faLaptop} /></CustomLink>
            </ul>
            <ul className='contact__links'>
                <a href="https://www.linkedin.com/in/bruno-capote-hernández/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/capotebr1"><i class="fa-brands fa-github"></i></a>
                <a href="mailto:brunocapotehdez@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            </ul>
        </div>
        </>
    );
}

export default SideBar;
