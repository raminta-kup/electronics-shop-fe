import { Overlay } from "../Overlay"
import ReactDOM from "react-dom"
import { StyledProductCategoryContainer } from "../ProductCategoryList"
import { ProductCategory } from "../ProductCategory"
import { styled } from "styled-components"
import { devices } from "../../ScreenSizes/screenSizes"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const Menu = ({ open, setMenuOpen }) => {

    const location = useLocation();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            setMenuOpen(false);
        }
    }, [location]);

    if (!open) return null

    return ReactDOM.createPortal(
        <Overlay laptopDisplay="none">
            <StyledMenuContainer>
                <ProductCategory
                    to="/headphones"
                    category="headphones"
                    categoryImage="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-headphones.png" />
                <ProductCategory
                    to="/speakers"
                    category="speakers"
                    categoryImage="https://audiophile-e.netlify.app/images/shared/desktop/image-speakers.png" />
                <ProductCategory
                    to="/earphones"
                    category="earphones"
                    categoryImage="https://www.audiophile.ascends.fr/wp-content/uploads/2021/11/image-category-thumbnail-earphones.png" />
            </StyledMenuContainer>
        </Overlay>,
        document.getElementById("portal")
    )
}

const StyledMenuContainer = styled(StyledProductCategoryContainer)`
    position: fixed;
    background-color: #FFF;
    padding: 180px 0 80px 0;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: scroll;
    @media ${devices.tablet} {
        height: 130px;
        overflow-y: hidden;
        padding: 180px 16px 50px 16px;
    }
    @media ${devices.laptop} {
        display: none;
    }
`