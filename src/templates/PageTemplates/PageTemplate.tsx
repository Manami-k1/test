import { FC } from "react"
import { Container, Box, Flex, Text, HStack, Avatar, List, ListItem, Link, FormControl, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import PrimaryButton from "../../atoms/Button/PrimaryButton"
import { EditIcon } from "@chakra-ui/icons"
import { PropsType } from "../../types"

const PageTepmlate: FC<PropsType> = ({ children }) => {
    return (
        <>
            <Container bg='#f2f2f2' h='100vh' bgRepeat="repeat">
                <Box as='header' bg='#ffb727' h='50px' w='100%' boxShadow='#0000002b 0 0 3px' pos='relative' zIndex='30' alignItems='center' display='flex'>
                    <Container w='100%' maxW='1200px' m='auto' p='0 20px' >
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Text color='#fff' fontSize='20px' fontWeight='600'>Logo</Text>
                            <HStack alignItems='center' spacing='12px'>
                                <FormControl h='100%'>
                                    <InputGroup>
                                        <InputLeftElement h='100%' p='0 0 0 8px'>
                                            <Search2Icon color="#ffffffb5" h='100%' boxSize='16px' />
                                        </InputLeftElement>
                                        <Input bg='#33333315' border='none' lineHeight='28px' p='0 6px 0 30px' />
                                    </InputGroup>
                                </FormControl>
                                <PrimaryButton type='submit' bg='#996600' h='34px' fontSize='1em'>投稿する</PrimaryButton>
                                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' boxSize='34px' bg='red.500' borderRadius='9999px' />
                            </HStack>
                        </Flex>
                    </Container>
                </Box>
                <Box bg='#fff' w='100%' boxShadow='#0000002b 0 0 3px' pos='relative' zIndex='20'>
                    <Container w='100%' maxW='1200px' m='auto' p='0 20px'>
                        <List display="flex" flexDirection="row" gap='0 20px' fontWeight='600' alignItems='center' h='100%' p='3px 0 0'>
                            <ListItem>
                                <Link href="/mypage" display='flex' alignItems='center' color='#808080' h='40px' borderBottom='#fff 3px solid'><EditIcon m='0 0.4em 0 0' />マイページ</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/article-list" display='flex' alignItems='center' color='#808080' h='40px' borderBottom='#ffb727 3px solid'><EditIcon m='0 0.4em 0 0' />記事の管理</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/new" display='flex' alignItems='center' color='#808080' h='40px' borderBottom='#fff 3px solid'><EditIcon m='0 0.4em 0 0' />新規作成</Link>
                            </ListItem>
                        </List>
                    </Container>
                </Box>
                {/* <Box bgImg="url('/imgs/bg_black.png')" bgRepeat="repeat" h='240px' w='100%'>
                    <Container w='100%' maxW='1200px' m='auto' p='0 20px' > */}
                {children}
                {/* </Container>
                </Box> */}
            </Container>
        </>
    )
}
export default PageTepmlate