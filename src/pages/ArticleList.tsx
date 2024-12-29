import {
    Grid, Box, Flex, FormControl, Container, Avatar, Text,
    InputGroup, InputLeftElement, Input, Heading,
    Card,
    HStack,
    Link,
    Stack,
    Tabs, Tab, Span
} from "@chakra-ui/react"
import { EditIcon, Search2Icon } from "@chakra-ui/icons"
import PrimaryButton from "../atoms/Button/PrimaryButton"
import PageTepmlate from "../templates/PageTemplates/PageTemplate"
import UserTemplate from "../templates/MainTemplate/UserTemplate"

const ArticleList = () => {
    return (
        <>
            <PageTepmlate>
                <UserTemplate>
                    <Container w='100%' p='18px 0 0'>
                        <Flex alignItems='baseline' m='0 0 6px' gap='10px'>
                            <Heading as='h1' color='#fff' fontSize='14px' fontWeight='600' ><EditIcon m='0 0.4em 0 0' />記事の管理</Heading>
                            <Text color='#b3b3b3' fontWeight='600' fontSize='10px'>作成した記事の一覧・プレビュー</Text>
                        </Flex>
                        {/* TODO: 修正 */}
                        <Grid gridTemplateColumns='36.6% auto' h='calc(100vh - 140px)'>
                            <Box bg='#fff' boxShadow='#00000026 0 0 12px' zIndex='20' overflowY='scroll'>
                                <Flex borderBottom='#ccc 1px solid' h='32px'>
                                    <FormControl w='calc(100% - 86px)' >
                                        <InputGroup h='100%' display='flex' alignItems='center'>
                                            <Input w='100%' p='0 6px 0 30px' border='none' h='100%'
                                                type="text"
                                            />
                                            <InputLeftElement h='100%' p='0 0 0 8px'>
                                                <Search2Icon color="#ffb727" h='100%' boxSize='16px' />
                                            </InputLeftElement>
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl w='86px' m='6px auto' borderLeft='#ccc 1px solid' display='flex' alignItems='center'>
                                        <Link display='inline-flex' alignItems='center' m='auto' fontSize='12px' color='#ffb727' fontWeight='600' ><EditIcon m='0 0.4em 0 0' />絞り込み</Link>
                                    </FormControl>
                                </Flex>
                                <Grid>
                                    <Card borderBottom='#ccc 1px solid' p='12px 18px 12px 14px' borderLeft='4px solid #ffb727' bg='#fffdee' fontSize='11px' gap='8px' lineHeight='1.5'>
                                        <HStack justifyContent='space-between' alignItems='center'>
                                            <Text color='#808080' fontSize='0.9em'>最終更新日 2023.12.24</Text>
                                            <Tabs>
                                                <Flex gap='4px'>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>英語</Tab>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>Python</Tab>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>初心者</Tab>
                                                </Flex>
                                            </Tabs>
                                        </HStack>
                                        <HStack justifyContent='space-between' gap='14px' alignItems='flex-end'>
                                            <Stack gap='6px'>
                                                <Heading fontFamily='"ヒラギノ角ゴ Std W8","Hiragino Kaku Gothic Std", sans-serif' fontWeight='600' fontSize='16px'>【日本人エンジニア必携】英語命名規則の決定版
                                                    <Text as="span" fontFamily='sans-serif' color="#fff" bg='#c69c6d' fontSize='0.68em' display='inline-block' lineHeight='1.7em' p='0 0.7em' m='0 0 1px 8px' verticalAlign='middle'>下書き</Text>
                                                </Heading>
                                                <Text color='#666'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                            </Stack>
                                            <Stack gap='8px'>
                                                <PrimaryButton type='submit' h='36px' fontSize='2em'>編集する</PrimaryButton>
                                                <PrimaryButton type='submit' h='36px' fontSize='1em'>削除する</PrimaryButton>
                                            </Stack>
                                        </HStack>
                                    </Card>
                                    <Card borderBottom='#ccc 1px solid' p='12px 18px' bg='#fff' fontSize='11px' gap='8px' lineHeight='1.5'>
                                        <HStack justifyContent='space-between' alignItems='center'>
                                            <Text color='#808080' fontSize='0.9em'>最終更新日 2023.12.24</Text>
                                            <Tabs>
                                                <Flex gap='4px'>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>英語</Tab>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>Python</Tab>
                                                    <Tab fontSize='0.8em' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>初心者</Tab>
                                                </Flex>
                                            </Tabs>
                                        </HStack>
                                        <HStack justifyContent='space-between' gap='14px' alignItems='flex-end'>
                                            <Stack gap='6px'>
                                                <Heading fontFamily='"ヒラギノ角ゴ Std W8","Hiragino Kaku Gothic Std", sans-serif' fontWeight='600' fontSize='16px'>【日本人エンジニア必携】英語命名規則の決定版</Heading>
                                                <Text color='#666'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                            </Stack>
                                            <Stack gap='8px'>
                                                <PrimaryButton type='submit' h='36px' fontSize='1em'>編集する</PrimaryButton>
                                                <PrimaryButton type='submit' h='36px' fontSize='1em'>削除する</PrimaryButton>
                                            </Stack>
                                        </HStack>
                                    </Card>
                                </Grid>
                            </Box>
                            <Box bg='#fff' boxShadow='#00000026 0 0 12px' p='62px 40px' fontSize='13px' zIndex='10' overflowY='scroll'>
                                <Stack gap='10px'>
                                    <Heading fontFamily='"ヒラギノ角ゴ Std W8","Hiragino Kaku Gothic Std", sans-serif' fontSize='22px' >【日本人エンジニア必携】英語命名規則の決定版</Heading>
                                    <Tabs>
                                        <Flex gap='4px'>
                                            <Tab fontSize='12px' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>英語</Tab>
                                            <Tab fontSize='12px' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>Python</Tab>
                                            <Tab fontSize='12px' border='none' bg='#b3b3b3' color='#fff' borderRadius='9999px'>初心者</Tab>
                                        </Flex>
                                    </Tabs>
                                    <Flex justifyContent='space-between' alignItems='center' gap='12px'>
                                        <Flex w='100%' color='#808080' fontSize='12px' borderTop='#e6e6e6 1px solid' borderBottom='#e6e6e6 1px solid' p='8px 0' gap='1.2em' h='100%'>
                                            <Text>最終更新日 2023.12.24</Text>
                                            <Text>投稿日 2023.12.24</Text>
                                        </Flex>
                                        {/*  TODO: 修正 */}
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' boxSize='40px' bg='red.500' borderRadius='9999px' />
                                    </Flex>
                                </Stack>
                                <Container m='26px 0'>
                                    <Heading fontSize='16px' fontWeight='600' p='3px 8px' borderLeft='12px solid #ffde81' m='24px 0 14px'>
                                        はじめに
                                    </Heading>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                    <Heading fontSize='16px' fontWeight='600' p='3px 8px' borderLeft='12px solid #ffde81' m='24px 0 14px'>
                                        次に
                                    </Heading>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                    <Text m='8px 0'>英語での適切な命名は、コードの可読性や保守性を向上させるために重要です。</Text>
                                </Container>
                            </Box>
                        </Grid>
                    </Container>
                </UserTemplate >
            </PageTepmlate >
            {/* </Container > */}
        </>
    )
}
export default ArticleList