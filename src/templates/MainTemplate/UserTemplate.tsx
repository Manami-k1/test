import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { PropsType } from '../../types';
const UserTemplate: FC<PropsType> = ({ children }) => {
    return (
        <Box bgImg="url('/imgs/bg_black.png')" bgRepeat="repeat" h='240px' w='100%'>
            <Container w='100%' maxW='1200px' m='auto' p='0 20px'>
                {children}
            </Container>
        </Box>
    )
}
export default UserTemplate