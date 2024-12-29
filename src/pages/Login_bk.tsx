import {
    Box, FormControl, FormLabel,
    Input
} from "@chakra-ui/react"
import PrimaryButton from "../atoms/Button/PrimaryButton"
import { useForm } from "react-hook-form";
import { FormErrorMessage } from '@chakra-ui/react';


const Login_bk = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <Box as={'main'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={!!errors.email} m='10px 0'>
                        <FormLabel>
                            メールアドレス
                            <Input {...register('email', {
                                required: '必須項目です',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                    message: 'メールアドレスの形式で入力してください'
                                }
                            })}
                            />
                        </FormLabel>
                        <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.email?.message}</FormErrorMessage>
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
                            />
                        </FormLabel>
                        <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.password?.message}</FormErrorMessage>
                    </FormControl>
                    <PrimaryButton type='submit'>ログイン</PrimaryButton>
                </form>
            </Box>
        </>
    )
}
export default Login_bk