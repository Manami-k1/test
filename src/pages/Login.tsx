import {
    FormControl, Text, Divider, FormLabel, FormErrorMessage, Input, Heading, Link, Box, AbsoluteCenter,
    Container,
    Stack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import PrimaryButton from "../atoms/Button/PrimaryButton"
import PageTepmlate from "../templates/PageTemplates/PageTemplate"
import DefaultTemplate from "../templates/MainTemplate/DefaultTemplate"
import AuthTemplate from "../templates/MainTemplate/AuthTemplate"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    // const { register, handleSubmit, formState: { errors } } = useForm < FormType > ({ mode: 'onChange' })
    // const onSubmit = (data: FormType) => {
    const onSubmit = (data) => {
        console.log(data)
        navigate('/mypage')
    }
    return (
        <PageTepmlate>
            <DefaultTemplate>
                <AuthTemplate>
                    <Container maxW='260px' m='auto'>
                        <Heading as='h1' fontWeight='600' m='34px 0 18px' fontSize='22px'>ログイン</Heading>
                        <Text bg='#fff' border='1px solid #ccc' lineHeight='50px'>Googleでログイン</Text>
                        <Box pos='relative' p='12px 0'>
                            <Divider borderBottom='2px solid #e6e6e6' />
                            <AbsoluteCenter bg='white' px='8' w='fit-content' color='#999'>
                                or
                            </AbsoluteCenter>
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack gap='8px' m='0 0 16px'>
                                <FormControl isInvalid={!errors.email === false} >
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
                                            border={errors.email ? '1px solid #ff6161' : '1px solid #b3b3b3'}
                                            lineHeight='28px'
                                            p='0 0.5em' />
                                    </FormLabel>
                                    <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.email && errors.email?.message}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!errors.password === false} >
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
                                    <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.password && errors.password?.message}</FormErrorMessage>
                                </FormControl>
                            </Stack>
                            <PrimaryButton type='submit' p='0 1.6em'>ログイン</PrimaryButton>
                        </form>
                        <Text fontSize='0.86em' m='14px 0'>アカウント登録がお済みでない方は<br /><Link href='/signup' textDecoration='underline' color='#ffb727'>アカウント登録画面</Link>へ</Text>
                    </Container>
                </AuthTemplate>
            </DefaultTemplate>
        </PageTepmlate >
    )
}
export default Login