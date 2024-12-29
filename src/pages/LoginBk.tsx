import styled from "styled-components";
import {
    Box, Flex, Switch, FormControl, FormLabel, Container, Avatar, Text, Button, Link,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Input, Heading, Divider
} from "@chakra-ui/react"
import PrimaryButton from "../atoms/Button/PrimaryButton"
import { useForm } from "react-hook-form";
import { FormErrorMessage } from '@chakra-ui/react';

// type FormType = {
//     email: string,
//     password: string
// }

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
        background: #00000008;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const LoginBk = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    // const { register, handleSubmit, formState: { errors } } = useForm < FormType > ({ mode: 'onChange' })
    // const onSubmit = (data: FormType) => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <Box as={'header'} bg={'#4d4d4d'} boxShadow={'#000000ab 0 0 6px'} color={'#fff'} pos={'fixed'} w={'100%'}>
                <Flex h={'52px'} display={'flex'} alignItems={'center'} maxW={'1300px'} m={'auto'} px={'30px'} justifyContent={'space-between'}>
                    <Box bg={'#ddd'} w={'40px'} h={'40px'} lineHeight={'40px'} textAlign={'center'}>ロゴ</Box>
                    <PrimaryButton type={'submit'} h={'36px'} fontSize={'1em'}>ログイン</PrimaryButton>
                </Flex>
            </Box >

            <Container h={'100vh'}>

                <Box as={'main'} p={'60px 0 20px'} h={'calc(100vh - 44px)'} fontSize='1.2em'>
                    <Container maxW={'1300px'} m={'0 auto'} p={'4px 30px'}>
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
                        <BoxStyle bg='#fff' maxW='700px' m='30px auto' >
                            <Box w='100%' h='calc(100vh - 200px)' boxShadow='#00000039 0 0 9px' textAlign='center' pos='relative' fontWeight='600'>
                                <Container maxW='260px' w='100%' pos='absolute' top='50%' left='50%' transform='translate(-50%,-50%)'>
                                    <Heading as='h1' fontWeight='600' m='34px 0 18px'>ログイン</Heading>
                                    <Text bg='#fff' border='1px solid #ccc' lineHeight='50px'>Googleでログイン</Text>
                                    <Divider></Divider>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl isInvalid={!errors.email === false} m='10px 0'>
                                            <FormLabel>
                                                メールアドレス
                                                <Input {...register('email', {
                                                    required: '必須項目です',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                                        message: 'メールアドレスの形式で入力してください'
                                                    }
                                                })}
                                                    w='100%'
                                                    display='block'
                                                    bg='#f9f9f9'
                                                    border='1px solid #b3b3b3'
                                                    lineHeight='28px'
                                                    p='0 0.5em' />
                                            </FormLabel>
                                            <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.email?.message as string || ''}</FormErrorMessage>
                                        </FormControl>
                                        <FormControl isInvalid={!errors.password === false} m='10px 0 14px'>
                                            <FormLabel>
                                                パスワード
                                                <Input {...register('password', {
                                                    required: '必須項目です',
                                                    minLength: {
                                                        value: 8,
                                                        message: '8文字以上で入力してください'
                                                    }
                                                })}
                                                    w='100%'
                                                    display='block'
                                                    bg='#f9f9f9'
                                                    border='1px solid #b3b3b3'
                                                    lineHeight='28px'
                                                    p='0 0.5em' />
                                            </FormLabel>
                                            <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.password?.message as string || ''}</FormErrorMessage>
                                        </FormControl>
                                        <PrimaryButton type='submit'>ログイン</PrimaryButton>
                                    </form>
                                    <Text fontSize='0.86em' m='14px 0'>アカウント登録がお済みでない方は<br /><Link href='/management' textDecoration='underline'>新規登録画面</Link>へ</Text>
                                </Container>
                            </Box>
                        </BoxStyle>

                    </Container>
                </Box >

                <Box as={'footer'} textAlign={'center'} borderTop={'#d1d1d1 1px solid'} bg={'#fff'}>
                    <Text lineHeight={'42px'} m={0}>@aaa</Text>
                </Box>

            </Container >
        </>
    )
}
export default LoginBk