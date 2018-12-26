import React from 'react'
import './css/styles.css';
//import {Link} from 'react-router'
import {Grid, Popover,OverlayTrigger,Image, Nav, Navbar, NavItem,NavDropdown,MenuItem } from 'react-bootstrap'


const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Contact me @">
    <strong><a href="mailto:harishramkumar1@gmail.com">reachme@harishbs.tk</a></strong>
  </Popover>
);



export default function Header () {
 /*   return(
    <header>
      <section>
        <img src="http://svgshare.com/i/40g.svg" alt="W Logo" className="logo" />
        <a href="https://github.com/erichbehrens/react-animated-slider" target="_blank">
          <img src="http://svgshare.com/i/3zm.svg" alt="GitHub Repository" />
        </a>
      </section>
    </header>
  )*/
     return (
        <Navbar fixedTop fluid>
            <Navbar.Header>
        <Navbar.Brand>
          <a href="#"></a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                     <OverlayTrigger
                      trigger="click"
                      rootClose
                      placement="bottom"
                      overlay={popoverClickRootClose}>
                        <NavItem eventKey={2} href="#">
                            CONTACT
                        </NavItem>             
                    </OverlayTrigger>                
                </Nav>
                    <Navbar.Text>
                        <Navbar.Link href="https://drive.google.com/file/d/1c7Pyz4sCWf99e_jK8Z1Hj6PEwUZOKsMo/view?usp=sharing" target="_blank">RESUME</Navbar.Link>
                    </Navbar.Text>         
            </Navbar.Collapse>            
        </Navbar>    
    )
}