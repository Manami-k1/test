import styled from "styled-components"
import {
    Grid, GridItem, Box, Flex, Switch, FormControl, FormLabel, Container, Avatar, Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    InputGroup, InputLeftElement, Input, Heading,
    Card, CardHeader, CardBody, CardFooter,
    Tag, LinkBox, LinkOverlay, Code
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import PrimaryButton from "../atoms/Button/PrimaryButton"

const LinkBoxStyle = styled(LinkBox)`
position: relative;
background-color: #fff;
padding: 1.4em 1em;
border: #ccc 2px solid;
margin-bottom: 0.9em;

 
&:hover {
cursor: pointer;
opacity: 0.8;
transition: 0.3s;
}
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
        background: #00000008;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const CardStyle = styled(Card)`
position: relative;
background-color: #fff;
box-shadow:#00000057 0 0 6px;

span {
   z-index: 10;
}
&::before {
        content: '';
        position: absolute;
        clip-path: polygon(100% 0,0 100% ,100% 100%);
        background: #00000008;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &>* {
        z-index: 20;
    }
`



const MyPageBk = () => {
    return (
        <>
            <Box as={'header'} bg={'#ffb727'} boxShadow={'#0000003b 0 0 6px'} color={'#fff'} pos={'fixed'} w={'100%'}>
                <Flex h={'50px'} display={'flex'} alignItems={'center'} maxW={'1300px'} m={'auto'} px={'30px'} justifyContent={'space-between'}>
                    <Box bg={'#ddd'} w={'40px'} h={'40px'} lineHeight={'40px'} textAlign={'center'}>ロゴ</Box>
                    <Flex w={'340px'} justifyContent={'space-between'} alignItems={'center'}>
                        <FormControl display='flex' alignItems='center'>
                            <Switch w={'50px'} minH={'50px'} isChecked />
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                公開する/公開しない
                            </FormLabel>
                        </FormControl>
                        <PrimaryButton type={'submit'} h={'36px'} bg='#' fontSize={'1em'}>投稿する</PrimaryButton>
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' w={'30px'} h={'30px'} bg='red.500' borderRadius={'9999px'} />
                    </Flex>
                </Flex>
            </Box >

            <Container h={'100vh'}>

                <Box as={'main'} p={'60px 0 20px'} h={'calc(100vh - 44px)'}>
                    <Container maxW={'1260px'} m={'0 auto'} p={'4px 30px'}>
                        <Breadcrumb color={'#676767'} mb={'20px'} fontWeight={'bold'}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Grid
                            templateColumns='repeat(10, 1fr)'
                            m={'auto'}
                            gap={'20px'}
                        >
                            <GridItem colSpan={4}>
                                <Flex h={'36px'}>
                                    <InputGroup pos={'relative'} >
                                        <InputLeftElement pointerEvents='none'>
                                            <Search2Icon color='#ffb520' h={'36px'} w={'30px'} pl={'12px'} />
                                        </InputLeftElement>
                                        <Input type='text' border={'none'} lineHeight={'50px'} borderRadius={'9999px'} boxShadow={'#00000052 0 0 6px'} w={'100%'} pl={'44px'} fontSize={'20px'} mr={'20px'} />
                                    </InputGroup>
                                    <Text m={'0px'} bg={'#c69c6d'} lineHeight={'36px'} p={'0 1em'} color={'#fff'} border={'none'} textAlign={'center'} w={'160px'}>カテゴリ選択</Text>
                                </Flex>

                                <Container m={'1.2em 0'} fontSize='1.06em' overflowY={'scroll'} h={'calc(100vh - 250px)'}>

                                    {/* <LinkBox as='article' bg={'#fffdee'} p='1.4em 1em' border={'#ccc 2px solid'} mb={'0.9em'}> */}
                                    {/* <LinkBoxStyle as='article' bg={'#fff'} p='1.4em 1em' mb={'0.9em'} boxShadow='#00000052 0 0 6px' m='6px'> */}
                                    <LinkBoxStyle>
                                        <Text as='time' fontSize='0.9em' color='#777' m={'0px'}>最終更新日：XXXX年XX月XX日</Text>
                                        <Flex alignItems={'end'}>
                                            <Container>
                                                <Flex justifyContent={'space-between'} alignItems={'end'} m={'0.8em 0 0.5em'}>
                                                    <LinkOverlay href='#' textDecoration={'none'} color={'#4d4d4d'}>
                                                        <Heading fontSize={'1.4em'} fontFamily={'ヒラギノ角ゴ Std W8'} m={'0px'}>タイトル</Heading>
                                                    </LinkOverlay>
                                                    <Box w={'fit-content'}>
                                                        <Tag bg={'#ddd'} lineHeight={'2em'} p={'0 1em'} borderRadius={'0.8em'} ml={8}>タグ</Tag>
                                                        <Tag bg={'#ddd'} lineHeight={'2em'} p={'0 1em'} borderRadius={'0.8em'} ml={8}>タグ</Tag>
                                                    </Box>
                                                </Flex>
                                                <Text m={'0px'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            </Container>
                                            <Container w={'min-content'} ml={'1.6em'}>
                                                <PrimaryButton type={'button'} m={'0 0 0.6em'}>編集する</PrimaryButton>
                                                <PrimaryButton type={'button'} >削除する</PrimaryButton>
                                            </Container>
                                        </Flex>
                                    </LinkBoxStyle>

                                </Container>

                            </GridItem>
                            <GridItem colSpan={6}>
                                {/* <Card boxShadow={'#00000039 0 0 6px'} bg={'#fff'} h={'calc(100vh - 130px)'} zIndex={'-1'} p={'3em'} fontSize={'16px'}> */}
                                <CardStyle h='calc(100vh - 168px)' boxShadow='#0000002f 0 0 9px' bg='#fff' fontSize='1.2em' m='4px' mt='0'>
                                    <Box overflowY='scroll' h='calc(100vh - 168px)' p='2.6em' >
                                        <CardHeader>
                                            <Flex alignItems={'center'} justifyContent={'space-between'}>
                                                <Flex alignItems={'center'}>
                                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' w={'40px'} h={'40px'} bg='red.500' borderRadius='9999px' />
                                                    <Text ml={'8px'}>名前</Text>
                                                </Flex>
                                                <Text as='time' fontSize={'0.86em'} textAlign={'right'}>最終更新日：XXXX年XX月XX日</Text>
                                            </Flex>
                                            <Heading as={'h1'} fontSize={'2em'} fontFamily={'ヒラギノ角ゴ Std W8'} m={'1.2em 0 0.3em'}>タイトル</Heading>
                                            <Box w={'fit-content'} fontSize={'0.86em'}>
                                                <Tag bg={'#ddd'} lineHeight={'2em'} p={'0 1em'} borderRadius={'10px'} mr={'8px'}>タグ</Tag>
                                                <Tag bg={'#ddd'} lineHeight={'2em'} p={'0 1em'} borderRadius={'10px'} mr={'8px'}>タグ</Tag>
                                            </Box>
                                        </CardHeader>
                                        <CardBody m={'1.2em 0'}>
                                            <Heading as={'h2'} fontWeight={'bold'} m={'1.5em 0 0.6em'} borderLeft={'0.6em solid #e6e6e6'} borderBottom={'0.2em solid #e6e6e6'} p={'0.08em 0.5em'}>見出し1</Heading>
                                            <Text m={'0.6em 0'}>文章文章文章ぶんしょう、文章文章文章ぶんしょう、文章文章文章ぶんしょう、文章文章文章ぶんしょう、</Text>
                                            <Text m={'0.6em 0'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            <Text m={'0.6em 0'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            <Code bg={'#333'} color={'#fff'} p={'1em'} w={'100%'} boxSizing="border-box" borderRadius={'0.2em'}>Javascript</Code>
                                            <Text m={'0.6em 0'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            <Text m={'0.6em 0'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            <Text m={'0.6em 0'}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                                            <Heading as={'h3'} fontWeight={'bold'} m={'1.5em 0 0.6em'} borderLeft={'0.6em solid #e6e6e6'} p={'0.06em 0.5em'}>タイトル2</Heading>
                                            <Code bg={'#333'} color={'#fff'} p={'1em'} w={'100%'} boxSizing="border-box" borderRadius={'0.2em'}>Javascript</Code>
                                        </CardBody>
                                        <CardFooter></CardFooter>
                                    </Box>
                                </CardStyle>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box >

                <Box as={'footer'} textAlign={'center'} borderTop={'#d1d1d1 1px solid'} bg={'#fff'}>
                    <Text lineHeight={'42px'} m={0}>@aaa</Text>
                </Box>

            </Container >
        </>
    )
}
export default MyPageBk