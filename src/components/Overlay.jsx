import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"
import { useEffect } from "react";

export const Overlay = ({ children, laptopDisplay, handleOutsideClick }) => {

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick, true);
        return () => {
            document.body.removeEventListener("click", handleOutsideClick, true);
        }
    }, [])

    return (
        <OverlayContainer
            $laptopDisplay={laptopDisplay}
            onClick={handleOutsideClick}>
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