import React,{Component} from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import About from './About'
import Experience from './Experience'

export default class Navigation extends Component {
   render(){
    return (
        <div className="NavContainer">
            <BrowserRouter> 
                <Navbar fix="top">                    
                            <Navbar.Brand>
                                <strong>Minji Kim</strong>
                        </Navbar.Brand>
                            <Navbar.Toggle />                       
                    <Navbar.Collapse className="justify-content-end" >
                        <Nav >
                            <NavItem href="/#about">About</NavItem>
                            <NavItem href="/#experience">Experience</NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                 <Switch>
                    <Route path='/about'>
                         <About/> 
                        </Route> 
                        <Route path='/experience'>
                         <Experience/> 
                        </Route> 
    
                </Switch> 
            </BrowserRouter> 

        </div>
    )
   }
}

