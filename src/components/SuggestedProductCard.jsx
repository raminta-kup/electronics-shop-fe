import { styled } from "styled-components"
import { Button } from "./buttons/Button"
import { devices } from "../ScreenSizes/screenSizes"

export const SuggestedProductCard = () => {

    const handleOpenProduct = () => {

    }


    return (
        <SuggestedProductCardContainer>
            <SuggestedProductImg src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-xx99-mark-one-headphones.jpg" />
            <SuggestedProductTitle>XX99 MARK I</SuggestedProductTitle>
            <Button 
            text="see product"
            borderColor="transparent"
            backgroundColor="#D87D4A"
            hoverBackground="#FBAF85"
            textColor="#FFF"
            onClick={handleOpenProduct}
            />
        </SuggestedProductCardContainer>
    )
}

const SuggestedProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
`

const SuggestedProductImg = styled.img`
    aspect-ratio: 2 / 1;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    @media ${devices.tablet} {
        aspect-ratio: 0.5 / 0.7;
    }
    @media ${devices.laptop} {
        aspect-ratio: 1 / 1;
    }
`

const SuggestedProductTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
`
