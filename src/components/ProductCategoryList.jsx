import { ProductCategory } from "./ProductCategory";
import { styled } from "styled-components";
import { devices } from "../ScreenSizes/screenSizes";

export const ProductCategoryList = () => {

    return (
        <StyledProductCategoryContainer>
            <ProductCategory
                to="/headphones"
                category="headphones"
                categoryImage="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-headphones.png"
            />
            <ProductCategory
                to="/speakers"
                category="speakers"
                categoryImage="https://audiophile-e.netlify.app/images/shared/desktop/image-speakers.png"
            />
            <ProductCategory
                to="/earphones"
                category="earphones"
                categoryImage="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-earphones.png"
            />
        </StyledProductCategoryContainer>
    )
}

export const StyledProductCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
    width: 100%;
    @media ${devices.tablet} {
        flex-direction: row;
        gap: 16px;
    }
    @media ${devices.laptop} {
        gap: 30px;
    }
`