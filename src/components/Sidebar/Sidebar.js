import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #1c2237;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    z-index: 1000;
`;

export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: #fff !important;
`;



export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2 ease-in-out;
    color: #fff;
    cursor: pointer;
    &:hover {
        color:  #f00946;
        transition: .2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;



export default function Sidebar({ isOpen, toggle, navLinks }) {
    return (
        <SidebarContainer isOpen={isOpen}>

            <CloseIcon onClick={toggle} />

            <SidebarWrapper>
                <SidebarMenu>
                    {navLinks.map((data, i) =>
                        <SidebarLink to={data.link} onClick={toggle}>
                            {data.title}
                        </SidebarLink>
                    )}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}