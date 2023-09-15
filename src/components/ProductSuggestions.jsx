import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"
import { SuggestedProductCard } from "./SuggestedProductCard"

export const ProductSuggestions = ({ product }) => {
    return (
        <StyledProductSuggestionsContainer>
            <StyledHeading>you may also like</StyledHeading>
            <StyledSuggestedProductsContainer>
                {product?.others.map((item) => {
                    return (
                        <SuggestedProductCard
                            key={item.slug}
                            product={item}
                        />
                    )
                })}
            </StyledSuggestedProductsContainer>
        </StyledProductSuggestionsContainer>
    )
}

const StyledProductSuggestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 50px;
`

const StyledHeading = styled.h2`
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`

const StyledSuggestedProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    @media ${devices.tablet} {
        flex-direction: row;
        gap: 16px;
    }
`