
import { Link } from 'react-router-dom';
import './style.js'
import {Navbarsection,Logo,Logotext,Ullist,Listitem,aa}from './style.js'

import './style2.css'

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbars = (props) => {
  

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="n">
      <Navbar color="light" light expand="md">
        <h1  style={{fontFamily:"Blackadder ITC"}} >Smart Development </h1>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{marginLeft:"30px"}} >
          
            <NavItem  >
            <Link  style={{textDecoration:'none',color:"black",fontSize:"20px"}}  to="/">Home</Link>
            </NavItem>
            <NavItem >
            <Link style={{textDecoration:'none',color:"black",fontSize:"20px"}} to="/Contact">Contact</Link>
            </NavItem>
            <NavItem >
            <Link  style={{textDecoration:'none',color:"black",fontSize:"20px"}} to="/Myservices">My services</Link>
            </NavItem>
            
          </Nav>
          <NavbarText><a href="https://www.facebook.com/oussama.errahem" target="_blanked" > <i style={{fontSize:"30px" ,color:"blue"}} className="fab fa-facebook-f" ></i> </a> <a href="https://github.com/Oussamaerrahem" target="_blanked" > <i style={{fontSize:"30px",color:"blue"}} className="fab fa-github" ></i> </a> <a href="https://www.linkedin.com/in/errahem-oussama-37b46911a/" target="_blanked" > <i style={{fontSize:"30px",color:"blue"}} className="fab fa-linkedin" ></i> </a> </NavbarText>
        </Collapse>
      </Navbar>
      <a id="btnScrollToTop" href="" >
        Up
      </a>
    </div>
  );
}

export default Navbars;