import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {


  return (
    <div>
    <Navbar className='nav-bar py-2' expand='lg'>
      <Container>
        <Navbar.Brand className='nav-brand'><Link className='link' to='/'><img className='nav-logo' src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="logo" />MDB</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-nav">
            <Nav.Link className='nav-txt' ><Link className='link' to='/ '>Latest</Link></Nav.Link>
            <Nav.Link className='nav-txt' ><Link className='link' to='/popular'>Popular</Link></Nav.Link>
            <Nav.Link className='nav-txt' ><Link className='link' to='/comedy'>Comedy</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Home