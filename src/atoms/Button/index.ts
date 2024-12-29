import { Button } from "@chakra-ui/react"
import styled from "styled-components"

const ButtonBaseStyle = styled(Button)`
position: relative;
height: 2.8em;
&:hover {
cursor: pointer;
opacity: 0.8;
transition: 0.3s;
}
span {
   z-index: 10;
}
&::before {
        content: '';
        position: absolute;
        clip-path: polygon(100% 0,  0 100% ,100% 100%);
        background: #00000010;
        width: 100%;
        height: 100%;
    }
`
export default ButtonBaseStyle