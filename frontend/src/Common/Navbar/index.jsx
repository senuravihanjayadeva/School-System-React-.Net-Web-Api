import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='my-2' color='light' light>
        <NavbarBrand href='/'>School system</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/'>Student</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/allocatesubjects'>Allocate Subjects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/allocateclassroom'>Allocate Classroom</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/report'>Student Report</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
