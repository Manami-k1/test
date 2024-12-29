import { FC } from 'react';
import styled from 'styled-components';
import { Box, Container } from '@chakra-ui/react';

import { PropsType } from '../../types';



const BoxStyle = styled(Box)`
position: relative;
background-color: #fff;
& * {
        z-index: 20;
    }
span {
   z-index: 10;
}
&::before {
        content: '';
        position: absolute;
        clip-path: polygon(100% 0,0 100% ,100% 100%);
        background: #00000006;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
const AuthTemplate: FC<PropsType> = ({ children }) => {


    return (
        <Container h='100%' p='70px 0'>
            <BoxStyle bg='#fff' w='100%' maxW='560px' h='100%' m='auto' boxShadow='#00000037 0 0 10px' pos='relative'>
                <Container w='100%' pos='absolute' top='50%' left='50%' transform='translate(-50%,-50%)' textAlign='center' fontSize='14px' fontWeight='600'>
                    {children}
                </Container>
            </BoxStyle>
        </Container >
    )
}
export default AuthTemplate