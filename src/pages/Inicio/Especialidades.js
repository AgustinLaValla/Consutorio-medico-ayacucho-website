import React from 'react'
import styled from 'styled-components'
import { especialidades } from '../../data/especialidadesData';
import './Especialidades.css'

const EspecialidadesContainer = styled.section`
    padding: 1.3rem 8rem;
    background-color: #e5e5e5;

    @media screen and (max-width: 899px) {
        padding: 1.3rem 4rem;
    }

    @media screen and (max-width: 499px) {
    padding: 1.3rem 1.3rem;
   }
`;

const EspecialidadesH1 = styled.h1`
    text-align: center;
    font-size: 35px;
    padding: 1rem 0 1.5rem;;
    margin-top: 2rem;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        margin-left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 4rem;
        background-color: #f00946;
        display: inline-block;
    }
`;

const CardsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    padding: 5rem 0;

    
    @media screen and (max-width: 979px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
    }

    @media screen and (max-width: 659px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
    }
    
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    padding: 2rem;

    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, .3);

    cursor: pointer;
    transition: .3s;

    &:hover {
        transition: .3s;
        background-color:  #f00946;

        & > svg {
            fill: white;
        }

        & > h3 {
            color: white;
        }

    }
`;
const CardTitle = styled.h3`
    margin-top: 2.5rem;
    text-align:center;
`;

export default function Especialidades() {
    return (
        <EspecialidadesContainer>
            <EspecialidadesH1>Nuestros Servicios</EspecialidadesH1>
            <CardsWrapper>
                {especialidades.map(({ title, icon: Icon }) =>
                    <Card>
                        <Icon className="especialidadesIcon" />
                        <CardTitle>{title}</CardTitle>
                    </Card>
                )}

            </CardsWrapper>
        </EspecialidadesContainer>
    )
}
