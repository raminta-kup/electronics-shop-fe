import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const Paragraph = ({ text, textAlign, fontWeight, lineHeight, opacity, textColor, tabletTextAlign, laptopTextAlign }) => {
    return (
        <StyledGrayParagraph
            $fontWeight={fontWeight}
            $textAlign={textAlign}
            $lineHeight={lineHeight}
            $opacity={opacity}
            $textColor={textColor}
            $tabletTextAlign={tabletTextAlign}
            $laptopTextAlign={laptopTextAlign}
        >
            {text}
        </StyledGrayParagraph>
    )
}

export const StyledGrayParagraph = styled.p`
    font-size: 16px;
    text-align: ${props => props.$textAlign || "center"};
    font-weight: ${props => props.$fontWeight || "500"};
    line-height: ${props => props.$lineHeight || "30px"};
    opacity: ${props => props.$opacity || "1"};
    color: ${props => props.$textColor || "#FFFFFF"};

    @media ${devices.tablet} {
        text-align: ${props => props.$tabletTextAlign || "left"};
    }
    @media ${devices.laptop} {
        text-align: ${props => props.$laptopTextAlign || "left"};
    }
`