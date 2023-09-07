import { styled } from "styled-components"
import { Paragraph } from "./Paragraph"
import { StyledImageContainer, StyledProductImage, StyledProductInfoContainer, StyledNewProductHeadline, StyledProductItemContainer, StyledProductName } from "./ProductItem"
import { Wrapper } from "./Wrapper"
import { Button } from "./buttons/Button"
import { QuantityControl } from "./buttons/QuantityControl"
import { SummarySum } from "./checkout/BasketProductSummary"
import { devices } from "../ScreenSizes/screenSizes"
import { IncludedItemsList } from "./IncludedItemsList"
import { ProductDisplayGallery } from "./ProductDisplayGallery"
import { ProductCategoryList } from "./ProductCategoryList"
import { AudiophileExperience } from "./AudiophileExperience"
import { ProductSuggestions } from "./ProductSuggestions"

export const ProductDisplay = ({ isNew, onClick }) => {

    const handleAddToCart = () => {

    }

    return (
        <Wrapper>
            <ProductDisplayContainer>
                <ProductContainer>
                    <ImgContainer>
                        <StyledProductImage />
                    </ImgContainer>
                    <ProductInfoContainer>
                        {isNew && (<StyledNewProductHeadline>
                            new product
                        </StyledNewProductHeadline>)}
                        <ProductTitle>
                            XX99 Mark II
                            Headphones
                        </ProductTitle>
                        <Paragraph
                            text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                            textColor="#979797"
                            textAlign="left"
                        />
                        <SummarySum>$ 4,500</SummarySum>
                        <AddToCartContainer>
                            <QuantityControl />
                            <Button
                                onClick={handleAddToCart}
                                backgroundColor="#D87D4A"
                                textColor="white"
                                borderColor="transparent"
                                text="add to cart"
                                hoverBackground="#FBAF85"
                            />
                        </AddToCartContainer>
                    </ProductInfoContainer>
                </ProductContainer>
                <StyledFeaturesAndIncludedContainer>
                    <StyledFeaturesContainer>
                        <StyledHeading>features</StyledHeading>
                        <Paragraph
                            text="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

                    Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
                            textColor="#979797"
                            textAlign="left"
                        />
                    </StyledFeaturesContainer>
                    <StyledInTheBoxContainer>
                        <StyledHeading>in the box</StyledHeading>
                        <IncludedItemsList />
                    </StyledInTheBoxContainer>
                </StyledFeaturesAndIncludedContainer>
                <ProductDisplayGallery />
                <ProductSuggestions />
                <ProductCategoryList />
                <AudiophileExperience />
            </ProductDisplayContainer>
        </Wrapper>
    )
}



const AddToCartContainer = styled.div`
    display: flex;
    gap: 16px;
`

const ProductInfoContainer = styled(StyledProductInfoContainer)`
    align-items: flex-start;
    @media ${devices.tablet} {
        width: 100%;
    }
`
const ImgContainer = styled(StyledImageContainer)`
    @media ${devices.tablet} {
        aspect-ratio: 9 / 19;
        height: 480px;
    }
`

const ProductContainer = styled(StyledProductItemContainer)`
padding: 30px 0;
@media ${devices.tablet} {
    flex-direction: row;
    gap: 80px;
}  
`

const ProductTitle = styled(StyledProductName)`
    text-align: left;
`

const ProductDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
`

const StyledHeading = styled.h2`
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    @media ${devices.tablet} {
        width: 50%;
    }
    @media ${devices.laptop} {
        width: 100%;
    }
`

const StyledInTheBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media ${devices.tablet} {
        flex-direction: row;
        justify-content: flex-start;
    }
    @media ${devices.laptop} {
        flex-direction: column;
        gap: 30px;
        width: 30%;
        
    }
`

const StyledFeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media ${devices.laptop} {
        width: 70%;
    }
`
const StyledFeaturesAndIncludedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 125px;
    @media ${devices.laptop} {
        flex-direction: row;
    }
`