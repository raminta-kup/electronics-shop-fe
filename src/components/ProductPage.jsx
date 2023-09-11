import { styled } from "styled-components";
import { ProductItem } from "./ProductItem";
import { ProductCategoryHeader } from "./ProductCategoryHeader";
import { ProductCategoryList } from "./ProductCategoryList";
import { devices } from "../ScreenSizes/screenSizes";
import { AudiophileExperience } from "./AudiophileExperience";
import { Wrapper } from "./Wrapper";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const ProductPage = ({ productCategory }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const filteredProductsByCategory = products?.filter(product => product.category === productCategory);

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
    }, []);

    //using "?" (in product?.name) for safety, because if "products" was null or undefined it would throw an error. In this case, it would just show undefined.

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <ProductCategoryHeader categoryTitle={productCategory} />
            <Wrapper>
                <StyledHeadphonesSectionContainer>
                    <StyledProductsContainer>
                        {filteredProductsByCategory?.map(product => {
                            return (
                                <ProductItem
                                    key={product?.slug}
                                    product={product}
                                />
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