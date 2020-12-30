import React from 'react'
import styled, { css } from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    background-color: #1c2237;

    padding: 1.3rem 8rem;

    @media screen and (max-width: 979px) {
        padding: 1.3rem 4rem;
    }

    @media screen and (max-width: 899px) {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 659px) {
        flex-direction: column;

        & > div:last-of-type {
            margin-top: 2rem;
        }
    }
`;

const EmptyWrapper = styled.div`
    @media screen and (max-width: 899px) {
        display: none;
    }
`;

const DataWrapper = css`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;

    h3 {
        margin-bottom: 10px;
        font-size: 1.25rem;
    }

    & > p {
        margin: 5px 0;
        font-size: 1rem;
    }
`;

const UbicacionContainer = styled.div`
    ${DataWrapper};
`;

const ContactoContainer = styled.div`
    ${DataWrapper};
`;

export default function Footer() {
    return (
        <FooterContainer>
            <EmptyWrapper />
            <UbicacionContainer>
                <h3>Ubicación</h3>
                <p>Saez Peña 1524</p>
                <p>7150 Ayacucho(Buenos Aires)</p>
                <p>Argentina</p>
            </UbicacionContainer>
            <ContactoContainer>
                <h3>Horario de atención</h3>
                <p>Lunes a Viernes</p>
                <p>08:00 - 12:00</p>
                <p>16:00 - 20:00</p>
            </ContactoContainer>
        </FooterContainer>
    )
}
