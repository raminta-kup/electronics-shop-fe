import { styled } from "styled-components";
import { NavList } from "./NavList";
import logo from "../assets/icons/audiophile.png";
import shoppingCart from "../assets/icons/Combined Shape.png"
import { Hamburger } from "./buttons/Hamburger";
import { devices } from "../ScreenSizes/screenSizes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Cart } from "./Cart";
import { Menu } from "./buttons/Menu";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenCart = () => {
        setIsOpen(true);

    }
    const handleOpenMenu = () => {
        setMenuOpen(true);
    }

    return (
        <StyledHeaderContainer>
            <StyledHamburgerBtn
                onClick={handleOpenMenu}
            >
                <Hamburger />
            </StyledHamburgerBtn>
            <StyledLogoContainer>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </StyledLogoContainer>
            <NavList
                display="none"
                gap="40px"
            />
            <ShoppingCartBtn
                onClick={handleOpenCart}
            >
                <img src={shoppingCart} />
            </ShoppingCartBtn>
            <Cart
                open={isOpen}
                setIsOpen={(val) => setIsOpen(val)}
            />
            <Menu
                open={menuOpen}
                setMenuOpen={(val) => setMenuOpen(val)}
            />
        </StyledHeaderContainer>
    )
}

const StyledHeaderContainer = styled.header`
    background-color: #191919;
    border-bottom: 1px solid #979797;
    display: flex;
    justify-content: space-around;
    padding: 30px;
    align-items: center;  
    position: relative;
    z-index: 2000;
`
const ShoppingCartBtn = styled.button`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`

const StyledHamburgerBtn = styled.button`
    background-color: transparent;
    border: transparent;
    display: flex;
    cursor: pointer;

    @media ${devices.laptop} {
        display: none;
}
`

const StyledLogoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;

    @media ${devices.tablet} {
        justify-content: left;
        margin-left: 30px;
}
    @media ${devices.laptop} {
        flex: 0;
}
`