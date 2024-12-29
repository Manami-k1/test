import styled from "styled-components"
import { FC } from "react"
import ButtonBaseStyle from "."
import { ButtonType } from "../../types"

const ButtonStyle = styled(ButtonBaseStyle)`
font-size: 1em;
`


const PrimaryButton: FC<ButtonType> = ({ children, type, h, bg = '#ffb727', p = '0 1em' }) => {
    return (
        <ButtonStyle bg={bg} h={h} p={p} fontFamily='"ヒラギノ角ゴ Std W8","Hiragino Kaku Gothic Std", sans-serif' color='#fff' border='none' boxShadow='#0000001b 0 0 3px' type={type}><span>{children}</span></ButtonStyle>
        // <ButtonStyle bg={bg} h={h} p='0 1em' fontFamily='ヒラギノ角ゴ Std W8' color='#fff' border='none' boxShadow='#0000001b 0 0 3px' type={type}><span>{children}</span></ButtonStyle>
    )
}
export default PrimaryButton