import { FaPhoneSquare, FaMapMarkedAlt } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const Icon = css`
    color:  #f00946;
    font-size: 50px;
`;

const PhoneIcon = styled(FaPhoneSquare)`
    ${Icon}
`;
const MapMarketIcon = styled(FaMapMarkedAlt)`
    ${Icon}
`;


export const infoData = [
    {
        icon: PhoneIcon,
        title: 'Teléfono',
        description: 'Comunicate con nosotros',
        type: 'phone',
        info: '02296-453869'
    },
    {
        icon: MapMarketIcon,
        title: 'Dirección',
        description: 'Nuestro Consultorio',
        type: 'address',
        info: {
            code: 7150, 
            city: 'Ayacucho',
            address: 'Saez Peña 1524'
        }
    }
]