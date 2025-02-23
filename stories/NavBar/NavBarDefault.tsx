import React from 'react';
import { Navbar } from './Navbar';
import { NavBarToggleButton } from './NavBarToggleButton';

export function NavBarDefault() {
    return(
        <Navbar>
            <div>test</div>
            <NavBarToggleButton>Toggle</NavBarToggleButton>
        </Navbar>
    );
}