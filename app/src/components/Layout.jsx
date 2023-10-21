import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css'

const Layout = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand className="espacio">Camila Aylen Lopez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end">
                            <Link to={' '} className='linkEstilo espacio'>Home</Link>
                            <Link to={'/InfoMia'} className='linkEstilo espacio'>Información mia</Link>
                            <Link to={'/MisCreaciones'} className='linkEstilo espacio'>Mis creaciones</Link>
                            <Link to={'/Favoritos'} className='linkEstilo espacio'>Favoritos</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </React.Fragment>
    )
}

export default Layout