import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { PropsType } from '../../types';
const DefaultTemplate: FC<PropsType> = ({ children }) => {
    return (
        <Box bgImg="url('/imgs/bg_white.png')" bgRepeat="repeat" w='100%' h='calc(100vh - 94px)'>
            <Container w='100%' maxW='1200px' m='auto' h='100%' p='0 20px'>
                {children}
            </Container>
        </Box >
    )
}
export default DefaultTemplate