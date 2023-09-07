import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"


export const Overlay = ({children, laptopDisplay}) => {
    return (
        <OverlayContainer $laptopDisplay={laptopDisplay}>
            {children}
        </OverlayContainer>
    )
}

const OverlayContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0000006a;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    @media ${devices.laptop} {
        display: ${props => props.$laptopDisplay};
    }
`