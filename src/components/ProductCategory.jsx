import { Link } from "react-router-dom";
import { IconArrowRight } from "./buttons/IconArrowRight";
import { styled } from "styled-components";
import { devices } from "../ScreenSizes/screenSizes";

export const ProductCategory = ({ category, categoryImage, to }) => {
    return (
        <StyledProductCategoryContainer>
            <StyledCategoryImage src={categoryImage} />
            <StyledCategoryShopContainer>
                <StyledCategoryName>{category}</StyledCategoryName>
                    <StyledShopLink 
                    to={to}
                    target="_top"
                    >
                        <span>shop</span>
                        <IconArrowRight />
                    </StyledShopLink>
            </StyledCategoryShopContainer>
        </StyledProductCategoryContainer>
    )
}

const StyledProductCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #F1F1F1;
    padding: 90px 0 30px 0;
    width: 100%;
    border-radius: 8px;
`

const StyledCategoryName = styled.h4`
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
`

const StyledShopLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    gap: 12px;
    color: #979797;
    align-items: center;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 14px;
`

const StyledCategoryImage = styled.img`
    height: 144px;
    top: -34%;
    position: absolute;
`

const StyledCategoryShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    align-items: center;
`