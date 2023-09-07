import { styled } from "styled-components";
import { products } from "../data/productsCatalog"
import { ProductItem } from "./ProductItem";
import { ProductCategoryHeader } from "./ProductCategoryHeader";
import { ProductCategoryList } from "./ProductCategoryList";
import { devices } from "../ScreenSizes/screenSizes";
import { AudiophileExperience } from "./AudiophileExperience";
import { Wrapper } from "./Wrapper";


export const ProductPage = ({ productCategory }) => {
    const filteredProductsByCategory = products.filter(product => product.category === productCategory);

    return (
        <>
            <ProductCategoryHeader categoryTitle={productCategory} />
            <Wrapper>
                <StyledHeadphonesSectionContainer>
                    <StyledProductsContainer>
                        {filteredProductsByCategory.map(productCategory => {
                            return (
                                <ProductItem key={productCategory.id} product={productCategory} />
                            )
                        })}
                    </StyledProductsContainer>
                    <ProductCategoryList />
                </StyledHeadphonesSectionContainer>
                <AudiophileExperience />
            </Wrapper>
        </>
    )
}

const StyledProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 140px;
`
const StyledHeadphonesSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 140px;
    align-items: center;
`