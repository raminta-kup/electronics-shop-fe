import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const Wrapper = ({ children, backgroundColor, gap, wrapperBackgroundColor, margin }) => {
    return (
        <WrapperAlignCenter
            $wrapperBackgroundColor={wrapperBackgroundColor}
            $margin={margin}
        >
            <WrapperWidth
                $backgroundColor={backgroundColor}
                $gap={gap}
            >
                {children}
            </WrapperWidth>
        </WrapperAlignCenter>
    )
}

const WrapperWidth = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.$gap || "120px"};
    width: 90%;
    background-color: ${props => props.$backgroundColor || "#FFF"};
    @media ${devices.laptop} {
        width: 70%;
    }
    @media ${devices.laptopL} {
        width: 60%;
    }
`

const WrapperAlignCenter = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.$wrapperBackgroundColor || "#FFF"};
    margin:  ${props => props.$margin || "120px 0"};
`