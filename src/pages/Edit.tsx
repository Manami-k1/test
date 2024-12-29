import {
    Text, Heading,
    Container, Flex, Grid, Box,
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import PageTepmlate from "../templates/PageTemplates/PageTemplate"
import UserTemplate from "../templates/MainTemplate/UserTemplate"

const Edit = () => {
    return (
        <PageTepmlate>
            <UserTemplate>
                <Container w='100%' p='18px 0 0'>
                    <Flex alignItems='baseline' m='0 0 6px' gap='10px'>
                        <Heading as='h1' color='#fff' fontSize='14px' fontWeight='600' ><EditIcon m='0 0.4em 0 0' />記事の編集</Heading>
                        <Text color='#b3b3b3' fontWeight='600' fontSize='10px'>編集管理画面・プレビュー</Text>
                    </Flex>
                    {/* TODO: 修正 */}
                    <Grid gridTemplateColumns='24% auto' h='calc(100vh - 140px)'>
                        <Box bg='#fff' boxShadow='#00000026 0 0 12px' zIndex='20'>
                            <Flex borderBottom='#ccc 1px solid' h='32px'>

                            </Flex>
                            <Grid>

                            </Grid>
                        </Box>
                        <Box bg='#fff' boxShadow='#00000026 0 0 12px' zIndex='10' overflowY='scroll'>

                        </Box>
                    </Grid>
                </Container>
            </UserTemplate>
        </PageTepmlate >
    )
}
export default Edit