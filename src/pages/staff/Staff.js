import React from 'react'
import styled from 'styled-components'
import { staffData } from '../../data/staffData';

const StaffContainer = styled.section`
    min-height: 100vh;
    background-color: #e5e5e5;
`;

const Header = styled.div`
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #1c2237, rgb(48, 56, 88));

`;

const HeaderTitle = styled.h3`
    color: white;
    font-size: clamp(1rem, 7vw, 2rem);
    position: relative;
    padding: .7rem 0;

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

const CardsWrapper = styled.section`
    padding: 2rem 8rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;

   @media screen and (max-width: 1000px) {
       grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 859px) {
        padding: 2rem 5rem;
    }

   @media screen and (max-width: 699px) {
    grid-template-columns: repeat(1, 1fr);
   }

   @media screen and (max-width: 499px) {
    padding: 2rem 1.3rem;
   }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;

    height: 600px;

    overflow: hidden;

    border-radius: 10px;


    &:hover {
        &  img {
            transform: scale(1.1);
            transition: .2s;
            
        }
    }
`;

const ImageContainer = styled.div`
    overflow: hidden;
    width: 100%auto;
    height: 70%;

    cursor: pointer;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    object-fit: cover;

    transition: .2s;
`;
const CardBody = styled.div`
    text-align: center;
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    box-shadow: 0px 15px 10px -15px #333;
    
`;
const CardTitle = styled.h1`
    color: #1c2237;
    font-size: 1.3rem;

    margin-bottom: 1rem;
`;
const CardSubtitle = styled.h6`
    color: #555;
    font-size: .9rem;
`;


export default function Staff() {
    return (
        <StaffContainer>
            <Header>
                <HeaderTitle>Staff Médico</HeaderTitle>
            </Header>
            <CardsWrapper>
                {staffData.map(({ name, especialidad, gender, image }) =>
                    <Card>
                        <ImageContainer>
                            <CardImage src={image} />
                        </ImageContainer>
                        <CardBody>
                            <CardTitle>
                                {gender === 'female' ? `Dra.${name}` : `Dr.${name}`}
                            </CardTitle>
                            <CardSubtitle>{especialidad}</CardSubtitle>
                        </CardBody>
                    </Card>
                )}
            </CardsWrapper>
        </StaffContainer>
    )
}
