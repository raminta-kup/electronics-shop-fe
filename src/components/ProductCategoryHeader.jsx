import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const ProductCategoryHeader = ({ categoryTitle }) => {
    return (
        <StyledProductCategoryHeader>
            <StyledCategoryHeading>{categoryTitle}</StyledCategoryHeading>
        </StyledProductCategoryHeader>
    )
}

const StyledProductCategoryHeader = styled.div`
    background-color: #191919;
    padding: 36px 0;
    @media ${devices.tablet} {
        padding: 80px;
    }
`

const StyledCategoryHeading = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    letter-spacing: 3px;
    text-align: center;
`