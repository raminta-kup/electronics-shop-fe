import { styled } from "styled-components"
import { Button } from "./buttons/Button"
import { devices } from "../ScreenSizes/screenSizes"
import { Link } from "react-router-dom"

export const SuggestedProductCard = ({ product }) => {
    return (
        <SuggestedProductCardContainer key={product?.id}>
            <SuggestedProductImg src={product?.image.mobile} />
            <SuggestedProductTitle>{product?.name}</SuggestedProductTitle>
            <Link
                to={`/${product?.category}/${product?.slug}`}
                target="_top"
            >
                <Button
                    text="see product"
                    borderColor="transparent"
                    backgroundColor="#D87D4A"
                    hoverBackground="#FBAF85"
                    textColor="#FFF"
                />
            </Link>
        </SuggestedProductCardContainer>
    )
}

const SuggestedProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    @media ${devices.tablet} {
        width: 100%;
    }
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
