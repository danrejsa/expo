import React, { Fragment, Component,useState } from 'react';
import aunLogo from "../assets/aun-logo-top.png";
import background1 from "../assets/slanted.svg";
import Home from "./home";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const NavbarComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return ( 
        <Fragment> 
       <Router>
        <div className="pers">
        <header className="container-header type1" id="header">
          
      
      <div>
      <Navbar style={{background:"#030306"}} expand="md">
        <NavbarBrand href="/" style={{width:"100%"}}>               
         <a href="/" title="aun logo" rel="home">
                 <div style={{width:"100%"}}> 
                 <img
                    style={{                     
                      height : "70px",
                    
                     padding:"1rem" 
                                        
                    }}
                    src={aunLogo}
                    alt="aun-logo"
                  />
                  </div>
                </a>
        </NavbarBrand>
      
        
      </Navbar>
 </div>
</header>
</div>

<Route path="/" exact component={Home}/>
</Router>
</Fragment> );
    
}
 
export default NavbarComponent;