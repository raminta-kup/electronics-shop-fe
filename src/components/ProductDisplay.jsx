import { styled } from "styled-components";
import { Paragraph } from "./Paragraph";
import { StyledImageContainer, StyledProductImage, StyledProductInfoContainer, StyledNewProductHeadline, StyledProductItemContainer, StyledProductName } from "./ProductItem";
import { Wrapper } from "./Wrapper";
import { Button } from "./buttons/Button";
import { QuantityControl } from "./buttons/QuantityControl";
import { SummarySum } from "./checkout/BasketProductSummary";
import { devices } from "../ScreenSizes/screenSizes";
import { IncludedItemsList } from "./IncludedItemsList";
import { ProductDisplayGallery } from "./ProductDisplayGallery";
import { ProductCategoryList } from "./ProductCategoryList";
import { AudiophileExperience } from "./AudiophileExperience";
import { ProductSuggestions } from "./ProductSuggestions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDisplay = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { slug } = useParams();

    const handleAddToCart = () => {

    }

    useEffect(() => {
        fetch(`http://localhost:3000/products/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setIsLoading(false);
            })
    }, [slug]);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Wrapper>
            <ProductDisplayContainer>
                <ProductContainer>
                    <ImgContainer>
                        <StyledProductImage src={product?.image.mobile} />
                    </ImgContainer>
                    <ProductInfoContainer>
                        {product?.new && (<StyledNewProductHeadline>
                            new product
                        </StyledNewProductHeadline>)}
                        <ProductTitle>
                            {product?.name}
                        </ProductTitle>
                        <Paragraph
                            text={product?.description}
                            textColor="#979797"
                            textAlign="left"
                        />
                        <SummarySum>$ {product?.price}</SummarySum>
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
                            text={product?.features}
                            textColor="#979797"
                            textAlign="left"
                        />
                    </StyledFeaturesContainer>
                    <StyledInTheBoxContainer>
                        <StyledHeading>in the box</StyledHeading>
                        <IncludedItemsList product={product} />
                    </StyledInTheBoxContainer>
                </StyledFeaturesAndIncludedContainer>
                <ProductDisplayGallery product={product} />
                <ProductSuggestions product={product} />
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