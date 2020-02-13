import React, { Fragment, Component,useState } from 'react';
import aunLogo from "../assets/aun-logo-top.png";
import background1 from "../assets/slanted.svg";
import Home from "./home";
import Register from "./register";
import Submission from "./submission";
import Symposium from "./symposium";
import Venue from "./venue";
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
                 <center style={{width:"100%"}}> <img
                    style={{                     
                      height : "40px",
                      width : "120px"                      
                    }}
                    src={aunLogo}
                    alt="aun-logo"
                  /></center>
                </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
      </Navbar>
 </div>
</header>
</div>

<Route path="/" exact component={Home}/>
<Route path="/register_now"  component={Register}/>
<Route path="/submission"  component={Submission}/>
<Route path="/symposium"  component={Symposium}/>
<Route path="/venue&amp;accomodation"  component={Venue}/>
</Router>
</Fragment> );
    
}
 
export default NavbarComponent;