import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageOne from '../../images/clinic1.jpg';
import imageTwo from '../../images/clinic2.jpg';
import imageThree from '../../images/clinic3.jpg';
import styled, { css } from 'styled-components';
import { infoData } from '../../data/infoData';
import Especialidades from './Especialidades';


const ImageContainer = styled.div``;

const Image = styled.img`
   width: 100%;
   height: 70vh;
   object-fit: cover;
`;

const InfoContainer = styled.div`
    margin-top: -40px;
    padding: 1.3rem 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;

    background:  #1c2237;

    @media screen and (max-width: 899px) {
        padding: 1.3rem 4rem;
        grid-gap: 3rem;
    }

    @media screen and (max-width: 659px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
    }

    @media screen and (max-width: 499px) {
    padding: 1.3rem 1.3rem;
   }
`;

const InfoCard = styled.div`
    background-color: transparent;
    height: 200px;

    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;

    position: relative;

    transform: perspective(1000px) ;

    &:hover {
        & > div:first-of-type { // Front side of the card
          transform: perspective(1000px) rotateX(-180deg);
        }

        & > div:last-of-type { // Back side of the card
          transform: perspective(1000px) rotateX(0deg);
        }
  }
`;

const CardSide = css`
    border: 3px solid white;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all .5s ease-in-out;
`;

const CardFront = styled.div`
    ${CardSide};
`;

const CardBack = styled.div`
    ${CardSide};

    transform: rotateX(-180deg);
    background-color: #f00946;
`;

const InfoCartTitle = styled.h3`
    color: white;
    margin: 10px 0;
    font-size: 35px;
`;

const InfoCardSubtitle = styled.p`
    color: white;

`;

const PhoneInfo = styled.h3`
    color: white;
    font-size: 35px;
`;
const AddressInfo = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: white;
`;

export default function Inicio() {

    return (
        <React.Fragment>
            <Carousel autoPlay infiniteLoop showStatus={false} interval={2000}>
                <ImageContainer>
                    <Image src={imageOne} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={imageTwo} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={imageThree} alt="" />
                </ImageContainer>
            </Carousel>
            <InfoContainer>
                {infoData.map(({ icon: Icon, title, description, info, type }, i) =>
                    <InfoCard key={i}>
                        <CardFront>
                            <Icon />
                            <InfoCartTitle>{title}</InfoCartTitle>
                            <InfoCardSubtitle>{description}</InfoCardSubtitle>
                        </CardFront>
                        <CardBack>
                            {type === 'phone'
                               ? <PhoneInfo>{info}</PhoneInfo>
                               : <AddressInfo>
                                    <p>{info.address}</p>
                                    <p>{info.code} {info.city}</p>
                                 </AddressInfo>
                            }
                        </CardBack>
                    </InfoCard>
                )}
            </InfoContainer>
            <Especialidades />
        </React.Fragment>
    )
}
