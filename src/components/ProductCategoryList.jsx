import { products } from "../data/productsCatalog";
import { ProductCategory } from "./ProductCategory";
import { styled } from "styled-components";
import { devices } from "../ScreenSizes/screenSizes";

export const ProductCategoryList = () => {
    const mappedProductCategories = products.map(product => product.category);
    // const uniqueCategories = [...vnew Set(mappedProductCategories)]; 

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
                categoryImage="https://www.audiophile.ascends.fr/wp-content/uploads/2021/11/image-category-thumbnail-earphones.png" 
                />
            {/* {uniqueCategories.map(category => <ProductCategory category={category} />)} */}
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