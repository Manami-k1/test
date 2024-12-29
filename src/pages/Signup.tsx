import {
    FormControl, Text, Divider, FormLabel, FormErrorMessage, Input, Heading, Link,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import PrimaryButton from "../atoms/Button/PrimaryButton"
import PageTepmlate from "../templates/PageTemplates/PageTemplate"
import DefaultTemplate from "../templates/MainTemplate/DefaultTemplate"
import AuthTemplate from "../templates/MainTemplate/AuthTemplate"

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    // const { register, handleSubmit, formState: { errors } } = useForm < FormType > ({ mode: 'onChange' })
    // const onSubmit = (data: FormType) => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <PageTepmlate>
            <DefaultTemplate>
                <AuthTemplate>
                    <Heading as='h1' fontWeight='600' m='34px 0 18px' fontSize='22px'>アカウント登録（無料）</Heading>
                    <Text bg='#fff' border='1px solid #ccc' lineHeight='50px' w='260px' m='auto'>Googleで登録</Text>
                    <Divider />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={!errors.email === false} m='16px 0' fontSize='1.1em'>
                            <FormLabel textAlign='center'>
                                {/* TODO:修正 */}
                                <Input type="checkbox" />
                                <Link href='/management' textDecoration='underline' color='#ffb727'>利用規約/プライバシーポリシー</Link>に同意する
                            </FormLabel>
                            <FormErrorMessage fontSize='0.8em' color='#e85c5c'>{errors.email?.message as string || ''}</FormErrorMessage>
                        </FormControl>
                    </form>
                    <Text fontSize='0.96em' m='14px 0'>アカウント登録がお済みの方は<br /><Link href='/login' textDecoration='underline' color='#ffb727'>ログイン画面</Link>へ</Text>
                </AuthTemplate>
            </DefaultTemplate>
        </PageTepmlate >
    )
}
export default Signup