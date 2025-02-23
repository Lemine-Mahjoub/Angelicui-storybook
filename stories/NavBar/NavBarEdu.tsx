import React from 'react';
import { Navbar, useNavbar } from './NavBar';
import { NavBarToggleButton } from './NavBarToggleButton';
import ap from '../assets/NavBarEdu/ap.svg'
import col from '../assets/NavBarEdu/col.svg'
import gdc from '../assets/NavBarEdu/gdc.svg'
import home from '../assets/NavBarEdu/home.svg'
import pdc from '../assets/NavBarEdu/pdc.svg'
import session from '../assets/NavBarEdu/session.svg'
import teach from '../assets/NavBarEdu/teach.svg'
import logo from '../assets/NavBarEdu/LogoBigGraph.svg'

export function NavBarEdu() {
    return (
        <Navbar>
            <div className="flex justify-center bg-[#232A35] w-fit h-screen p-2">
                <div className='flex flex-col items-center w-full gap-2'>
                    <img src={logo} alt="logo" />
                    <hr />
                    <ButtonGroup />
                </div>
                <NavBarToggleButton>
                    test
                </NavBarToggleButton>
            </div>
        </Navbar>
    );
}

function ButtonGroup() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <ButtonIconText icon={home} text="Home" />
            <ButtonIconText icon={ap} text="AP" />
            <ButtonIconText icon={col} text="COL" />
            <ButtonIconText icon={gdc} text="GDC" />
            <ButtonIconText icon={pdc} text="PDC" />
            <ButtonIconText icon={session} text="Session" />
            <ButtonIconText icon={teach} text="Teach" />
        </div>
    );
}

function ButtonIconText({ icon, text }: { icon: string, text: string }) {
    const { isOpen } = useNavbar();
    return (
        <button className="flex justify-center items-center gap-2">
            <img src={icon} className='w-[26px] h-[26px]' alt="icon" />
            {isOpen && <p className="text-white font-[14px] leading-[20.3px]">{text}</p>}
        </button>
    );
}