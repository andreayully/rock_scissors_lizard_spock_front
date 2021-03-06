import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () =>{
    return(
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <NavLink to="/"><Navbar.Brand>Bazzinga!</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/" activeClassName="active">
                            Score List
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/players"
                            activeClassName="active">
                            Players
                        </NavLink>
                        {/* <NavLink
                            className="nav-link"
                            to="/game/:game_id/"
                            activeClassName="active">
                            Game
                        </NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}
export default Navigation