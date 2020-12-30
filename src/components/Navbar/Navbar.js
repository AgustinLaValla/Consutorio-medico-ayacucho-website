import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 8rem;

    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

    z-index: 100;

    position: sticky;
    top:0;

    background: #fff;

    @media screen and (max-width: 959px) {
        padding: 0rem 5rem;
    }
    @media screen and (max-width: 859px) {
        padding: 1.15rem 5rem;
    }

    @media screen and (max-width: 499px) {
        padding: 1.15rem 1.3rem;
    }
`;

const Logo = styled.div``;

const NavLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const NavLinkList = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 859px) {
        display: none;
    }
`;

const NavLink = styled.li`
    height: 100%;
    padding: 2rem 1rem;
    display: inline-block;
    list-style: none;
    cursor: pointer;
    transition: 0.1s;
    position: relative;
    font-weight: 600;
    color: black;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #f00946;
        bottom: 0px;
        left: 0;
        transition: 0.3s;
        opacity: 0;
    }

    &:hover {
        color: #283153;
    }

    &:hover::after {
        opacity: 1;
    }

`;

const MenuIcon = styled(FaBars)`
    font-size:30px;
    color: black;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 859px) {
        display: inline-block;
    }
`;

export default function Navbar({ navLinks, toggle }) {
    return (
        <Nav>
            <Logo>
                <h3>Consultorio Médico</h3>
                <h3>Ayacucho</h3>
            </Logo>
            <NavLinks>
                <NavLinkList>
                    {navLinks.map((data, i) =>
                        <Link to={data.link}>
                            <NavLink>{data.title}</NavLink>
                        </Link>
                    )}
                </NavLinkList>
            </NavLinks>
            <MenuIcon onClick={toggle}/>
        </Nav>
    )
}
