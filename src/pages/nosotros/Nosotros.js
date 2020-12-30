import React from 'react'
import styled from 'styled-components';
import Especialidades from '../Inicio/Especialidades';

const NosotrosContainer = styled.section`
    min-height: 100vh;
    background-color: #e5e5e5;
`;

const Header = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #1c2237, rgb(48, 56, 88));

    padding: 0 8rem;

   @media screen and (max-width: 859px) {
        padding: 0rem 5rem;
    }

   @media screen and (max-width: 499px) {
    padding: 0rem 1.3rem;
   }

`;

const HeaderTitle = styled.h3`
    color: white;
    font-size: clamp(1rem, 7vw, 2rem);
    position: relative;
    padding: .7rem 0;

    transform: translateY(-1.3rem);   

    &::after {
        position: absolute;
        content: '';

        left: 0;
        bottom: 0;

        margin-left: 50%;
        transform: translateX(-50%);

        width: 4rem;
        height: 3px;
        background-color: white;
    }
`;

const HeaderDescription = styled.p`
    color: white;
    font-size: 1rem;
    
`;

export default function Nosotros() {
    return (
        <NosotrosContainer>
            <Header>
                <HeaderTitle>Nosotros</HeaderTitle>
                <HeaderDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis ut mollitia voluptate hic assumenda laborum tenetur sint quasi magnam itaque accusantium ipsa nulla aut, recusandae ipsam doloremque debitis a!
                </HeaderDescription>
            </Header>
            <Especialidades />
        </NosotrosContainer>
    )
}
